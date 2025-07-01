import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { KLAVIYO_API_KEY, KLAVIYO_LIST_ID } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, reason } = await request.json();

		// Validate input data
		if (!name?.trim() || !email?.trim() || !reason?.trim()) {
			return json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ error: 'Invalid email format' },
				{ status: 400 }
			);
		}

		// Create profile in Klaviyo
		const profileData = {
			data: {
				type: 'profile',
				attributes: {
					email: email.trim(),
					first_name: name.trim(),
					properties: {
						'Affiliate_Application_Reason': reason.trim(),
						'Application_Source': 'Website Form',
						'Application_Date': new Date().toISOString()
					}
				}
			}
		};

		// Submit to Klaviyo
		const profileResponse = await fetch('https://a.klaviyo.com/api/profiles/', {
			method: 'POST',
			headers: {
				'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
				'Content-Type': 'application/json',
				'revision': '2023-12-15'
			},
			body: JSON.stringify(profileData)
		});

		if (!profileResponse.ok) {
			console.error('Klaviyo profile creation failed:', await profileResponse.text());
			throw new Error('Failed to create profile');
		}

		const profileResult = await profileResponse.json();
		console.log('Profile created:', profileResult.data.id);

		// Subscribe to list
		const subscriptionData = {
			data: {
				type: 'profile-subscription-bulk-create-job',
				attributes: {
					profiles: {
						data: [
							{
								type: 'profile',
								attributes: {
									email: email.trim(),
									subscriptions: {
										email: {
											marketing: {
												consent: 'SUBSCRIBED'
											}
										}
									}
								}
							}
						]
					}
				},
				relationships: {
					list: {
						data: {
							type: 'list',
							id: KLAVIYO_LIST_ID
						}
					}
				}
			}
		};

		const subscriptionResponse = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
			method: 'POST',
			headers: {
				'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
				'Content-Type': 'application/json',
				'revision': '2023-12-15'
			},
			body: JSON.stringify(subscriptionData)
		});

		if (!subscriptionResponse.ok) {
			console.error('Klaviyo subscription failed:', await subscriptionResponse.text());
			// Don't throw error here as profile was created successfully
		}

		// Track the affiliate application event
		const eventData = {
			data: {
				type: 'event',
				attributes: {
					properties: {
						'Name': name.trim(),
						'Email': email.trim(),
						'Reason': reason.trim(),
						'Source': 'Website Affiliate Form'
					},
					metric: {
						data: {
							type: 'metric',
							attributes: {
								name: 'Affiliate Application Submitted'
							}
						}
					},
					profile: {
						data: {
							type: 'profile',
							attributes: {
								email: email.trim()
							}
						}
					}
				}
			}
		};

		const eventResponse = await fetch('https://a.klaviyo.com/api/events/', {
			method: 'POST',
			headers: {
				'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
				'Content-Type': 'application/json',
				'revision': '2023-12-15'
			},
			body: JSON.stringify(eventData)
		});

		if (!eventResponse.ok) {
			console.error('Klaviyo event tracking failed:', await eventResponse.text());
		}

		return json({
			success: true,
			message: 'Affiliate application submitted successfully'
		});

	} catch (error) {
		console.error('Server error:', error);
		return json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}; 
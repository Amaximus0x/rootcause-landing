<script lang="ts">
	import { Header, Footer } from '$lib';
	
	// Form state
	let name = '';
	let email = '';
	let reason = '';
	let isSubmitting = false;
	let submitMessage = '';

	// Validation state
	let nameError = '';
	let emailError = '';
	let reasonError = '';
	let touched = {
		name: false,
		email: false,
		reason: false
	};

	// Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Validation functions
	function validateName(value: string): string {
		if (!value.trim()) {
			return 'Name is required';
		}
		if (value.trim().length < 2) {
			return 'Name must be at least 2 characters';
		}
		return '';
	}

	function validateEmail(value: string): string {
		if (!value.trim()) {
			return 'Email is required';
		}
		if (!emailRegex.test(value)) {
			return 'Please enter a valid email address';
		}
		return '';
	}

	function validateReason(value: string): string {
		if (!value.trim()) {
			return 'Please tell us why you\'d like to join';
		}
		if (value.trim().length < 10) {
			return 'Please provide at least 10 characters';
		}
		return '';
	}

	// Real-time validation
	$: nameError = touched.name ? validateName(name) : '';
	$: emailError = touched.email ? validateEmail(email) : '';
	$: reasonError = touched.reason ? validateReason(reason) : '';
	$: isFormValid = !nameError && !emailError && !reasonError && name.trim() && email.trim() && reason.trim();

	// Submit to our secure API endpoint
	async function submitToServer() {
		console.log('Submitting to secure server API...');
		
		try {
			const response = await fetch('/api/affiliate/apply', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					reason: reason.trim()
				})
			});

			const result = await response.json();
			
			if (!response.ok) {
				throw new Error(result.error || 'Server error');
			}

			console.log('Form submitted successfully:', result);
			return true;
			
		} catch (error) {
			console.error('Server submission failed:', error);
			throw error;
		}
	}

	// Handle form submission
	async function handleSubmit() {
		// Mark all fields as touched for validation
		touched.name = true;
		touched.email = true;
		touched.reason = true;

		// Validate all fields
		const currentNameError = validateName(name);
		const currentEmailError = validateEmail(email);
		const currentReasonError = validateReason(reason);

		if (currentNameError || currentEmailError || currentReasonError) {
			submitMessage = 'Please fix the errors above before submitting.';
			return;
		}

		isSubmitting = true;
		submitMessage = '';

		try {
			console.log('Starting form submission...');
			
			await submitToServer();

			// Reset form and show success message
			name = '';
			email = '';
			reason = '';
			// Reset validation state
			touched = {
				name: false,
				email: false,
				reason: false
			};
			submitMessage = 'Thank you! Your affiliate application has been submitted successfully. We\'ll get back to you within 24 hours.';
			
		} catch (error) {
			console.error('Error submitting form:', error);
			submitMessage = error instanceof Error ? error.message : 'There was an error submitting your application. Please try again or contact us directly.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<!-- RootCause Affiliate Apply Page -->
<div class="w-full h-auto relative bg-pure-white overflow-hidden">
	<!-- Header -->
	<div class="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px]">
		<Header />
	</div>

	<!-- Main Content -->
	<div class="w-full flex justify-center items-start pt-8 pb-16">
		<div class="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col justify-start items-center gap-8">
				<!-- Header Section -->
				<div class="flex flex-col justify-start items-center gap-4">
					<div class="text-center">
						<span class="text-black text-4xl lg:text-[53px] font-bold font-['Nunito_Sans'] lg:leading-[62px] leading-tight">Apply Now</span>
					</div>
					<div class="text-center max-w-lg">
						<span class="text-gray-500 text-base lg:text-[18px] font-normal font-['Nunito_Sans'] lg:leading-[27px] leading-relaxed">We'd love to know what inspires you to share our work.</span>
					</div>
				</div>

				<!-- Form Section -->
				<div class="w-full flex flex-col justify-start items-center gap-6">
					<div class="w-full flex flex-col justify-start items-start gap-4">
						<!-- Name Input -->
						<div class="w-full">
							<input
								type="text"
								bind:value={name}
								on:blur={() => touched.name = true}
								on:input={() => { if (!touched.name) touched.name = true; }}
								placeholder="Enter your name"
								class="w-full px-6 py-4 border {nameError ? 'border-red-500 focus:ring-red-600' : 'border-black/50 focus:ring-teal-600'} rounded-full text-black text-[16px] font-semibold font-['Nunito_Sans'] placeholder-black/50 focus:outline-none focus:ring-2 focus:border-transparent"
							/>
							{#if nameError}
								<p class="mt-2 px-2 text-red-500 text-sm font-medium font-['Nunito_Sans']">{nameError}</p>
							{/if}
						</div>

						<!-- Email Input -->
						<div class="w-full">
							<input
								type="email"
								bind:value={email}
								on:blur={() => touched.email = true}
								on:input={() => { if (!touched.email) touched.email = true; }}
								placeholder="Enter your email"
								class="w-full px-6 py-4 border {emailError ? 'border-red-500 focus:ring-red-600' : 'border-black/50 focus:ring-teal-600'} rounded-full text-black text-[16px] font-semibold font-['Nunito_Sans'] placeholder-black/50 focus:outline-none focus:ring-2 focus:border-transparent"
							/>
							{#if emailError}
								<p class="mt-2 px-2 text-red-500 text-sm font-medium font-['Nunito_Sans']">{emailError}</p>
							{/if}
						</div>

						<!-- Reason Textarea -->
						<div class="w-full">
							<textarea
								bind:value={reason}
								on:blur={() => touched.reason = true}
								on:input={() => { if (!touched.reason) touched.reason = true; }}
								placeholder="Tell us why you'd like to join our affiliate program"
								rows="8"
								class="w-full px-6 py-4 border {reasonError ? 'border-red-500 focus:ring-red-600' : 'border-black/50 focus:ring-teal-600'} rounded-[35.42px] text-black text-[16px] font-semibold font-['Nunito_Sans'] placeholder-black/50 resize-none focus:outline-none focus:ring-2 focus:border-transparent"
							></textarea>
							{#if reasonError}
								<p class="mt-2 px-2 text-red-500 text-sm font-medium font-['Nunito_Sans']">{reasonError}</p>
							{/if}
						</div>
					</div>

										<!-- Submit Button -->
					<div class="w-full flex flex-col justify-start items-start gap-2">
						<div class="flex justify-start">
							<button 
								class="px-8 py-4 {isFormValid && !isSubmitting ? 'bg-black/10 hover:bg-black/20' : 'bg-gray-200'} rounded-full inline-flex justify-center items-center gap-2 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
								on:click={handleSubmit}
								disabled={isSubmitting || !isFormValid}
								title={!isFormValid ? 'Please fill in all fields correctly to submit' : 'Submit your affiliate application'}
							>
							{#if isSubmitting}
								<div class="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
								<span class="text-gray-500 text-[16px] font-semibold font-['Nunito_Sans']">Sending...</span>
							{:else}
								<span class="text-gray-500 text-[16px] font-semibold font-['Nunito_Sans'] group-hover:text-gray-600">Send</span>
								<div class="w-4 h-4 relative overflow-hidden">
									<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
										<path d="M14.5298 4.76908V11.9634C14.5298 12.1835 14.4423 12.3947 14.2867 12.5503C14.131 12.706 13.9199 12.7935 13.6997 12.7935C13.4795 12.7935 13.2684 12.706 13.1127 12.5503C12.957 12.3947 12.8696 12.1835 12.8696 11.9634V6.77518L5.43248 14.2109C5.27654 14.3668 5.06503 14.4544 4.84449 14.4544C4.62395 14.4544 4.41244 14.3668 4.2565 14.2109C4.10055 14.0549 4.01294 13.8434 4.01294 13.6229C4.01294 13.4024 4.10055 13.1908 4.2565 13.0349L11.6936 5.59919H6.5054C6.28524 5.59919 6.0741 5.51173 5.91843 5.35605C5.76275 5.20038 5.67529 4.98923 5.67529 4.76908C5.67529 4.54892 5.76275 4.33777 5.91843 4.1821C6.0741 4.02642 6.28524 3.93896 6.5054 3.93896H13.6997C13.9199 3.93896 14.131 4.02642 14.2867 4.1821C14.4423 4.33777 14.5298 4.54892 14.5298 4.76908Z" fill="#7C7C7C"/>
									</svg>
								</div>
							{/if}
						</button>
						</div>
					</div>

					<!-- Submit Message -->
					{#if submitMessage}
						<div class="w-full mt-4">
							<div class="p-4 rounded-lg {submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}">
								<p class="text-sm font-medium font-['Nunito_Sans']">{submitMessage}</p>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="w-full mt-16">
		<Footer />
	</div>
</div> 
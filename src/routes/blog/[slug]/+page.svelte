<script lang="ts">
	import { Header, Footer, CategorySidebar } from '$lib';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	// All blog posts data
	const allBlogPosts = [
		{
			id: 1,
			slug: "understanding-german-new-medicine",
			title: "Understanding German New Medicine: A New Perspective on Healing",
			content: `
			<p>In recent years, there's been a growing movement toward understanding the emotional roots of physical illness. One framework that's gaining momentum among holistic health practitioners and wellness seekers is German New Medicine (GNM) — a revolutionary approach that sees symptoms not as malfunctions, but as meaningful biological responses.</p>

			<p>German New Medicine is based on the discoveries of Dr. Ryke Geerd Hamer, who identified a profound connection between emotional shocks and physical symptoms. According to GNM, every disease originates from an unexpected emotional conflict — something sudden, dramatic, and deeply felt — which creates a biological response in the body.</p>

			<p>Rather than labeling symptoms as something to fight or suppress, GNM views them as part of a two-phase process of healing:</p>

			<h3>The Conflict-Active Phase</h3>
			<p>When we experience an unexpected emotional shock, our body enters what GNM calls the "conflict-active phase." During this time, our nervous system shifts into high alert, creating specific biological changes designed to help us cope with the perceived threat.</p>

			<h3>The Healing Phase</h3>
			<p>Once the emotional conflict is resolved, the body naturally transitions into a healing phase. This is when many symptoms actually appear — not as signs of disease, but as evidence that our body is actively working to restore balance and repair any changes that occurred during the conflict-active phase.</p>

			<p>This perspective offers a fundamentally different way of understanding health challenges. Instead of seeing symptoms as random occurrences or genetic inevitabilities, GNM suggests they're meaningful responses to our life experiences.</p>

			<h3>Practical Applications</h3>
			<p>Understanding GNM doesn't mean dismissing conventional medicine, but rather expanding our toolkit for healing. By exploring the emotional context of our symptoms, we can:</p>
			<ul>
				<li>Identify unresolved conflicts that may be affecting our health</li>
				<li>Support our body's natural healing processes</li>
				<li>Develop greater self-awareness and emotional resilience</li>
				<li>Make more informed decisions about our health journey</li>
			</ul>

			<p>Whether you're dealing with chronic health challenges or simply interested in a more holistic approach to wellness, German New Medicine offers valuable insights into the profound connection between our emotional and physical well-being.</p>
			`,
			subtitle: "Understanding German New Medicine: A New Perspective on Healing",
			additionalContent: `In recent years, there's been a growing movement toward understanding the emotional roots of physical illness. One framework that's gaining momentum among holistic health practitioners and wellness seekers is German New Medicine (GNM) — a revolutionary approach that sees symptoms not as malfunctions, but as meaningful biological responses.

German New Medicine is based on the discoveries of Dr. Ryke Geerd Hamer, who identified a profound connection between emotional shocks and physical symptoms. According to GNM, every disease originates from an unexpected emotional conflict — something sudden, dramatic, and deeply felt — which creates a biological response in the body.

Rather than labeling symptoms as something to fight or suppress, GNM views them as part of a two-phase process of healing: In recent years, there's been a significant shift in the way people view health and disease. As more individuals explore holistic wellness, there's growing curiosity about the mind-body connection — especially how our emotions and experiences may influence our physical health. One of the most compelling frameworks emerging in this space is German New Medicine (GNM) — a revolutionary model that challenges conventional ideas about disease and healing.`,
			featuredImage: "/vlog1.png",
			inlineImage: "/vlog2.jpg",
			date: "2024-12-15",
			category: "Health Insights",
			readTime: "5 min read"
		},
		{
			id: 2,
			slug: "mind-body-connection",
			title: "The Mind-Body Connection: How Emotions Shape Physical Health",
			content: `The relationship between our emotional state and physical wellbeing is far more profound than most people realize. Every emotion we experience creates a cascade of biochemical changes throughout our body, influencing everything from our immune system to our digestive health.

When we experience chronic stress, unresolved trauma, or persistent emotional conflicts, our bodies respond with physical symptoms. These aren't random occurrences — they're meaningful communications from our body's wisdom.

Understanding this connection empowers us to approach healing holistically, addressing not just the physical symptoms but the emotional roots that may be sustaining them.`,
			subtitle: "The Mind-Body Connection: How Emotions Shape Physical Health",
			additionalContent: `The relationship between our emotional state and physical wellbeing is far more profound than most people realize. Every emotion we experience creates a cascade of biochemical changes throughout our body, influencing everything from our immune system to our digestive health.

When we experience chronic stress, unresolved trauma, or persistent emotional conflicts, our bodies respond with physical symptoms. These aren't random occurrences — they're meaningful communications from our body's wisdom.

Understanding this connection empowers us to approach healing holistically, addressing not just the physical symptoms but the emotional roots that may be sustaining them.`,
			featuredImage: "/vlog2.jpg",
			inlineImage: "/vlog3.jpg",
			date: "2024-12-10",
			category: "Mind-Body Connection",
			readTime: "7 min read"
		},
		{
			id: 3,
			slug: "starting-healing-journey",
			title: "Starting Your Healing Journey: Listening to Your Body's Messages",
			content: `Your body is constantly communicating with you, sending signals and messages through symptoms, sensations, and patterns. Learning to listen to these messages is the first step in any genuine healing journey.

Many of us have been conditioned to ignore or suppress our body's signals, viewing symptoms as inconveniences to be eliminated rather than valuable information to be understood. But what if your recurring headaches, digestive issues, or chronic pain are actually your body's way of highlighting unresolved emotional conflicts?

This shift in perspective — from fighting symptoms to understanding them — opens up entirely new possibilities for healing and transformation.`,
			subtitle: "Starting Your Healing Journey: Listening to Your Body's Messages",
			additionalContent: `Your body is constantly communicating with you, sending signals and messages through symptoms, sensations, and patterns. Learning to listen to these messages is the first step in any genuine healing journey.

Many of us have been conditioned to ignore or suppress our body's signals, viewing symptoms as inconveniences to be eliminated rather than valuable information to be understood. But what if your recurring headaches, digestive issues, or chronic pain are actually your body's way of highlighting unresolved emotional conflicts?

This shift in perspective — from fighting symptoms to understanding them — opens up entirely new possibilities for healing and transformation.`,
			featuredImage: "/vlog3.jpg",
			inlineImage: "/vlog1.png",
			date: "2024-12-05",
			category: "Getting Started",
			readTime: "4 min read"
		}
	];

	// Get current blog post based on slug (for now, default to first one)
	const currentSlug = $page.params.slug || "understanding-german-new-medicine";
	const blogPost = allBlogPosts.find(post => post.slug === currentSlug) || allBlogPosts[0];
	
	// Get other blog posts for "Keep reading" section (excluding current post)
	const otherBlogPosts = allBlogPosts.filter(post => post.slug !== currentSlug);

	function goBack() {
		goto('/blog');
	}
</script>

<!-- RootCause Blog Details Page -->
<div class="w-full h-auto relative bg-pure-white overflow-hidden">
	<!-- Header -->
	<div class="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px]">
		<Header />
	</div>

	<!-- Main Content -->
	<div class="w-full flex justify-center items-start py-8">
		<div class="w-full max-w-7xl mx-auto px-4">
			
			<!-- Back Button -->
			<div class="mb-8">
				<a href="/blog" class="inline-flex items-center gap-2 text-black hover:text-teal-600 transition-colors">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span class="text-base font-medium font-['Nunito_Sans']">Back to Blog</span>
				</a>
			</div>

			<!-- Main Content Area with Sidebar -->
			<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
				
				<!-- Blog Post Content -->
				<div class="flex-1">
					<article class="w-full">
						<!-- Featured Image -->
						<img class="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg mb-8" src={blogPost.featuredImage} alt={blogPost.title} />
						
						<!-- Post Header -->
						<div class="mb-8">
							<h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-tight mb-4">{blogPost.title}</h1>
							<div class="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
								<span class="text-sm font-medium">{blogPost.date}</span>
								<span class="hidden sm:block">•</span>
								<span class="text-sm font-medium">{blogPost.readTime}</span>
								<span class="hidden sm:block">•</span>
								<span class="text-sm font-medium text-teal-600">{blogPost.category}</span>
							</div>
						</div>

						<!-- Post Content -->
						<div class="prose prose-lg max-w-none mb-12">
							<div class="text-black text-base font-normal font-['Nunito_Sans'] leading-relaxed">
								{@html blogPost.content}
							</div>
						</div>

						<!-- Share Section -->
						<div class="border-t border-gray-200 pt-8 mb-12">
							<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
								<div class="flex items-center gap-4">
									<span class="text-black text-base font-normal font-['Nunito_Sans']">Share this article:</span>
									<div class="flex items-center gap-3">
										<!-- LinkedIn -->
										<div class="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM9 16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5V16.5ZM8.25 9C8.0275 9 7.80999 8.93402 7.62498 8.8104C7.43998 8.68679 7.29578 8.51109 7.21064 8.30552C7.12549 8.09995 7.10321 7.87375 7.14662 7.65552C7.19002 7.43729 7.29717 7.23684 7.4545 7.0795C7.61184 6.92217 7.81229 6.81502 8.03052 6.77162C8.24875 6.72821 8.47495 6.75049 8.68052 6.83564C8.88609 6.92078 9.06179 7.06498 9.1854 7.24998C9.30902 7.43499 9.375 7.6525 9.375 7.875C9.375 8.17337 9.25647 8.45952 9.0455 8.6705C8.83452 8.88147 8.54837 9 8.25 9ZM17.25 16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125V16.5Z" fill="#2B9C8E"/>
											</svg>
										</div>
										<!-- Facebook -->
										<div class="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M21.75 12C21.7469 14.3829 20.8726 16.6825 19.2917 18.4656C17.7109 20.2486 15.5326 21.3921 13.1671 21.6806C13.1145 21.6866 13.0611 21.6813 13.0107 21.6651C12.9602 21.649 12.9137 21.6223 12.8743 21.5869C12.8348 21.5514 12.8034 21.508 12.782 21.4596C12.7605 21.4111 12.7496 21.3586 12.75 21.3056V14.25H15C15.1028 14.2502 15.2045 14.2293 15.2989 14.1885C15.3933 14.1478 15.4783 14.088 15.5487 14.013C15.619 13.938 15.6732 13.8494 15.7078 13.7526C15.7424 13.6558 15.7568 13.5529 15.75 13.4503C15.7334 13.2574 15.6444 13.078 15.5009 12.9481C15.3574 12.8181 15.1701 12.7474 14.9765 12.75H12.75V10.5C12.75 10.1022 12.908 9.72062 13.1893 9.43932C13.4706 9.15801 13.8521 8.99998 14.25 8.99998H15.75C15.8528 9.0002 15.9545 8.97929 16.0489 8.93853C16.1433 8.89777 16.2283 8.83804 16.2987 8.76304C16.369 8.68805 16.4232 8.59939 16.4578 8.50258C16.4924 8.40577 16.5068 8.30288 16.5 8.20029C16.4834 8.0071 16.3941 7.82739 16.2502 7.69742C16.1063 7.56745 15.9185 7.49689 15.7246 7.49998H14.25C13.4543 7.49998 12.6912 7.81605 12.1286 8.37866C11.566 8.94127 11.25 9.70433 11.25 10.5V12.75H8.99996C8.89714 12.7498 8.79538 12.7707 8.70099 12.8114C8.60659 12.8522 8.52159 12.9119 8.45126 12.9869C8.38092 13.0619 8.32676 13.1506 8.29213 13.2474C8.2575 13.3442 8.24315 13.4471 8.24996 13.5497C8.26655 13.7429 8.35579 13.9226 8.49968 14.0525C8.64357 14.1825 8.8314 14.2531 9.02527 14.25H11.25V21.3075C11.2503 21.3604 11.2394 21.4128 11.218 21.4612C11.1967 21.5096 11.1653 21.5529 11.126 21.5884C11.0866 21.6238 11.0403 21.6505 10.9899 21.6667C10.9395 21.6829 10.8863 21.6883 10.8337 21.6825C8.40498 21.3867 6.1758 20.1899 4.5874 18.3289C2.99901 16.4679 2.16716 14.0785 2.25652 11.6334C2.44402 6.57091 6.54464 2.45529 11.6109 2.25841C12.9225 2.20761 14.231 2.42187 15.4579 2.88838C16.6848 3.35489 17.8051 4.06407 18.7516 4.9735C19.6981 5.88293 20.4515 6.97393 20.9667 8.18123C21.4819 9.38854 21.7483 10.6873 21.75 12Z" fill="#2B9C8E"/>
											</svg>
										</div>
										<!-- Instagram -->
										<div class="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" fill="#2B9C8E"/>
											</svg>
										</div>
										<!-- Twitter/X -->
										<div class="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M20.1561 20.6109C20.0915 20.7286 19.9966 20.8267 19.8812 20.8951C19.7657 20.9636 19.6341 20.9998 19.4999 21H14.9999C14.8736 21 14.7495 20.9681 14.6389 20.9073C14.5282 20.8465 14.4348 20.7587 14.3671 20.6522L10.5711 14.6869L5.05488 20.7544C4.9204 20.8988 4.73442 20.9845 4.53723 20.9927C4.34005 21.0009 4.14757 20.9311 4.00151 20.7984C3.85546 20.6657 3.76761 20.4807 3.75701 20.2836C3.74641 20.0866 3.81391 19.8933 3.94488 19.7456L9.73581 13.3706L3.86706 4.15313C3.79478 4.03973 3.75432 3.90898 3.74991 3.77458C3.74551 3.64018 3.77732 3.50707 3.84201 3.38918C3.90671 3.27129 4.00191 3.17296 4.11765 3.10449C4.23338 3.03603 4.3654 2.99993 4.49988 3H8.99988C9.1261 3.00004 9.25028 3.03194 9.3609 3.09274C9.47152 3.15353 9.565 3.24127 9.63269 3.34781L13.4286 9.31312L18.9449 3.24562C19.0793 3.10117 19.2653 3.01555 19.4625 3.00731C19.6597 2.99907 19.8522 3.06888 19.9982 3.20161C20.1443 3.33435 20.2321 3.51929 20.2427 3.71636C20.2533 3.91343 20.1858 4.10674 20.0549 4.25438L14.2639 10.6247L20.1327 19.8478C20.2046 19.9613 20.2447 20.0919 20.2488 20.2262C20.2529 20.3604 20.2209 20.4933 20.1561 20.6109Z" fill="#2B9C8E"/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Related Posts -->
						<div class="border-t border-gray-200 pt-12">
							<h2 class="text-black text-2xl font-bold font-['Nunito_Sans'] mb-8">Related Articles</h2>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
								{#each otherBlogPosts as post}
									<a href="/blog/{post.slug}" class="group cursor-pointer">
										<img class="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity" src={post.featuredImage} alt={post.title} />
										<div class="space-y-2">
											<h3 class="text-black text-lg font-bold font-['Nunito_Sans'] leading-tight group-hover:text-teal-600 transition-colors">{post.title}</h3>
											<p class="text-gray-600 text-sm font-normal font-['Nunito_Sans'] leading-relaxed">{post.content}</p>
											<div class="flex items-center gap-2 text-xs text-gray-500">
												<span>{post.date}</span>
												<span>•</span>
												<span>{post.readTime}</span>
											</div>
										</div>
									</a>
								{/each}
							</div>
						</div>
					</article>
				</div>

				<!-- Category Sidebar -->
				<div class="hidden lg:block">
					<CategorySidebar />
				</div>

			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="w-full mt-8">
		<Footer />
	</div>
</div>

<style>
	.prose h3 {
		@apply text-xl font-bold text-black mt-8 mb-4;
	}
	
	.prose p {
		@apply mb-6;
	}
	
	.prose ul {
		@apply list-disc list-inside mb-6 space-y-2;
	}
	
	.prose li {
		@apply text-base text-black;
	}
</style> 
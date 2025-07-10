<script lang="ts">
	import { Header, Footer, CategorySidebar, BlogCard } from '$lib';
	
	// Mobile sidebar state
	let isMobileSidebarOpen = false;
	
	// Toggle mobile sidebar
	function toggleMobileSidebar() {
		isMobileSidebarOpen = !isMobileSidebarOpen;
	}
	
	// Close sidebar when clicking outside
	function closeSidebar() {
		isMobileSidebarOpen = false;
	}

	// Mock blog posts data
	const blogPosts = [
		{
			id: 1,
			slug: "understanding-german-new-medicine",
			title: "Understanding German New Medicine: A New Perspective on Healing",
			content: "In recent years, there's been a growing movement toward understanding the emotional roots of physical illness. One framework that's gaining momentum among holistic health practitioners and wellness seekers is German New Medicine (GNM) — a revolutionary approach that sees symptoms not as malfunctions, but as meaningful biological responses.",
			date: "June 23, 2025",
			image: "/vlog1.png"
		},
		{
			id: 2,
			slug: "mind-body-connection", 
			title: "The Mind-Body Connection: How Emotions Shape Physical Health",
			content: "The relationship between our emotional state and physical wellbeing is far more profound than most people realize. Every emotion we experience creates a cascade of biochemical changes throughout our body, influencing everything from our immune system to our digestive health.",
			date: "June 20, 2025",
			image: "/vlog2.jpg"
		},
		{
			id: 3,
			slug: "starting-healing-journey",
			title: "Starting Your Healing Journey: Listening to Your Body's Messages", 
			content: "Your body is constantly communicating with you, sending signals and messages through symptoms, sensations, and patterns. Learning to listen to these messages is the first step in any genuine healing journey.",
			date: "June 18, 2025",
			image: "/vlog3.jpg"
		},
		{
			id: 4,
			slug: "meditation-healing",
			title: "The Role of Meditation in Emotional and Physical Healing",
			content: "Meditation has been practiced for thousands of years as a tool for inner peace and spiritual growth. In recent decades, scientific research has begun to validate what practitioners have long known about its profound healing benefits.",
			date: "June 15, 2025", 
			image: "/vlog4.jpg"
		}
	];
</script>

<!-- RootCause Blog Page -->
<div class="w-full h-auto relative bg-pure-white overflow-hidden">
	<!-- Header -->
	<div class="relative z-30 w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px] lg:pl-[88px] lg:pr-[87px]">
		<Header />
	</div>

	<!-- Mobile Sidebar Toggle Button - positioned with Blogs title -->
	<div class="lg:hidden w-full max-w-7xl mx-auto px-4 pt-8 relative z-30">
		<div class="flex items-center justify-between mb-8">
			<button 
				on:click={toggleMobileSidebar}
				class="w-8 h-8 flex items-center justify-center transition-all duration-300 relative z-60"
				aria-label="Toggle categories menu"
			>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<path d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM5 19H7C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18C8 17.7348 7.89464 17.4804 7.70711 17.2929C7.51957 17.1054 7.26522 17 7 17H5V15H7C7.26522 15 7.51957 14.8946 7.70711 14.7071C7.89464 14.5196 8 14.2652 8 14C8 13.7348 7.89464 13.4804 7.70711 13.2929C7.51957 13.1054 7.26522 13 7 13H5V11H7C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10C8 9.73478 7.89464 9.48043 7.70711 9.29289C7.51957 9.10536 7.26522 9 7 9H5V7H10V25H5V19ZM27 25H12V7H27V25Z" fill="#2B9C8E"/>
			  </svg>
			</button>
			
			<span class="text-black text-h2 font-nunito">Blogs</span>
			
			<!-- Empty div for spacing -->
			<div class="w-10"></div>
		</div>
	</div>

	<!-- Mobile Sidebar Overlay -->
	{#if isMobileSidebarOpen}
		<div 
			class="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-[4px] z-40 transition-all duration-300"
			on:click={closeSidebar}
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Escape' && closeSidebar()}
		></div>
	{/if}

	<!-- Mobile Sidebar -->
	<div class="lg:hidden fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out {isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}">
		<div class="flex flex-col h-full pt-8 ">
			
			
			<!-- Sidebar Content -->
			<div class="flex-1 pl-5 pb-6 overflow-y-auto ">
				<CategorySidebar />
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="w-full flex justify-center items-start lg:pt-8">
		<div class="w-full max-w-7xl mx-auto px-4">
			<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
				
				<!-- Blog Posts Section -->
				<div class="flex-1">
					<div class="frame-1171276568">
						<!-- Desktop Blogs Title -->
						<div class="hidden lg:block blogs"><span class="text-black text-h1-md font-nunito">Blogs</span></div>
						<div class="frame-1171276567">
							{#each blogPosts as post}
								<BlogCard 
									title={post.title}
									date={post.date}
									content={post.content}
									image={post.image}
									slug={post.slug}
								/>
							{/each}
						</div>
					</div>
				</div>

				<!-- Desktop Category Sidebar -->
				<div class="hidden lg:block lg:mt-[112px] flex-shrink-0">
					<CategorySidebar />
				</div>

			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="w-full mt-[119px] lg:mt-[140px]">
		<Footer />
	</div>
</div>

<style>
.blogs_span {
    color: black;
    font-size: 36px;
    font-family: Nunito Sans;
    font-weight: 700;
    line-height: 44px;
    word-wrap: break-word;
}

.blogs {
    text-align: center;
}

.frame-1171276567 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.frame-1171276568 {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 64px;
    display: inline-flex;
}
</style> 
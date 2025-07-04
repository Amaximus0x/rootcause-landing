<script lang="ts">
	import { Header, Footer, CategorySidebar, BlogCard } from '$lib';
	
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
	<div class="relative z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px] lg:pl-[88px] lg:pr-[87px]">
		<Header />
	  </div>

	<!-- Main Content -->
	<div class="w-full flex justify-center items-start py-8">
		<div class="w-full max-w-7xl mx-auto px-4">
			<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
				
				<!-- Blog Posts Section -->
				<div class="flex-1">
					<div class="frame-1171276568">
						<div class="blogs"><span class="blogs_span">Blogs</span></div>
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

				<!-- Category Sidebar -->
				<div class="hidden lg:block lg:mt-[112px] flex-shrink-0">
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
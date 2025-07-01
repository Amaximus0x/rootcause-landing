<script lang="ts">
	import { Header, Footer, CategorySidebar } from '$lib';
	
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
	<div class="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px]">
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
								<a href="/blog/{post.slug}" class="frame-1171276564">
									<img class="frame-1171276562" src={post.image} alt={post.title} />
									<div class="frame-1171276563">
										<div class="frame-1171276566">
											<div class="frame-1171276581">
												<div class="understanding-german-new-medicine-a-new-perspective-on-healing">
													<span class="understandinggermannewmedicineanewperspectiveonhealing_span">{post.title}</span>
												</div>
												<div><span class="june232025_span">{post.date}</span></div>
											</div>
											<div class="in-recent-years-theres-been-a-growing-movement-toward-understanding-the-emotional-roots-of-physical-illness-one-framework-thats-gaining-momentum-among-holistic-health-practitioners-and-wellness-seekers-is-german-new-medicine-gnm-a-revolutionary-approach-that-sees-symptoms-not-as-malfunctions-but-as-meaningful-biological-responses-read-more">
												<span class="inrecentyearstheresbeenagrowingmovementtowardunderstandingtheemotionalrootsofphysicalillnessoneframeworkthatsgainingmomentumamongholistichealthpractitionersandwellnessseekersisgermannewmedicinegnmarevolutionaryapproachthatseessymptomsnotasmalfunctionsbutasmeaningfulbiologicalresponsesreadmore_span_01">{post.content} </span>
												<span class="inrecentyearstheresbeenagrowingmovementtowardunderstandingtheemotionalrootsofphysicalillnessoneframeworkthatsgainingmomentumamongholistichealthpractitionersandwellnessseekersisgermannewmedicinegnmarevolutionaryapproachthatseessymptomsnotasmalfunctionsbutasmeaningfulbiologicalresponsesreadmore_span_02">Read more...</span>
											</div>
										</div>
										<div class="frame-1171276565">
											<div><span class="share_span">Share</span></div>
											<div class="frame-1171276532">
												<div class="linkedinlogo"><div class="vector"></div></div>
												<div class="facebooklogo"><div class="vector_01"></div></div>
												<div class="instagramlogo"><div class="vector_02"></div></div>
												<div class="xlogo"><div class="vector_03"></div></div>
											</div>
										</div>
									</div>
								</a>
							{/each}
						</div>
					</div>
				</div>

				<!-- Category Sidebar -->
				<div class="hidden lg:block w-80 flex-shrink-0">
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

.frame-1171276562 {
    width: 500px;
    height: 328px;
    position: relative;
    background: #BBBBBB;
    border-radius: 8px;
    object-fit: cover;
}

.understandinggermannewmedicineanewperspectiveonhealing_span {
    color: black;
    font-size: 24px;
    font-family: Nunito Sans;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
}

.understanding-german-new-medicine-a-new-perspective-on-healing {
    flex: 1 1 0;
}

.june232025_span {
    color: #7C7C7C;
    font-size: 16px;
    font-family: Nunito Sans;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
}

.inrecentyearstheresbeenagrowingmovementtowardunderstandingtheemotionalrootsofphysicalillnessoneframeworkthatsgainingmomentumamongholistichealthpractitionersandwellnessseekersisgermannewmedicinegnmarevolutionaryapproachthatseessymptomsnotasmalfunctionsbutasmeaningfulbiologicalresponsesreadmore_span_01 {
    color: black;
    font-size: 16px;
    font-family: Nunito Sans;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
}

.inrecentyearstheresbeenagrowingmovementtowardunderstandingtheemotionalrootsofphysicalillnessoneframeworkthatsgainingmomentumamongholistichealthpractitionersandwellnessseekersisgermannewmedicinegnmarevolutionaryapproachthatseessymptomsnotasmalfunctionsbutasmeaningfulbiologicalresponsesreadmore_span_02 {
    color: #2B9C8E;
    font-size: 16px;
    font-family: Nunito Sans;
    font-weight: 600;
    line-height: 24px;
    word-wrap: break-word;
}

.share_span {
    color: black;
    font-size: 16px;
    font-family: Nunito Sans;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
}

.vector {
    width: 19.50px;
    height: 19.50px;
    left: 2.25px;
    top: 2.25px;
    position: absolute;
    background: #2B9C8E;
}

.vector_01 {
    width: 19.50px;
    height: 19.43px;
    left: 2.25px;
    top: 2.25px;
    position: absolute;
    background: #2B9C8E;
}

.vector_02 {
    width: 19.50px;
    height: 19.50px;
    left: 2.25px;
    top: 2.25px;
    position: absolute;
    background: #2B9C8E;
}

.vector_03 {
    width: 16.50px;
    height: 18px;
    left: 3.75px;
    top: 3px;
    position: absolute;
    background: #2B9C8E;
}

.frame-1171276581 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
}

.linkedinlogo, .facebooklogo, .instagramlogo, .xlogo {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
}

.frame-1171276566 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
}

.frame-1171276532 {
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    display: flex;
}

.frame-1171276565 {
    align-self: stretch;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
}

.frame-1171276563 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
    display: inline-flex;
}

.frame-1171276564 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: inline-flex;
    cursor: pointer;
    transition: opacity 0.2s;
    margin-bottom: 88px;
}

.frame-1171276564:hover {
    opacity: 0.9;
}

.frame-1171276564:last-child {
    margin-bottom: 0;
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
<script lang="ts">
	import { Header, Footer } from '$lib';
	
	// FAQ state management
	let expandedFaq: number | null = 1; // Start with first FAQ expanded as shown in screenshot
</script>

<!-- RootCause Affiliate Page -->
<div class="w-full h-auto relative bg-pure-white overflow-hidden">
	<!-- Decorative Grid Background - Covers entire top section including navigation -->
	<div class="w-full absolute top-0 left-0 right-0 pointer-events-none" style="height: 100vh; z-index: 1;">
		<div class="line-22"></div>
		<div class="line-23"></div>
		<div class="line-24"></div>
		<div class="line-25"></div>
		<div class="line-26"></div>
		<div class="line-27"></div>
		<div class="line-28"></div>
		<div class="line-29"></div>
		<div class="line-30"></div>
		<div class="line-31"></div>
		<div class="line-32"></div>
		<div class="line-33"></div>
		<div class="line-34"></div>
		<div class="line-35"></div>
		<div class="line-36"></div>
		<div class="line-37"></div>
		<div class="line-38"></div>
		<div class="line-39"></div>
		<div class="line-40"></div>
		<div class="line-51"></div>
		<div class="line-52"></div>
		<div class="line-53"></div>
		<div class="line-54"></div>
		<div class="line-55"></div>
		<div class="line-56"></div>
		<div class="line-57"></div>
		<div class="line-58"></div>
		<div class="line-59"></div>
		<div class="line-60"></div>
	</div>

	<!-- Header -->
	<div class="relative z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px] lg:pl-[88px] lg:pr-[87px]">
		<Header />
	  </div>

	<!-- Hero Section -->
	<div class="w-full h-auto relative bg-gradient-to-br from-teal-light to-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
		<div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative">
			<!-- Left Content -->
			<div class="flex-1 max-w-2xl">
				<!-- Mobile Layout -->
				<div class="lg:hidden inline-flex flex-col justify-start items-start gap-8">
					<div class="self-stretch flex flex-col justify-start items-start gap-4">
						<div class="self-stretch justify-start">
							<span class="text-black text-5xl font-bold font-['Nunito_Sans'] leading-[56px]">Share </span>
							<span class="text-teal-600 text-5xl font-bold font-['Nunito_Sans'] leading-[56px]">Healing</span>
							<span class="text-black text-5xl font-bold font-['Nunito_Sans'] leading-[56px]"> </span>
							<span class="text-teal-600 text-5xl font-bold font-['Nunito_Sans'] leading-[56px]">Earn</span>
							<span class="text-black text-5xl font-bold font-['Nunito_Sans'] leading-[56px]"> Generously</span>
						</div>
						<div class="self-stretch justify-start text-black text-sm font-normal font-['Nunito_Sans'] leading-snug">
							RootCause helps people uncover the emotional roots behind their recurring body signals
							using a GNM-inspired approach. If you believe in our mission and want to share it with
							others, our affiliate program rewards you for doing just that.
						</div>
					</div>
					<div class="self-stretch flex flex-col justify-center items-start gap-5">
						<a href="/affiliate/apply"
							class="self-stretch p-4 bg-gradient-to-r from-teal-600 to-teal-950 rounded-full inline-flex justify-center items-center gap-2.5 hover:from-teal-700 hover:to-teal-900 transition-all duration-200"
						>
							<div class="text-center justify-start text-white text-base font-medium font-['Montserrat'] leading-7">
								Apply Now
							</div>
						</a>
					</div>
				</div>

				<!-- Desktop Layout -->
				<div class="hidden lg:flex w-[625px] flex-col justify-start items-start gap-16">
					<div class="self-stretch flex flex-col justify-start items-start gap-8">
						<div class="w-[625px] justify-start">
							<span class="text-black text-7xl font-bold font-['Nunito_Sans'] leading-[88px]">Share </span>
							<span class="text-teal-600 text-7xl font-bold font-['Nunito_Sans'] leading-[88px]">Healing<br />Earn</span>
							<span class="text-black text-7xl font-bold font-['Nunito_Sans'] leading-[88px]"> Generously</span>
						</div>
						<div class="self-stretch justify-start text-black text-xl font-normal font-['Nunito_Sans'] leading-7">
							RootCause helps people uncover the emotional roots behind their recurring body signals
							using a GNM-inspired approach. If you believe in our mission and want to share it with
							others, our affiliate program rewards you for doing just that.
						</div>
					</div>
					<a href="/affiliate/apply"
						class="w-72 h-16 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-950 rounded-full inline-flex justify-center items-center gap-2.5 hover:from-teal-700 hover:to-teal-900 transition-all duration-200"
					>
						<div class="text-center justify-start text-white text-xl font-medium font-['Montserrat'] leading-7">
							Apply Now
						</div>
					</a>
				</div>
			</div>

			<!-- Right Content - Image Space -->
			<div class="flex-1 flex justify-center items-center">
				<div class="w-full max-w-lg h-96 lg:h-[500px] flex justify-center items-center">
					<!-- Image placeholder - you can add the hands illustration here -->
					<img src="/share-healing.svg" alt="Hands" class="w-full h-full object-contain" />
				</div>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="w-full flex justify-center items-center py-16 lg:py-24">
		<div class="w-[1247px] inline-flex flex-col justify-center items-center gap-28">
			<!-- How It Works Section -->
			<div class="self-stretch flex flex-col justify-start items-center gap-8">
				<div class="w-[1036px] flex flex-col justify-start items-center gap-4">
					<div class="self-stretch text-center justify-start text-black text-4xl font-bold font-['Nunito_Sans'] leading-10">How It Works</div>
				</div>
				<div class="self-stretch h-80 flex flex-col justify-center items-start gap-4">
					<div class="self-stretch flex-1 p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
						<div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
							<div class="w-6 h-6 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M22.5 9.02158C22.4624 10.3272 21.9256 11.5687 21 12.4903L17.7422 15.75C17.2678 16.2271 16.7034 16.6053 16.0817 16.8628C15.4601 17.1203 14.7935 17.2519 14.1207 17.25H14.116C13.4316 17.2495 12.7543 17.1119 12.1241 16.8453C11.4938 16.5786 10.9234 16.1884 10.4465 15.6976C9.96958 15.2068 9.59587 14.6254 9.34744 13.9877C9.099 13.3501 8.98088 12.6691 9.00005 11.985C9.00564 11.7861 9.09002 11.5976 9.23463 11.4609C9.37924 11.3242 9.57223 11.2505 9.77114 11.2561C9.97005 11.2617 10.1586 11.3461 10.2953 11.4907C10.432 11.6353 10.5056 11.8283 10.5 12.0272C10.4864 12.5109 10.5698 12.9924 10.7454 13.4433C10.921 13.8942 11.1852 14.3053 11.5224 14.6523C11.8596 14.9994 12.2629 15.2753 12.7085 15.4639C13.1541 15.6524 13.633 15.7497 14.1169 15.75C14.5926 15.7512 15.0638 15.6582 15.5032 15.4762C15.9427 15.2942 16.3417 15.0269 16.6772 14.6897L19.935 11.4319C20.6072 10.7513 20.9828 9.83238 20.9798 8.87581C20.9768 7.91924 20.5955 7.00271 19.9191 6.32631C19.2427 5.64991 18.3261 5.26859 17.3696 5.2656C16.413 5.2626 15.4941 5.63818 14.8135 6.31033L13.7822 7.34158C13.6404 7.4763 13.4516 7.55029 13.2561 7.54779C13.0605 7.54528 12.8736 7.46648 12.7353 7.32818C12.597 7.18988 12.5182 7.00302 12.5157 6.80745C12.5132 6.61188 12.5872 6.42307 12.7219 6.28127L13.7532 5.25002C14.2289 4.77408 14.7938 4.39653 15.4155 4.13895C16.0373 3.88136 16.7036 3.74878 17.3766 3.74878C18.0496 3.74878 18.716 3.88136 19.3377 4.13895C19.9594 4.39653 20.5243 4.77408 21 5.25002C21.4928 5.74404 21.88 6.33318 22.1378 6.98157C22.3957 7.62996 22.5189 8.32405 22.5 9.02158ZM10.2188 18.1556L9.18755 19.1869C8.85119 19.5255 8.45089 19.7938 8.0099 19.9763C7.56892 20.1589 7.09605 20.2519 6.6188 20.25C5.90283 20.2494 5.2031 20.0367 4.60801 19.6386C4.01293 19.2405 3.54919 18.6749 3.2754 18.0134C3.00161 17.3518 2.93006 16.624 3.06977 15.9218C3.20948 15.2195 3.5542 14.5745 4.06036 14.0681L7.31255 10.8103C7.82478 10.2954 8.48002 9.94637 9.19316 9.8086C9.9063 9.67083 10.6444 9.75068 11.3116 10.0378C11.9788 10.3249 12.5442 10.8059 12.9345 11.4185C13.3247 12.0311 13.5218 12.7468 13.5 13.4728C13.4945 13.6717 13.5681 13.8647 13.7048 14.0093C13.8415 14.1539 14.03 14.2383 14.229 14.2439C14.4279 14.2495 14.6209 14.1759 14.7655 14.0392C14.9101 13.9025 14.9945 13.7139 15 13.515C15.0181 12.8186 14.8944 12.1257 14.6365 11.4785C14.3787 10.8313 13.992 10.2433 13.5 9.75002C12.5393 8.78967 11.2364 8.25019 9.87801 8.25019C8.51958 8.25019 7.21675 8.78967 6.25598 9.75002L3.00005 13.0078C2.28401 13.7236 1.79622 14.6355 1.59831 15.6284C1.4004 16.6213 1.50125 17.6506 1.88813 18.5861C2.275 19.5217 2.93053 20.3216 3.77188 20.8848C4.61323 21.4479 5.60263 21.749 6.61505 21.75C7.28805 21.752 7.95475 21.6204 8.57656 21.3629C9.19837 21.1054 9.76292 20.7272 10.2375 20.25L11.2688 19.2188C11.3902 19.0758 11.4536 18.8926 11.4465 18.7051C11.4395 18.5177 11.3624 18.3398 11.2307 18.2063C11.0989 18.0729 10.9219 17.9937 10.7346 17.9843C10.5473 17.9749 10.3633 18.0361 10.2188 18.1556Z" fill="#2B9C8E"/>
                                  </svg>
							</div>
						</div>
						<div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Get your unique affiliate code.</div>
					</div>
					<div class="self-stretch flex-1 p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
						<div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
							<div class="w-6 h-6 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M23.25 11.5C23.2488 10.3069 22.7743 9.16299 21.9306 8.31935C21.087 7.4757 19.9431 7.0012 18.75 6.99996H15.0187C14.7459 6.98402 9.99188 6.64933 5.46469 2.85246C5.24607 2.66885 4.97959 2.55145 4.69656 2.51403C4.41353 2.47662 4.12571 2.52076 3.86689 2.64126C3.60807 2.76176 3.38902 2.95361 3.23546 3.19429C3.0819 3.43497 3.00022 3.71447 3 3.99996V19C3.00004 19.2855 3.0816 19.5652 3.23508 19.806C3.38857 20.0468 3.60761 20.2388 3.86646 20.3594C4.12532 20.48 4.41322 20.5242 4.69633 20.4869C4.97945 20.4495 5.24601 20.3321 5.46469 20.1484C9.00563 17.1784 12.6834 16.3271 14.25 16.089V19.0628C14.2497 19.3099 14.3105 19.5534 14.4269 19.7714C14.5434 19.9894 14.7119 20.1753 14.9175 20.3125L15.9487 20.9996C16.1481 21.1327 16.3764 21.216 16.6145 21.2427C16.8527 21.2694 17.0938 21.2386 17.3176 21.1529C17.5414 21.0673 17.7414 20.9293 17.901 20.7504C18.0605 20.5715 18.1748 20.3571 18.2344 20.125L19.3378 15.9662C20.4204 15.8222 21.4138 15.2899 22.1334 14.4684C22.853 13.6469 23.2498 12.5921 23.25 11.5ZM4.5 18.9934V3.99996C8.51344 7.36652 12.6216 8.21871 14.25 8.42871V14.5675C12.6234 14.7812 8.51625 15.6315 4.5 18.9934ZM16.7812 19.7434V19.7537L15.75 19.0665V16H17.775L16.7812 19.7434ZM18.75 14.5H15.75V8.49996H18.75C19.5456 8.49996 20.3087 8.81603 20.8713 9.37864C21.4339 9.94125 21.75 10.7043 21.75 11.5C21.75 12.2956 21.4339 13.0587 20.8713 13.6213C20.3087 14.1839 19.5456 14.5 18.75 14.5Z" fill="#2B9C8E"/>
                                  </svg>
							</div>
						</div>
						<div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Share it with your audience or clients.</div>
					</div>
					<div class="self-stretch flex-1 p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
						<div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
							<div class="w-6 h-6 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M22.8975 6.37499C22.7895 6.30761 22.6662 6.26881 22.5391 6.26225C22.412 6.25569 22.2853 6.28158 22.1709 6.33749C18.1462 8.30624 15.2719 7.38374 12.2334 6.41062C9.04594 5.38968 5.74125 4.33499 1.17563 6.56437C1.04806 6.62556 0.940404 6.72159 0.865091 6.84136C0.789777 6.96113 0.749878 7.09976 0.75 7.24124V18.4847C0.749982 18.6119 0.782343 18.7371 0.844035 18.8484C0.905728 18.9597 0.994725 19.0535 1.10265 19.1209C1.21058 19.1883 1.33388 19.2271 1.46096 19.2338C1.58804 19.2404 1.71471 19.2146 1.82906 19.1587C5.85375 17.19 8.72812 18.1125 11.7712 19.0856C13.575 19.6622 15.4125 20.25 17.49 20.25C19.0922 20.25 20.8397 19.9012 22.8253 18.9319C22.9514 18.8703 23.0577 18.7746 23.1322 18.6556C23.2066 18.5366 23.2461 18.3991 23.2463 18.2587V7.01531C23.2474 6.88772 23.2159 6.76196 23.1549 6.64992C23.0939 6.53787 23.0053 6.44325 22.8975 6.37499ZM21.75 17.7816C17.9438 19.485 15.1641 18.5962 12.2288 17.6578C10.425 17.0812 8.5875 16.4934 6.51 16.4934C5.05041 16.5005 3.60567 16.7869 2.25375 17.3372V7.71843C6.06 6.01499 8.83969 6.90374 11.775 7.84218C14.7103 8.78062 17.7319 9.74999 21.75 8.16468V17.7816ZM12 9.74999C11.4067 9.74999 10.8266 9.92594 10.3333 10.2556C9.83994 10.5852 9.45542 11.0538 9.22836 11.6019C9.0013 12.1501 8.94189 12.7533 9.05764 13.3353C9.1734 13.9172 9.45912 14.4518 9.87868 14.8713C10.2982 15.2909 10.8328 15.5766 11.4147 15.6924C11.9967 15.8081 12.5999 15.7487 13.1481 15.5216C13.6962 15.2946 14.1648 14.9101 14.4944 14.4167C14.8241 13.9234 15 13.3433 15 12.75C15 11.9543 14.6839 11.1913 14.1213 10.6287C13.5587 10.0661 12.7956 9.74999 12 9.74999ZM12 14.25C11.7033 14.25 11.4133 14.162 11.1666 13.9972C10.92 13.8324 10.7277 13.5981 10.6142 13.324C10.5006 13.0499 10.4709 12.7483 10.5288 12.4574C10.5867 12.1664 10.7296 11.8991 10.9393 11.6893C11.1491 11.4796 11.4164 11.3367 11.7074 11.2788C11.9983 11.2209 12.2999 11.2506 12.574 11.3642C12.8481 11.4777 13.0824 11.67 13.2472 11.9166C13.412 12.1633 13.5 12.4533 13.5 12.75C13.5 13.1478 13.342 13.5293 13.0607 13.8107C12.7794 14.092 12.3978 14.25 12 14.25ZM5.25 9.74999V14.25C5.25 14.4489 5.17098 14.6397 5.03033 14.7803C4.88968 14.921 4.69891 15 4.5 15C4.30109 15 4.11032 14.921 3.96967 14.7803C3.82902 14.6397 3.75 14.4489 3.75 14.25V9.74999C3.75 9.55108 3.82902 9.36032 3.96967 9.21966C4.11032 9.07901 4.30109 8.99999 4.5 8.99999C4.69891 8.99999 4.88968 9.07901 5.03033 9.21966C5.17098 9.36032 5.25 9.55108 5.25 9.74999ZM18.75 15.75V11.25C18.75 11.0511 18.829 10.8603 18.9697 10.7197C19.1103 10.579 19.3011 10.5 19.5 10.5C19.6989 10.5 19.8897 10.579 20.0303 10.7197C20.171 10.8603 20.25 11.0511 20.25 11.25V15.75C20.25 15.9489 20.171 16.1397 20.0303 16.2803C19.8897 16.421 19.6989 16.5 19.5 16.5C19.3011 16.5 19.1103 16.421 18.9697 16.2803C18.829 16.1397 18.75 15.9489 18.75 15.75Z" fill="#2B9C8E"/>
                                  </svg>
							</div>
						</div>
						<div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">You earn 30% commission on every subscription made using your code.</div>
					</div>
					<div class="self-stretch flex-1 p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
						<div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
							<div class="w-6 h-6 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M20.25 6.99997H16.9613C16.9978 6.96903 17.0353 6.93903 17.0709 6.90622C17.3557 6.65326 17.5851 6.34427 17.745 5.99858C17.9049 5.65289 17.9917 5.27793 18 4.89715C18.0123 4.4806 17.9394 4.06592 17.7856 3.67858C17.6319 3.29124 17.4006 2.93941 17.106 2.64468C16.8113 2.34996 16.4596 2.11857 16.0723 1.96471C15.685 1.81085 15.2703 1.73778 14.8538 1.74997C14.4728 1.75817 14.0977 1.84492 13.7518 2.00479C13.406 2.16465 13.0968 2.39419 12.8438 2.67903C12.4936 3.08487 12.2089 3.54288 12 4.03653C11.7911 3.54288 11.5064 3.08487 11.1562 2.67903C10.9032 2.39419 10.594 2.16465 10.2482 2.00479C9.90232 1.84492 9.52718 1.75817 9.14625 1.74997C8.72969 1.73778 8.31503 1.81085 7.92774 1.96471C7.54044 2.11857 7.18868 2.34996 6.89405 2.64468C6.59941 2.93941 6.36812 3.29124 6.21438 3.67858C6.06064 4.06592 5.98768 4.4806 6 4.89715C6.00833 5.27793 6.09514 5.65289 6.255 5.99858C6.41486 6.34427 6.64434 6.65326 6.92906 6.90622C6.96469 6.93715 7.00219 6.96715 7.03875 6.99997H3.75C3.35218 6.99997 2.97064 7.158 2.68934 7.43931C2.40804 7.72061 2.25 8.10214 2.25 8.49997V11.5C2.25 11.8978 2.40804 12.2793 2.68934 12.5606C2.97064 12.8419 3.35218 13 3.75 13V19C3.75 19.3978 3.90804 19.7793 4.18934 20.0606C4.47064 20.3419 4.85218 20.5 5.25 20.5H18.75C19.1478 20.5 19.5294 20.3419 19.8107 20.0606C20.092 19.7793 20.25 19.3978 20.25 19V13C20.6478 13 21.0294 12.8419 21.3107 12.5606C21.592 12.2793 21.75 11.8978 21.75 11.5V8.49997C21.75 8.10214 21.592 7.72061 21.3107 7.43931C21.0294 7.158 20.6478 6.99997 20.25 6.99997ZM13.9688 3.67278C14.0875 3.54164 14.2321 3.43647 14.3934 3.36387C14.5547 3.29127 14.7293 3.25281 14.9062 3.2509H14.9522C15.1595 3.2522 15.3645 3.29487 15.5552 3.37641C15.7458 3.45795 15.9183 3.57672 16.0624 3.72576C16.2066 3.8748 16.3195 4.05112 16.3947 4.24438C16.4698 4.43763 16.5056 4.64394 16.5 4.85122C16.4981 5.02812 16.4596 5.20272 16.387 5.36405C16.3144 5.52538 16.2093 5.66997 16.0781 5.78872C15.1884 6.57622 13.7119 6.85372 12.7969 6.95122C12.9094 5.9584 13.2188 4.51559 13.9688 3.67278ZM7.96031 3.70653C8.25088 3.41599 8.64441 3.25191 9.05531 3.24997H9.10125C9.27815 3.25187 9.45275 3.29034 9.61409 3.36293C9.77542 3.43553 9.92 3.5407 10.0388 3.67184C10.8253 4.56059 11.1028 6.03434 11.2003 6.94559C10.2891 6.85184 8.81531 6.57059 7.92656 5.78403C7.79543 5.66528 7.69026 5.5207 7.61766 5.35936C7.54506 5.19803 7.5066 5.02343 7.50469 4.84653C7.49887 4.63581 7.53593 4.42611 7.61361 4.23014C7.69128 4.03418 7.80796 3.85604 7.95656 3.70653H7.96031ZM3.75 8.49997H11.25V11.5H3.75V8.49997ZM5.25 13H11.25V19H5.25V13ZM18.75 19H12.75V13H18.75V19ZM20.25 11.5H12.75V8.49997H20.25V11.5Z" fill="#2B9C8E"/>
                                  </svg>
							</div>
						</div>
						<div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Your referrals get rewarded too — they receive 1 month free on their first subscription.</div>
					</div>
				</div>
			</div>

			<!-- Why Become an Affiliate Section -->
			<div class="self-stretch flex flex-col justify-start items-center gap-4">
				<div class="self-stretch text-center justify-start text-black text-4xl font-bold font-['Nunito_Sans'] leading-10">Why Become an Affiliate?</div>
				<div class="self-stretch h-96 flex flex-col justify-center items-start gap-4">
					<div class="self-stretch flex-1 inline-flex justify-start items-center gap-4">
						<div class="flex-1 self-stretch p-4 bg-teal-600/5 rounded-2xl inline-flex flex-col justify-between items-start overflow-hidden">
							<div class="w-8 h-8 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16.0112 7.17252C16.0673 6.39647 16.3236 5.64821 16.7551 5.00077C17.1866 4.35334 17.7787 3.82886 18.4734 3.47853C19.1682 3.1282 19.9419 2.96399 20.719 3.00194C21.4962 3.03988 22.2502 3.27868 22.9075 3.69502C22.9827 3.74419 23.0432 3.8127 23.0827 3.89334C23.1222 3.97398 23.1393 4.06377 23.1322 4.1533C23.125 4.24282 23.0938 4.32876 23.042 4.40209C22.9902 4.47541 22.9195 4.53343 22.8375 4.57002C21.6949 5.08411 20.7249 5.91714 20.0442 6.96906C19.3634 8.02098 19.0009 9.24706 19 10.5C19 10.6463 19 10.7925 19.015 10.9363C19.0219 11.0271 19.0038 11.1181 18.9627 11.1995C18.9217 11.2808 18.8591 11.3494 18.7819 11.3978C18.7047 11.4462 18.6158 11.4725 18.5247 11.474C18.4335 11.4755 18.3438 11.4521 18.265 11.4063C17.5283 10.9849 16.9258 10.3638 16.5271 9.61468C16.1283 8.86556 15.9495 8.01893 16.0112 7.17252ZM30 20.0763C30.0018 20.6477 29.8435 21.2082 29.543 21.6942C29.2426 22.1803 28.8119 22.5724 28.3 22.8263L28.245 22.8513L23.3913 24.9188C23.3433 24.9399 23.2935 24.9566 23.2425 24.9688L15.2425 26.9688C15.1633 26.9892 15.0818 26.9997 15 27H2C1.46957 27 0.960859 26.7893 0.585786 26.4142C0.210714 26.0392 0 25.5305 0 25V20C0 19.4696 0.210714 18.9609 0.585786 18.5858C0.960859 18.2107 1.46957 18 2 18H5.58625L8.41375 15.1713C8.78451 14.7989 9.22539 14.5036 9.71092 14.3026C10.1964 14.1015 10.717 13.9987 11.2425 14H17.5C18.0282 14 18.5496 14.1195 19.0251 14.3496C19.5005 14.5797 19.9177 14.9144 20.2454 15.3287C20.5731 15.743 20.8028 16.226 20.9172 16.7417C21.0317 17.2574 21.0279 17.7923 20.9062 18.3063L26.1362 17.1038C26.5915 16.9832 27.0685 16.9688 27.5302 17.0616C27.992 17.1545 28.4262 17.3521 28.7995 17.6393C29.1728 17.9265 29.4752 18.2956 29.6833 18.7181C29.8915 19.1406 29.9998 19.6053 30 20.0763ZM28 20.0763C27.9998 19.9109 27.9616 19.7478 27.8882 19.5997C27.8148 19.4515 27.7083 19.3222 27.5769 19.2219C27.4455 19.1215 27.2927 19.0528 27.1305 19.0211C26.9682 18.9893 26.8008 18.9954 26.6413 19.0388L26.6025 19.0488L18.2275 20.975C18.154 20.9914 18.079 20.9998 18.0037 21H14C13.7348 21 13.4804 20.8947 13.2929 20.7071C13.1054 20.5196 13 20.2652 13 20C13 19.7348 13.1054 19.4805 13.2929 19.2929C13.4804 19.1054 13.7348 19 14 19H17.5C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5C19 17.1022 18.842 16.7207 18.5607 16.4394C18.2794 16.1581 17.8978 16 17.5 16H11.2425C10.9798 15.9992 10.7195 16.0506 10.4768 16.1512C10.2341 16.2519 10.0138 16.3997 9.82875 16.5863L7 19.4138V25H14.875L22.6787 23.0488L27.4287 21.0263C27.6016 20.9352 27.7463 20.7985 27.847 20.631C27.9477 20.4635 28.0006 20.2717 28 20.0763ZM21 10.5C21 11.39 21.2639 12.2601 21.7584 13.0001C22.2529 13.7401 22.9557 14.3169 23.7779 14.6575C24.6002 14.9981 25.505 15.0872 26.3779 14.9136C27.2508 14.7399 28.0526 14.3113 28.682 13.682C29.3113 13.0527 29.7399 12.2508 29.9135 11.3779C30.0872 10.505 29.9981 9.60022 29.6575 8.77795C29.3169 7.95568 28.7401 7.25288 28.0001 6.75841C27.26 6.26394 26.39 6.00002 25.5 6.00002C24.3065 6.00002 23.1619 6.47413 22.318 7.31804C21.4741 8.16196 21 9.30655 21 10.5Z" fill="#FFA500"/>
                                  </svg>
							</div>
							<div class="self-stretch justify-start text-black text-2xl font-semibold font-['Nunito_Sans'] leading-7">30% recurring commission for every paying subscriber you refer</div>
						</div>
						<div class="flex-1 self-stretch p-4 bg-teal-600/5 rounded-2xl inline-flex flex-col justify-between items-start overflow-hidden">
							<div class="w-8 h-8 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                    <path d="M29.3 27.3987C29.4118 27.5473 29.4799 27.724 29.4968 27.9092C29.5137 28.0944 29.4786 28.2806 29.3955 28.4469C29.3124 28.6132 29.1846 28.7531 29.0264 28.8508C28.8682 28.9485 28.6859 29.0001 28.5 28.9999H4.5C4.31429 28.9999 4.13225 28.9482 3.97427 28.8506C3.81629 28.753 3.68863 28.6133 3.60557 28.4472C3.52252 28.2811 3.48736 28.0951 3.50404 27.9101C3.52072 27.7252 3.58857 27.5485 3.7 27.3999C4.58548 26.2128 5.76628 25.278 7.125 24.6887C6.38022 24.0089 5.85837 23.1199 5.62794 22.1382C5.3975 21.1566 5.46926 20.1282 5.83379 19.188C6.19832 18.2479 6.83858 17.4399 7.67054 16.8702C8.5025 16.3005 9.48728 15.9956 10.4956 15.9956C11.504 15.9956 12.4887 16.3005 13.3207 16.8702C14.1527 17.4399 14.7929 18.2479 15.1575 19.188C15.522 20.1282 15.5937 21.1566 15.3633 22.1382C15.1329 23.1199 14.611 24.0089 13.8663 24.6887C14.8465 25.1124 15.7373 25.7186 16.4913 26.4749C17.2452 25.7186 18.136 25.1124 19.1162 24.6887C18.3715 24.0089 17.8496 23.1199 17.6192 22.1382C17.3888 21.1566 17.4605 20.1282 17.825 19.188C18.1896 18.2479 18.8298 17.4399 19.6618 16.8702C20.4938 16.3005 21.4785 15.9956 22.4869 15.9956C23.4952 15.9956 24.48 16.3005 25.312 16.8702C26.1439 17.4399 26.7842 18.2479 27.1487 19.188C27.5132 20.1282 27.585 21.1566 27.3546 22.1382C27.1241 23.1199 26.6023 24.0089 25.8575 24.6887C27.2225 25.2749 28.4097 26.2095 29.3 27.3987ZM3.9 15.7999C4.00506 15.8787 4.12461 15.9361 4.25182 15.9687C4.37903 16.0012 4.51142 16.0085 4.64142 15.9899C4.77142 15.9713 4.89649 15.9273 5.00949 15.8604C5.12249 15.7935 5.22121 15.705 5.3 15.5999C5.90546 14.7927 6.69055 14.1374 7.59311 13.6862C8.49567 13.2349 9.49091 12.9999 10.5 12.9999C11.5091 12.9999 12.5043 13.2349 13.4069 13.6862C14.3094 14.1374 15.0945 14.7927 15.7 15.5999C15.7931 15.7241 15.9139 15.8249 16.0528 15.8944C16.1916 15.9638 16.3448 15.9999 16.5 15.9999C16.6552 15.9999 16.8084 15.9638 16.9472 15.8944C17.0861 15.8249 17.2069 15.7241 17.3 15.5999C17.9055 14.7927 18.6906 14.1374 19.5931 13.6862C20.4957 13.2349 21.4909 12.9999 22.5 12.9999C23.5091 12.9999 24.5043 13.2349 25.4069 13.6862C26.3095 14.1374 27.0945 14.7927 27.7 15.5999C27.7789 15.705 27.8777 15.7935 27.9907 15.8604C28.1038 15.9272 28.229 15.9712 28.359 15.9897C28.4891 16.0082 28.6215 16.0009 28.7488 15.9683C28.876 15.9356 28.9956 15.8782 29.1006 15.7993C29.2057 15.7204 29.2942 15.6216 29.3611 15.5086C29.4279 15.3955 29.4719 15.2704 29.4904 15.1403C29.5089 15.0102 29.5016 14.8778 29.469 14.7506C29.4363 14.6233 29.3789 14.5038 29.3 14.3987C28.4145 13.2119 27.2337 12.2775 25.875 11.6887C26.6198 11.0089 27.1416 10.1199 27.3721 9.13824C27.6025 8.15658 27.5307 7.12819 27.1662 6.18804C26.8017 5.2479 26.1614 4.43994 25.3295 3.87021C24.4975 3.30048 23.5127 2.99561 22.5044 2.99561C21.496 2.99561 20.5113 3.30048 19.6793 3.87021C18.8473 4.43994 18.2071 5.2479 17.8425 6.18804C17.478 7.12819 17.4063 8.15658 17.6367 9.13824C17.8671 10.1199 18.389 11.0089 19.1338 11.6887C18.1535 12.1124 17.2627 12.7186 16.5088 13.4749C15.7548 12.7186 14.864 12.1124 13.8837 11.6887C14.6285 11.0089 15.1504 10.1199 15.3808 9.13824C15.6112 8.15658 15.5395 7.12819 15.175 6.18804C14.8104 5.2479 14.1702 4.43994 13.3382 3.87021C12.5062 3.30048 11.5215 2.99561 10.5131 2.99561C9.50479 2.99561 8.52 3.30048 7.68804 3.87021C6.85608 4.43994 6.21582 5.2479 5.85129 6.18804C5.48676 7.12819 5.415 8.15658 5.64544 9.13824C5.87587 10.1199 6.39772 11.0089 7.1425 11.6887C5.7774 12.2754 4.59032 13.2104 3.7 14.3999C3.62121 14.505 3.56388 14.6245 3.53129 14.7518C3.4987 14.879 3.49148 15.0114 3.51005 15.1414C3.52862 15.2714 3.57262 15.3964 3.63953 15.5094C3.70643 15.6224 3.79494 15.7212 3.9 15.7999Z" fill="#008000"/>
                                  </svg>
							</div>
							<div class="self-stretch flex flex-col justify-start items-start gap-2">
								<div class="self-stretch justify-start text-black text-2xl font-semibold font-['Nunito_Sans'] leading-loose">Your audience gets exclusive early-user perks</div>
							</div>
						</div>
					</div>
					<div class="self-stretch flex-1 inline-flex justify-start items-center gap-4">
						<div class="flex-1 self-stretch p-4 bg-teal-600/5 rounded-2xl inline-flex flex-col justify-between items-start overflow-hidden">
							<div class="w-8 h-8 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M29.7074 14.7076L19.7074 24.7076C19.5676 24.8476 19.3893 24.9429 19.1952 24.9816C19.0011 25.0202 18.8 25.0004 18.6171 24.9247C18.4343 24.8489 18.2781 24.7206 18.1682 24.556C18.0583 24.3914 17.9998 24.198 17.9999 24.0001V19.0288C10.8624 19.4338 5.96867 24.0626 4.59492 25.5288C4.37921 25.7592 4.09634 25.9156 3.78655 25.9759C3.47677 26.0362 3.15586 25.9973 2.86949 25.8646C2.58313 25.7319 2.34591 25.5123 2.19158 25.2371C2.03725 24.9618 1.97368 24.6448 2.00992 24.3313C2.47367 20.2988 4.68242 16.4201 8.22992 13.4101C11.1762 10.9101 14.7574 9.32381 17.9999 9.04631V4.00006C17.9998 3.80216 18.0583 3.60867 18.1682 3.44407C18.2781 3.27948 18.4343 3.15119 18.6171 3.07543C18.8 2.99968 19.0011 2.97988 19.1952 3.01853C19.3893 3.05718 19.5676 3.15254 19.7074 3.29256L29.7074 13.2926C29.8004 13.3854 29.8742 13.4957 29.9245 13.6171C29.9748 13.7385 30.0007 13.8686 30.0007 14.0001C30.0007 14.1315 29.9748 14.2616 29.9245 14.383C29.8742 14.5044 29.8004 14.6147 29.7074 14.7076Z" fill="#0000FF"/>
                                  </svg>
							</div>
							<div class="self-stretch justify-start text-black text-2xl font-semibold font-['Nunito_Sans'] leading-loose">No complicated links — just a simple code to share</div>
						</div>
						<div class="flex-1 self-stretch p-4 bg-teal-600/5 rounded-2xl inline-flex flex-col justify-between items-start overflow-hidden">
							<div class="w-8 h-8 relative overflow-hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                    <path d="M30.5 12.75C30.5 21.5 17.5262 28.5825 16.9737 28.875C16.8281 28.9533 16.6654 28.9943 16.5 28.9943C16.3346 28.9943 16.1719 28.9533 16.0262 28.875C15.6075 28.65 8.0825 24.5387 4.44125 18.7638C4.39428 18.6881 4.36836 18.6013 4.36618 18.5123C4.36399 18.4233 4.38561 18.3353 4.42881 18.2574C4.47201 18.1796 4.53522 18.1146 4.6119 18.0694C4.68858 18.0241 4.77596 18.0002 4.865 18H9.5C9.66468 18.0001 9.82683 17.9595 9.97206 17.8819C10.1173 17.8043 10.2411 17.692 10.3325 17.555L11.5 15.805L14.6675 20.555C14.7889 20.737 14.9666 20.8742 15.1734 20.9456C15.3802 21.0169 15.6047 21.0185 15.8125 20.95C16.0329 20.8754 16.2215 20.7282 16.3475 20.5325L18.035 18H20.5C20.6371 18.0003 20.7728 17.9724 20.8986 17.9181C21.0245 17.8637 21.1378 17.7841 21.2316 17.6841C21.3254 17.5841 21.3976 17.4659 21.4438 17.3368C21.4899 17.2077 21.5091 17.0705 21.5 16.9338C21.4776 16.6767 21.3589 16.4376 21.1677 16.2645C20.9764 16.0913 20.7267 15.9968 20.4688 16H17.5C17.3353 15.9999 17.1732 16.0405 17.0279 16.1181C16.8827 16.1957 16.7589 16.308 16.6675 16.445L15.5 18.195L12.3325 13.445C12.2111 13.2627 12.0331 13.1253 11.8261 13.054C11.619 12.9826 11.3942 12.9812 11.1862 13.05C10.9664 13.1251 10.7783 13.2722 10.6525 13.4675L8.965 16H3.44125C3.33439 16.0003 3.23025 15.9663 3.14409 15.9031C3.05793 15.8399 2.99429 15.7508 2.9625 15.6488C2.6609 14.7119 2.50491 13.7342 2.5 12.75C2.50232 10.6953 3.31958 8.72539 4.77248 7.27248C6.22539 5.81958 8.19528 5.00232 10.25 5C12.8313 5 15.0912 6.11 16.5 7.98625C17.9088 6.11 20.1688 5 22.75 5C24.8047 5.00232 26.7746 5.81958 28.2275 7.27248C29.6804 8.72539 30.4977 10.6953 30.5 12.75Z" fill="#800080"/>
                                  </svg>
							</div>
							<div class="self-stretch flex flex-col justify-start items-start gap-2">
								<div class="self-stretch justify-start text-black text-2xl font-semibold font-['Nunito_Sans'] leading-loose">Monitor your progress and see how your physical symptoms shift as you resolve emotional conflicts. (Coming Soon!)</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- FAQ Section -->
			<div class="self-stretch flex flex-col justify-start items-center gap-4">
				<div class="self-stretch text-center justify-start text-black text-4xl font-bold font-['Nunito_Sans'] leading-10">FAQ</div>
				<div class="w-[1053px] flex flex-col justify-start items-center gap-2.5">
					<div class="self-stretch inline-flex justify-start items-start">
						<div class="flex-1 inline-flex flex-col justify-start items-start">
							<!-- FAQ Item 1 -->
							<div class="self-stretch flex flex-col justify-start items-start">
								<div class="self-stretch h-[3px] pb-[1.50px] flex flex-col justify-end items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
								<div class="self-stretch flex flex-col justify-start items-start">
									<button 
										class="self-stretch py-4 inline-flex justify-start items-start gap-4 hover:bg-gray-50 transition-colors"
										on:click={() => expandedFaq = expandedFaq === 1 ? null : 1}
									>
										<div class="flex-1 self-stretch flex justify-start items-start">
											<div class="flex-1 justify-center text-black text-xl font-bold font-['Nunito_Sans'] leading-normal text-left">How do I become an affiliate?</div>
										</div>
										<div class="w-6 flex justify-start items-start gap-2.5">
											<div class="w-6 h-6 relative overflow-hidden flex items-center justify-center">
												{#if expandedFaq === 1}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{:else}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{/if}
											</div>
										</div>
									</button>
									{#if expandedFaq === 1}
										<div class="self-stretch flex flex-col justify-end items-start">
											<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
												<div class="self-stretch h-0"></div>
											</div>
										</div>
										<div class="self-stretch px-6 pt-4 pb-8 flex flex-col justify-start items-start">
											<div class="self-stretch justify-start text-zinc-700/90 text-base font-normal font-['Nunito_Sans'] leading-snug">Email us at team@rootcause.my and we'll send you your unique code within 24 hours.</div>
										</div>
									{/if}
								</div>
								<div class="self-stretch h-[3px] pt-[1.50px] flex flex-col justify-start items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
							</div>

							<!-- FAQ Item 2 -->
							<div class="self-stretch flex flex-col justify-start items-start">
								<div class="self-stretch h-[3px] pb-[1.50px] flex flex-col justify-end items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
								<button 
									class="self-stretch py-4 inline-flex justify-start items-center gap-4 hover:bg-gray-50 transition-colors"
									on:click={() => expandedFaq = expandedFaq === 2 ? null : 2}
								>
									<div class="flex-1 flex justify-start items-start gap-4">
										<div class="flex-1 flex justify-start items-start">
											<div class="flex-1 justify-center text-black text-xl font-bold font-['Nunito_Sans'] leading-normal text-left">How does my referral get their free month?</div>
										</div>
										<div class="flex justify-start items-start gap-2.5">
											<div class="w-6 h-6 relative overflow-hidden flex items-center justify-center">
												{#if expandedFaq === 2}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{:else}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{/if}
											</div>
										</div>
									</div>
								</button>
								{#if expandedFaq === 2}
									<div class="self-stretch px-6 pt-4 pb-8 flex flex-col justify-start items-start">
										<div class="self-stretch justify-start text-zinc-700/90 text-base font-normal font-['Nunito_Sans'] leading-snug">When someone signs up using your unique affiliate code, they automatically receive their first month free. The discount is applied at checkout when they enter your code.</div>
									</div>
								{/if}
								<div class="self-stretch h-[3px] pt-[1.50px] flex flex-col justify-start items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
							</div>

							<!-- FAQ Item 3 -->
							<div class="self-stretch flex flex-col justify-start items-start">
								<div class="self-stretch h-[3px] pb-[1.50px] flex flex-col justify-end items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
								<button 
									class="self-stretch py-4 inline-flex justify-start items-center gap-4 hover:bg-gray-50 transition-colors"
									on:click={() => expandedFaq = expandedFaq === 3 ? null : 3}
								>
									<div class="flex-1 flex justify-start items-start gap-4">
										<div class="flex-1 flex justify-start items-start">
											<div class="flex-1 justify-center text-black text-xl font-bold font-['Nunito_Sans'] leading-normal text-left">When do I get paid?</div>
										</div>
										<div class="flex justify-start items-start gap-2.5">
											<div class="w-6 h-6 relative overflow-hidden flex items-center justify-center">
												{#if expandedFaq === 3}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{:else}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{/if}
											</div>
										</div>
									</div>
								</button>
								{#if expandedFaq === 3}
									<div class="self-stretch px-6 pt-4 pb-8 flex flex-col justify-start items-start">
										<div class="self-stretch justify-start text-zinc-700/90 text-base font-normal font-['Nunito_Sans'] leading-snug">Commissions are paid out monthly via PayPal or bank transfer. You'll receive your earnings by the 15th of each month for the previous month's referrals.</div>
									</div>
								{/if}
								<div class="self-stretch h-[3px] pt-[1.50px] flex flex-col justify-start items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
							</div>

							<!-- FAQ Item 4 -->
							<div class="self-stretch flex flex-col justify-start items-start">
								<div class="self-stretch h-[3px] pb-[1.50px] flex flex-col justify-end items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
								<button 
									class="self-stretch py-4 inline-flex justify-start items-center gap-4 hover:bg-gray-50 transition-colors"
									on:click={() => expandedFaq = expandedFaq === 4 ? null : 4}
								>
									<div class="flex-1 flex justify-start items-start gap-4">
										<div class="flex-1 flex justify-start items-start">
											<div class="flex-1 justify-center text-black text-xl font-bold font-['Nunito_Sans'] leading-normal text-left">Where can I track my referrals?</div>
										</div>
										<div class="flex justify-start items-start gap-2.5">
											<div class="w-6 h-6 relative overflow-hidden flex items-center justify-center">
												{#if expandedFaq === 4}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{:else}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
													</svg>
												{/if}
											</div>
										</div>
									</div>
								</button>
								{#if expandedFaq === 4}
									<div class="self-stretch px-6 pt-4 pb-8 flex flex-col justify-start items-start">
										<div class="self-stretch justify-start text-zinc-700/90 text-base font-normal font-['Nunito_Sans'] leading-snug">We'll provide you with access to a personalized affiliate dashboard where you can monitor your referrals, track conversions, and view your earnings in real-time.</div>
									</div>
								{/if}
								<div class="self-stretch h-[3px] pt-[1.50px] flex flex-col justify-start items-start">
									<div class="self-stretch py-[1.50px] bg-gray-300/25 flex flex-col justify-start items-start gap-2.5">
										<div class="self-stretch h-0"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Ready to Join CTA Section -->
			<div class="flex flex-col justify-start items-center gap-12">
				<div class="flex flex-col justify-start items-center gap-6">
					<div class="w-[965px] text-center justify-start text-black text-7xl font-bold font-['Nunito_Sans'] leading-[78px]">Ready to Join?</div>
					<div class="w-[884px] text-center justify-start text-black text-xl font-normal font-['Nunito_Sans'] leading-7">Become a RootCause affiliate today and help others decode their body's messages, while earning for every impact you make.</div>
				</div>
				<div class="h-16 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-950 rounded-full inline-flex justify-center items-center gap-2.5">
					<div class="w-6 h-6 relative overflow-hidden">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
							<path d="M19 0.0090332H1C0.801088 0.0090332 0.610322 0.088051 0.46967 0.228703C0.329018 0.369356 0.25 0.560121 0.25 0.759033V13.509C0.25 13.9069 0.408035 14.2884 0.68934 14.5697C0.970644 14.851 1.35218 15.009 1.75 15.009H18.25C18.6478 15.009 19.0294 14.851 19.3107 14.5697C19.592 14.2884 19.75 13.9069 19.75 13.509V0.759033C19.75 0.560121 19.671 0.369356 19.5303 0.228703C19.3897 0.088051 19.1989 0.0090332 19 0.0090332ZM7.25406 7.50903L1.75 12.5537V2.46435L7.25406 7.50903ZM8.36406 8.52622L9.48906 9.56216C9.62743 9.68918 9.80842 9.75965 9.99625 9.75965C10.1841 9.75965 10.3651 9.68918 10.5034 9.56216L11.6284 8.52622L17.0659 13.509H2.92844L8.36406 8.52622ZM12.7459 7.50903L18.25 2.46341V12.5547L12.7459 7.50903Z" fill="white"/>
						  </svg>
					</div>
					<div class="text-center justify-start text-white text-xl font-medium font-['Montserrat'] leading-7">team@rootcause</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="w-full mt-16">
		<Footer />
	</div>
</div>

<style>
	/* Grid Background Lines - 100px squares */
	/* Vertical lines - every 100px starting from 0 */
	.line-22 { left: 0px; } .line-23 { left: 100px; } .line-24 { left: 200px; } .line-25 { left: 300px; } .line-26 { left: 400px; }
	.line-27 { left: 500px; } .line-28 { left: 600px; } .line-29 { left: 700px; } .line-30 { left: 800px; } .line-31 { left: 900px; }
	.line-32 { left: 1000px; } .line-33 { left: 1100px; } .line-34 { left: 1200px; } .line-35 { left: 1300px; } .line-36 { left: 1400px; }
	.line-37 { left: 1500px; } .line-38 { left: 1600px; } .line-39 { left: 1700px; } .line-40 { left: 1800px; }

	.line-22, .line-23, .line-24, .line-25, .line-26, .line-27, .line-28, .line-29, .line-30, .line-31,
	.line-32, .line-33, .line-34, .line-35, .line-36, .line-37, .line-38, .line-39, .line-40 {
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		background: rgba(43, 156, 142, 0.05);
	}

	/* Horizontal lines - every 100px starting from 0 */
	.line-51 { top: 0px; } .line-52 { top: 100px; } .line-53 { top: 200px; } .line-54 { top: 300px; } .line-55 { top: 400px; }
	.line-56 { top: 500px; } .line-57 { top: 600px; } .line-58 { top: 700px; } .line-59 { top: 800px; } .line-60 { top: 900px; }

	.line-51, .line-52, .line-53, .line-54, .line-55, .line-56, .line-57, .line-58, .line-59, .line-60 {
		width: 100%;
		height: 1px;
		position: absolute;
		left: 0;
		background: rgba(43, 156, 142, 0.05);
	}

	/* Hide unused lines */
	.line-41, .line-42, .line-43, .line-44, .line-45, .line-46, .line-47, .line-48, .line-49, .line-50,
	.line-61, .line-62, .line-63, .line-64, .line-65, .line-66, .line-67, .line-68, .line-69, .line-70,
	.line-71, .line-72, .line-73, .line-74, .line-75, .line-76, .line-77, .line-78, .line-79, .line-80,
	.line-81, .line-82, .line-83, .line-84, .line-85, .line-86, .line-87, .line-88, .line-89, .line-90,
	.line-91, .line-92, .line-93, .line-94, .line-95, .line-96, .line-97, .line-98, .line-99, .line-100,
	.line-101, .line-102, .line-103, .line-104 {
		display: none;
	}
</style>

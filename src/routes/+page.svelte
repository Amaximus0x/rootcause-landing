<script lang="ts">
  import { Header, Footer } from '$lib';
  
  // Pricing plan selection state
  let selectedPlan: string = 'monthly'; // default to monthly plan to match Figma
  
  function selectPlan(planType: string): void {
    selectedPlan = planType;
  }
</script>

<!-- RootCause Landing Page -->
<div class="w-full h-auto bg-pure-white overflow-hidden relative">
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
    <div class="line-41"></div>
    <div class="line-42"></div>
    <div class="line-43"></div>
    <div class="line-44"></div>
    <div class="line-45"></div>
    <div class="line-46"></div>
    <div class="line-47"></div>
    <div class="line-48"></div>
    <div class="line-49"></div>
    <div class="line-50"></div>
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
    <div class="line-61"></div>
    <div class="line-62"></div>
    <div class="line-63"></div>
    <div class="line-64"></div>
    <div class="line-65"></div>
    <div class="line-66"></div>
    <div class="line-67"></div>
    <div class="line-68"></div>
    <div class="line-69"></div>
    <div class="line-70"></div>
    <div class="line-71"></div>
    <div class="line-72"></div>
    <div class="line-73"></div>
    <div class="line-74"></div>
    <div class="line-75"></div>
    <div class="line-76"></div>
    <div class="line-77"></div>
    <div class="line-78"></div>
    <div class="line-79"></div>
    <div class="line-80"></div>
    <div class="line-81"></div>
    <div class="line-82"></div>
    <div class="line-83"></div>
    <div class="line-84"></div>
    <div class="line-85"></div>
    <div class="line-86"></div>
    <div class="line-87"></div>
    <div class="line-88"></div>
    <div class="line-89"></div>
    <div class="line-90"></div>
    <div class="line-91"></div>
    <div class="line-92"></div>
    <div class="line-93"></div>
    <div class="line-94"></div>
    <div class="line-95"></div>
    <div class="line-96"></div>
    <div class="line-97"></div>
    <div class="line-98"></div>
    <div class="line-99"></div>
    <div class="line-100"></div>
    <div class="line-101"></div>
    <div class="line-102"></div>
    <div class="line-103"></div>
    <div class="line-104"></div>
  </div>
  
  <!-- Navigation Header -->
  <div class="relative z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-[77px] lg:pl-[88px] lg:pr-[87px]">
    <Header />
  </div>
  
  <!-- Hero Section -->
  <div class="w-full relative rounded-bl-[132px] rounded-br-[132px] lg:rounded-bl-[164px] lg:rounded-br-[164px] overflow-hidden">
    
    <!-- Hero Content Container -->
    <div class="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      
      <!-- Hero Text -->
      <div class="text-center pt-16 sm:pt-20 lg:pt-6 mb-4 lg:mb-6.5">
        <div class="text-center lg:w-[1036px] lg:mx-auto text-2xl lg:text-7xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-[78px]">
          <p>
            Your Body Speaks <br> RootCause
            <span class="text-teal-600"> Helps </span>
            You Listen
          </p>
        </div>
      </div>
      
      <!-- Subtitle -->
      <div class="text-center mb-16">
        <p class="text-black text-sm lg:text-xl font-normal font-['Nunito_Sans'] leading-snug lg:leading-7 lg:w-[884px] mx-auto">
          Go beyond just managing your symptoms and start understanding them. RootCause gives you the tools to map the powerful connection between emotional trauma and your physical well-being.
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 lg:mb-12">
        <div class="w-full lg:w-[617px] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center gap-4 lg:gap-5">
          <a href="https://apps.apple.com/fr/app/rootcause-emotion-body-link/id6740285911?l=en-GB" target="_blank" rel="noopener noreferrer" class="w-full lg:flex-1 lg:self-stretch px-4 lg:px-4 py-3 lg:py-2 bg-gradient-to-r from-teal-600 to-teal-900 rounded-full flex justify-center items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.524 2.8125C12.732 2.00692 13.202 1.29338 13.86 0.784213C14.518 0.275046 15.3267 -0.000833469 16.1587 1.89152e-06H16.2524C16.4513 1.89152e-06 16.6421 0.0790195 16.7827 0.219672C16.9234 0.360324 17.0024 0.55109 17.0024 0.750002C17.0024 0.948914 16.9234 1.13968 16.7827 1.28033C16.6421 1.42098 16.4513 1.5 16.2524 1.5H16.1587C15.6598 1.49996 15.1751 1.6657 14.7807 1.97116C14.3863 2.27662 14.1046 2.70449 13.9799 3.1875C13.9302 3.3802 13.8059 3.54525 13.6345 3.64634C13.4631 3.74744 13.2585 3.77629 13.0658 3.72656C12.8731 3.67684 12.7081 3.5526 12.607 3.38118C12.5059 3.20976 12.4771 3.0052 12.5268 2.8125H12.524ZM21.4368 15.8991C21.3805 15.7705 21.2896 15.6602 21.1743 15.5803C19.5833 14.4872 19.2524 12.6225 19.2524 11.25C19.2524 9.59344 20.5152 8.15063 21.268 7.43719C21.3421 7.3671 21.4011 7.28265 21.4414 7.189C21.4817 7.09535 21.5025 6.99446 21.5025 6.8925C21.5025 6.79054 21.4817 6.68966 21.4414 6.59601C21.4011 6.50235 21.3421 6.4179 21.268 6.34781C20.0793 5.22563 18.1105 4.5 16.2524 4.5C14.9176 4.50119 13.613 4.89683 12.5024 5.63719C11.2069 4.76847 9.64916 4.37832 8.09711 4.53385C6.54507 4.68938 5.09572 5.38086 3.99834 6.48938C3.34232 7.15912 2.82758 7.95387 2.48471 8.82643C2.14183 9.69899 1.97782 10.6316 2.00241 11.5688C2.03921 13.1506 2.39096 14.7093 3.03709 16.1537C3.68322 17.5981 4.61077 18.8992 5.76553 19.9809C6.46097 20.638 7.38223 21.0028 8.33897 21H16.559C17.0705 21.001 17.5767 20.8969 18.0463 20.6942C18.5159 20.4915 18.9389 20.1945 19.289 19.8216C19.9375 19.1236 20.4985 18.3491 20.9596 17.5153C21.6177 16.3125 21.5333 16.125 21.4368 15.8991Z" fill="white"/>
              </svg>
            </div>
            <div class="text-center justify-start text-white text-base lg:text-xl font-medium font-['Montserrat'] leading-7">Download for iOS</div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ayanadevstudio.rootcause" target="_blank" rel="noopener noreferrer" class="w-full lg:flex-1 lg:h-16 px-4 lg:px-4 py-3 lg:py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 flex justify-center items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M22.4832 11.2044L6.75003 2.20252C6.52067 2.06877 6.25992 1.99829 5.99441 1.99829C5.7289 1.99829 5.46815 2.06877 5.23878 2.20252C5.01281 2.33209 4.82532 2.51938 4.69552 2.74523C4.56571 2.97107 4.49825 3.22735 4.50003 3.48783V21.5122C4.49929 21.7724 4.56764 22.0282 4.69809 22.2533C4.82854 22.4785 5.01642 22.665 5.24253 22.7938C5.4719 22.9275 5.73265 22.998 5.99816 22.998C6.26367 22.998 6.52442 22.9275 6.75378 22.7938L22.4832 13.7938C22.7155 13.6664 22.9093 13.479 23.0443 13.251C23.1792 13.0231 23.2505 12.7631 23.2505 12.4981C23.2505 12.2332 23.1792 11.9732 23.0443 11.7452C22.9093 11.5173 22.7155 11.3299 22.4832 11.2025V11.2044ZM15 13.5603L16.7738 15.3341L8.47691 20.0835L15 13.5603ZM8.47503 4.91564L16.7747 9.66595L15 11.4397L8.47503 4.91564ZM18.1228 14.5625L16.0603 12.5L18.1228 10.4375L21.7257 12.5L18.1228 14.5625Z" fill="url(#paint0_linear_6945_72430)"/>
                <defs>
                  <linearGradient id="paint0_linear_6945_72430" x1="4.5" y1="12.4981" x2="23.2505" y2="12.4981" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2B9C8E"/>
                    <stop offset="1" stop-color="#264653"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="text-center justify-start text-teal-600 text-base lg:text-xl font-medium font-['Montserrat'] leading-7">Download for Android</div>
          </a>
        </div>
      </div>
      
      <!-- Free Reports Badge -->
      <div class="px-2 sm:px-3 lg:px-4 py-2 lg:py-2.5 mb-8 lg:mb-16 bg-teal-600/5 rounded-full outline outline-1 outline-offset-[-1px] outline-black/5 backdrop-blur-[2px] inline-flex justify-center items-center gap-1.5 sm:gap-2.5 max-w-[95%] sm:max-w-[90%]">
        <img class="w-8 h-8" src="/RootCause-PNG.png" alt="RootCause icon" />
        <div class="text-center justify-start text-black text-sm sm:text-sm lg:text-base font-normal font-nunito italic leading-tight sm:leading-7 whitespace-nowrap">get 5 free health signal reports!</div>
      </div>
      
      <!-- Video container -->
			<div class="frame-1171276493">
				<div class="frame-1171276495">
					<div class="rectangle-120" />
					<video class="frame-1171276496" autoplay muted loop playsinline>
						<source
							src="https://cdn.shopify.com/videos/c/o/v/1b165b0df6cb43e1b59fd2f582f9c559.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
      
    </div>
    
  </div>

  <!-- Main Content Sections -->
  <div class="w-full mt-8 sm:mt-12 lg:mt-[56px] flex flex-col justify-center items-center gap-16 sm:gap-20 lg:gap-xl-112 px-4 sm:px-8 lg:px-16 xl:px-24">
    
    <!-- Testimonials Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8 lg:gap-lg-32">
      <div class="w-full flex flex-col justify-start items-center gap-4 lg:gap-sm-8">
        <div class="self-stretch text-center justify-start text-black text-h2 lg:text-h1-md font-nunito">Why Holistic Experts Are Talking About RootCause</div>
        <div class="self-stretch lg:w-[611px] text-center justify-start text-black text-sm lg:text-base font-normal font-nunito leading-snug mx-auto">Discover the app featured in wellness communities for its revolutionary, compassionate, and GNM-grounded approach to mind-body health.</div>
      </div>
      
      <div class="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-lg-16">
        <div class="self-stretch h-20 lg:h-auto p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.9647 10.7672L17.7459 14.4075L19.0313 19.8516C19.1022 20.1471 19.0839 20.457 18.9788 20.7422C18.8736 21.0274 18.6864 21.275 18.4406 21.4537C18.1948 21.6325 17.9015 21.7344 17.5979 21.7466C17.2942 21.7588 16.9937 21.6807 16.7344 21.5222L12 18.6085L7.26282 21.5222C7.00353 21.6798 6.70341 21.7571 6.40026 21.7445C6.0971 21.7319 5.80446 21.6298 5.55919 21.4512C5.31392 21.2726 5.12698 21.0254 5.02191 20.7407C4.91685 20.4561 4.89835 20.1467 4.96875 19.8516L6.25875 14.4075L2.04 10.7672C1.81059 10.5689 1.64468 10.3075 1.56299 10.0155C1.48129 9.72348 1.48743 9.41388 1.58064 9.12535C1.67385 8.83681 1.85 8.58213 2.08709 8.39312C2.32418 8.2041 2.6117 8.08912 2.91375 8.06253L8.445 7.61628L10.5788 2.45253C10.6942 2.17111 10.8908 1.93039 11.1435 1.76097C11.3961 1.59156 11.6935 1.5011 11.9977 1.5011C12.3019 1.5011 12.5992 1.59156 12.8518 1.76097C13.1045 1.93039 13.3011 2.17111 13.4166 2.45253L15.5494 7.61628L21.0806 8.06253C21.3833 8.08813 21.6716 8.20247 21.9096 8.39122C22.1475 8.57998 22.3245 8.83476 22.4183 9.12364C22.5121 9.41253 22.5185 9.72267 22.4368 10.0152C22.3552 10.3077 22.189 10.5697 21.9591 10.7682L21.9647 10.7672Z" fill="#FFD700"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">4.8★ rating from the medically unheard</div>
        </div>
        
        <div class="self-stretch h-20 lg:h-auto p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.125 11.25C22.125 13.3716 21.5625 14.6925 20.4441 15.1753C20.1178 15.3125 19.7667 15.3805 19.4128 15.375C19.148 15.3726 18.8842 15.3434 18.6253 15.2878C18.5298 15.2688 18.4452 15.2137 18.3891 15.1341C17.0721 13.2632 15.5726 11.5278 13.9125 9.95344C13.768 9.81669 13.5752 9.74292 13.3763 9.74837C13.1775 9.75382 12.9889 9.83804 12.8522 9.9825C12.7154 10.127 12.6417 10.3198 12.6471 10.5187C12.6526 10.7175 12.7368 10.9061 12.8812 11.0428C14.2725 12.3469 18.8934 16.995 20.2238 22.3181C20.272 22.5111 20.2416 22.7153 20.1392 22.8858C20.0369 23.0563 19.8711 23.1792 19.6781 23.2275C19.6198 23.242 19.5601 23.2495 19.5 23.25C19.3329 23.2498 19.1707 23.1937 19.0391 23.0908C18.9074 22.9879 18.814 22.844 18.7734 22.6819C18.3872 21.1378 17.6812 19.6369 16.8553 18.2672C16.8289 18.4999 16.7689 18.7276 16.6772 18.9431C16.1925 20.0625 14.8716 20.625 12.75 20.625C10.6284 20.625 9.3075 20.0625 8.82375 18.9431C8.31281 17.7638 8.78719 16.0538 10.23 13.8609C10.2938 13.7672 10.3575 13.6734 10.4175 13.5797L10.1363 13.7672C8.51625 14.8378 7.15781 15.375 6.08344 15.375C5.72958 15.3805 5.37843 15.3125 5.05219 15.1753C3.9375 14.6925 3.375 13.3716 3.375 11.25C3.375 9.12844 3.9375 7.8075 5.05594 7.32375C6.23625 6.81281 7.94625 7.28719 10.1391 8.73L10.4203 8.9175C10.3578 8.82375 10.2953 8.73 10.2328 8.63625C8.78813 6.44344 8.31375 4.73344 8.82656 3.55313C9.3075 2.4375 10.6284 1.875 12.75 1.875C14.8716 1.875 16.1925 2.4375 16.6763 3.55594C17.1872 4.73625 16.7128 6.44625 15.27 8.63906C15.2075 8.73469 15.145 8.82844 15.0825 8.92031L15.3638 8.73281C17.5566 7.28813 19.2666 6.81375 20.4469 7.32656C21.5625 7.8075 22.125 9.12844 22.125 11.25Z" fill="#008000"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Recommended by holistic health practitioners</div>
        </div>
        
        <div class="self-stretch h-20 lg:h-auto p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.375 7.125V6.75C20.374 5.93742 20.133 5.14323 19.6823 4.46709C19.2316 3.79095 18.5913 3.26299 17.8416 2.94945C17.092 2.63591 16.2664 2.55076 15.4685 2.70469C14.6707 2.85862 13.936 3.24477 13.3568 3.81469C13.3226 3.84922 13.2955 3.8902 13.2771 3.93525C13.2588 3.9803 13.2496 4.02854 13.25 4.07719V12.3947C13.2501 12.4623 13.2686 12.5286 13.3034 12.5866C13.3381 12.6446 13.3879 12.6921 13.4475 12.7241C13.5071 12.756 13.5742 12.7713 13.6417 12.7683C13.7093 12.7653 13.7747 12.7441 13.8312 12.7069C14.5444 12.2496 15.3728 12.0045 16.22 12C16.4161 11.9964 16.6061 12.068 16.751 12.2002C16.8959 12.3323 16.9847 12.515 16.999 12.7106C17.0044 12.8124 16.9889 12.9142 16.9536 13.0097C16.9183 13.1053 16.864 13.1927 16.7938 13.2666C16.7236 13.3405 16.6391 13.3993 16.5454 13.4394C16.4518 13.4795 16.3509 13.5001 16.249 13.5C15.4534 13.5 14.6903 13.8161 14.1277 14.3787C13.5651 14.9413 13.249 15.7044 13.249 16.5V19.6763C13.2489 19.7323 13.2614 19.7878 13.2856 19.8384C13.3098 19.889 13.345 19.9335 13.3887 19.9688C13.9209 20.4092 14.5475 20.721 15.2198 20.8799C15.8921 21.0387 16.592 21.0404 17.2651 20.8848C17.9382 20.7291 18.5663 20.4204 19.1006 19.9825C19.6349 19.5446 20.0611 18.9894 20.3459 18.36C20.3746 18.2967 20.3851 18.2267 20.3763 18.1578C20.3675 18.0888 20.3397 18.0237 20.2961 17.9697C20.2524 17.9156 20.1946 17.8747 20.1291 17.8516C20.0635 17.8285 19.9929 17.824 19.925 17.8387C19.4575 17.9459 18.9795 18 18.5 18H17.7753C17.5818 18.0024 17.3945 17.9315 17.2511 17.8017C17.1076 17.6718 17.0186 17.4925 17.0018 17.2997C16.995 17.1971 17.0094 17.0942 17.044 16.9974C17.0786 16.9006 17.1328 16.8119 17.2031 16.7369C17.2735 16.6619 17.3585 16.6022 17.4529 16.5615C17.5472 16.5207 17.649 16.4998 17.7518 16.5H18.5018C19.2854 16.5012 20.0575 16.312 20.7518 15.9487C21.574 15.5205 22.2571 14.8668 22.7209 14.0641C23.1847 13.2614 23.4101 12.3432 23.3705 11.417C23.331 10.4908 23.0281 9.59508 22.4976 8.83489C21.967 8.0747 21.2307 7.48155 20.375 7.125ZM19.25 10.5H18.875C17.9798 10.5 17.1214 10.1444 16.4885 9.51149C15.8555 8.87855 15.5 8.02011 15.5 7.125V6.75C15.5 6.55109 15.579 6.36032 15.7196 6.21967C15.8603 6.07902 16.051 6 16.25 6C16.4489 6 16.6396 6.07902 16.7803 6.21967C16.9209 6.36032 17 6.55109 17 6.75V7.125C17 7.37123 17.0485 7.61505 17.1427 7.84253C17.2369 8.07002 17.375 8.27672 17.5491 8.45083C17.9008 8.80246 18.3777 9 18.875 9H19.25C19.4489 9 19.6396 9.07902 19.7803 9.21967C19.9209 9.36032 20 9.55109 20 9.75C20 9.94891 19.9209 10.1397 19.7803 10.2803C19.6396 10.421 19.4489 10.5 19.25 10.5ZM8.74995 2.625C7.65632 2.62624 6.60783 3.06124 5.83451 3.83456C5.06119 4.60787 4.62619 5.65636 4.62495 6.75V7.125C3.76932 7.48174 3.03315 8.07505 2.50275 8.83534C1.97236 9.59563 1.66974 10.4914 1.63037 11.4176C1.59101 12.3438 1.81654 13.262 2.28052 14.0645C2.74449 14.8671 3.42768 15.5207 4.24995 15.9487C4.94424 16.312 5.71638 16.5012 6.49995 16.5H7.22464C7.41845 16.4971 7.60616 16.5678 7.75 16.6977C7.89384 16.8276 7.98315 17.0072 7.99995 17.2003C8.00676 17.3029 7.99241 17.4058 7.95778 17.5026C7.92315 17.5994 7.86899 17.6881 7.79865 17.7631C7.72832 17.8381 7.64332 17.8978 7.54892 17.9385C7.45453 17.9793 7.35277 18.0002 7.24995 18H6.49995C6.02003 18.0002 5.54164 17.9458 5.07401 17.8378C5.00615 17.823 4.93551 17.8273 4.86997 17.8503C4.80442 17.8733 4.74655 17.9141 4.70281 17.968C4.65906 18.022 4.63116 18.087 4.62222 18.1559C4.61327 18.2248 4.62363 18.2948 4.65214 18.3581C4.93689 18.9877 5.36299 19.5431 5.89731 19.9812C6.43163 20.4192 7.05978 20.7282 7.73293 20.884C8.40609 21.0398 9.10611 21.0383 9.77858 20.8796C10.451 20.7208 11.0779 20.4091 11.6103 19.9688C11.6539 19.9335 11.6892 19.889 11.7133 19.8384C11.7375 19.7878 11.75 19.7323 11.75 19.6763V16.5C11.75 15.7044 11.4339 14.9413 10.8713 14.3787C10.3087 13.8161 9.5456 13.5 8.74995 13.5C8.64806 13.5001 8.5472 13.4795 8.45354 13.4394C8.35989 13.3993 8.27538 13.3405 8.2052 13.2666C8.13502 13.1927 8.08062 13.1053 8.04533 13.0097C8.01004 12.9142 7.9946 12.8124 7.99995 12.7106C8.01431 12.5149 8.1032 12.332 8.24831 12.1998C8.39341 12.0676 8.58369 11.9961 8.77995 12C9.62711 12.0045 10.4555 12.2496 11.1687 12.7069C11.2252 12.7441 11.2906 12.7653 11.3582 12.7683C11.4257 12.7713 11.4928 12.756 11.5524 12.7241C11.612 12.6921 11.6618 12.6446 11.6965 12.5866C11.7313 12.5286 11.7498 12.4623 11.75 12.3947V4.07719C11.7503 3.97875 11.7119 3.88413 11.6431 3.81375C10.873 3.05177 9.83329 2.62457 8.74995 2.625ZM9.49995 7.125C9.49995 8.02011 9.14437 8.87855 8.51144 9.51149C7.8785 10.1444 7.02006 10.5 6.12495 10.5H5.74995C5.55104 10.5 5.36027 10.421 5.21962 10.2803C5.07897 10.1397 4.99995 9.94891 4.99995 9.75C4.99995 9.55109 5.07897 9.36032 5.21962 9.21967C5.36027 9.07902 5.55104 9 5.74995 9H6.12495C6.37118 9 6.615 8.9515 6.84248 8.85727C7.06997 8.76305 7.27667 8.62494 7.45078 8.45083C7.62489 8.27672 7.763 8.07002 7.85723 7.84253C7.95145 7.61505 7.99995 7.37123 7.99995 7.125V6.75C7.99995 6.55109 8.07897 6.36032 8.21962 6.21967C8.36027 6.07902 8.55104 6 8.74995 6C8.94886 6 9.13963 6.07902 9.28028 6.21967C9.42093 6.36032 9.49995 6.55109 9.49995 6.75V7.125Z" fill="#E38DFD"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Rooted in German New Medicine wisdom</div>
        </div>
        
        <div class="self-stretch h-20 lg:h-auto p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="p-1 bg-white rounded-full flex justify-start items-center gap-2.5">
            <div class="w-6 h-6 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.25 2.25C10.3216 2.25 8.43657 2.82183 6.83319 3.89317C5.22982 4.96451 3.98013 6.48726 3.24218 8.26884C2.50422 10.0504 2.31114 12.0108 2.68735 13.9021C3.06355 15.7934 3.99215 17.5307 5.35571 18.8943C6.71928 20.2579 8.45656 21.1865 10.3479 21.5627C12.2392 21.9389 14.1996 21.7458 15.9812 21.0078C17.7627 20.2699 19.2855 19.0202 20.3568 17.4168C21.4282 15.8134 22 13.9284 22 12C21.9973 9.41498 20.9692 6.93661 19.1413 5.10872C17.3134 3.28084 14.835 2.25273 12.25 2.25ZM20.5 12C20.5008 13.0584 20.2971 14.107 19.9 15.0881L15.7094 12.5109C15.5312 12.401 15.3319 12.3298 15.1244 12.3019L12.985 12.0131C12.6902 11.9747 12.3906 12.0241 12.1238 12.1552C11.857 12.2863 11.6348 12.4932 11.485 12.75H10.6675L10.3113 12.0131C10.2128 11.8079 10.0686 11.628 9.88988 11.4871C9.71114 11.3462 9.50252 11.2481 9.28 11.2003L8.53 11.0381L9.26313 9.75H10.8297C11.0832 9.7495 11.3325 9.68501 11.5544 9.5625L12.7028 8.92875C12.8037 8.87251 12.898 8.80522 12.9841 8.72812L15.5069 6.44625C15.7598 6.21957 15.9279 5.91345 15.9835 5.57838C16.0391 5.24331 15.9787 4.89931 15.8125 4.60312L15.7788 4.54219C17.1904 5.21156 18.3833 6.26756 19.219 7.58761C20.0547 8.90767 20.4989 10.4377 20.5 12ZM4 12C3.99875 10.7738 4.27233 9.56284 4.80063 8.45625L5.86375 11.2941C5.95235 11.529 6.09852 11.738 6.28885 11.9018C6.47918 12.0656 6.70759 12.179 6.95313 12.2316L8.96219 12.6637L9.31938 13.4062C9.44334 13.6588 9.63545 13.8716 9.87401 14.0207C10.1126 14.1698 10.3881 14.2492 10.6694 14.25H10.8081L10.1303 15.7716C10.0109 16.0395 9.97264 16.3365 10.0203 16.626C10.0679 16.9154 10.1994 17.1845 10.3984 17.4L10.4116 17.4131L12.25 19.3069L12.0681 20.2444C9.91359 20.1942 7.86396 19.3041 6.35662 17.7638C4.84927 16.2235 4.00358 14.1551 4 12Z" fill="#00B7FF"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 justify-start text-black text-lg font-medium font-['Nunito_Sans'] leading-relaxed">Downloaded in 25 Countries</div>
        </div>
      </div>
    </section>

    <!-- Why RootCause Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8 lg:gap-lg-16">
      <div class="self-stretch text-center justify-start font-nunito text-h2 lg:text-h1-md text-pure-black">Why RootCause?</div>
      <div class="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-lg-16">
        <div class="self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-12 h-12" src="/gif-1.gif" alt="gif-1" />
            </div>
            <div class="flex-1 justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">My Tests Are Normal, But My Pain is REAL</div>
          </div>
          <div class="self-stretch justify-start text-black text-small-medium font-nunito">You've spent $400+ per specialist visit only to hear "everything looks fine." But your chronic fatigue, migraines, and flare-ups don't feel fine. You're one of 30 million Americans dismissed by a system that's missing the bigger picture. Your symptoms are real, but no one seems equipped to help you understand why.</div>
        </div>
        
        <div class="self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-12 h-12" src="/gif-2.gif" alt="gif-2" />
            </div>
            <div class="flex-1 justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">My Emotions and Symptoms Are Connected</div>
          </div>
          <div class="self-stretch justify-start text-black text-small-medium font-nunito">Stressful week = migraines. Anxiety = stomach knots. You see the pattern, but doctors don't. 60-80% of doctor visits are stress-related, yet medicine treats your body like separate, unconnected parts. You're left knowing there's a deeper story, but with no way to decode it.</div>
        </div>
        
        <div class="self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-12 h-12" src="/gif-3.gif" alt="gif-3" />
            </div>
            <div class="flex-1 justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">I'm Tired of Being Told It's 'All in My Head.</div>
          </div>
          <div class="self-stretch justify-start text-black text-small-medium font-nunito">Your pain is real. Your exhaustion is real. Your symptoms are real. Being dismissed with "it's just stress" isn't a diagnosis—it's medical gaslighting. You deserve to be heard, validated, and given real answers about what your body is trying to tell you.</div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="self-stretch inline-flex flex-col justify-start items-center gap-8">
      <div class="self-stretch flex flex-col justify-start items-center gap-4">
        <div class="self-stretch text-center justify-start text-black text-h2 lg:text-h1-md font-nunito">How It Works</div>
        <div class="w-[611px] text-center justify-start text-black text-body-italic font-nunito italic">From Symptom to Insight in Minutes</div>
      </div>
      <div class="self-stretch p-3 lg:p-8 bg-teal-600/5 rounded-3xl flex flex-col justify-center items-start gap-4">
        <div class="self-stretch bg-teal-600/5 rounded-2xl inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="w-4 self-stretch bg-teal-600"></div>
          <div class="flex-1 py-4 inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Pinpoint Your Body's Signals</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">Log recurring physical symptoms like fatigue, skin issues, gut discomfort, or chronic tension. Be as specific as you like.</div>
          </div>
          <div class="w-4 self-stretch bg-teal-600"></div>
        </div>
        <div class="self-stretch bg-teal-600/5 rounded-2xl inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="w-4 self-stretch bg-teal-600"></div>
          <div class="flex-1 py-4 inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Receive GNM-Inspired Insights</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">Our algorithm generates a report connecting your symptoms to potential emotional or biological conflicts based on German New Medicine frameworks.</div>
          </div>
          <div class="w-4 self-stretch bg-teal-600"></div>
        </div>
        <div class="self-stretch bg-teal-600/5 rounded-2xl inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="w-4 self-stretch bg-teal-600"></div>
          <div class="flex-1 py-4 inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Identify Your Triggers</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">The app helps you recognize patterns between your symptoms and specific events, environments, or stressors in your life.</div>
          </div>
          <div class="w-4 self-stretch bg-teal-600"></div>
        </div>
        <div class="self-stretch bg-teal-600/5 rounded-2xl inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="w-4 self-stretch bg-teal-600"></div>
          <div class="flex-1 py-4 inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Heal from Within</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">Use daily affirmations and guided journaling prompts (Coming Soon!) designed to help you process conflicts, reduce your emotional load, and support your body's innate healing capacity.</div>
          </div>
          <div class="w-4 self-stretch bg-teal-600"></div>
        </div>
        <div class="self-stretch bg-teal-600/5 rounded-2xl inline-flex justify-center items-center gap-4 overflow-hidden">
          <div class="w-4 self-stretch bg-teal-600"></div>
          <div class="flex-1 py-4 inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Track Your Healing Progress</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">With Pattern Logging, monitor how your symptoms evolve over time as you address emotional conflicts. See recurring cycles, improvements, and get empowered by witnessing your body's natural healing journey.</div>
          </div>
          <div class="w-4 self-stretch bg-teal-600"></div>
        </div>
      </div>
    </section>

    <!-- Who Is RootCause For Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8">
      <div class="self-stretch inline-flex flex-col justify-start items-center gap-4">
        <div class="self-stretch text-center font-nunito justify-start text-black text-h2 lg:text-h1-md">Who Is Rootcause For?</div>
        <div class="w-full lg:w-[611px] text-center justify-start font-nunito text-black text-small lg:text-small-lg italic">If This Sounds Like You, You're in the Right Place.</div>
      </div>
      
      <!-- Responsive container that switches from vertical (mobile) to horizontal (desktop) -->
      <div class="w-full flex flex-col lg:flex-row justify-start items-center lg:items-stretch gap-4 lg:gap-8">
        <!-- Right column with image - First on mobile, Last on desktop -->
        <div class="w-full lg:w-1/2 self-stretch relative bg-teal-600/5 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0 order-first lg:order-last">
          <!-- Mobile layout background rectangles -->
          <div class="w-[217.70px] h-[225.95px] left-[163.56px] top-[58px] absolute origin-top-left rotate-[15deg] bg-[#E7F4F3] rounded-2xl lg:hidden"></div>
          <div class="w-[217.70px] h-[225.95px] left-[16px] top-[113.46px] absolute origin-top-left rotate-[-15deg] bg-[#E7F4F3] rounded-2xl lg:hidden"></div>
          
          <!-- Desktop layout background rectangles -->
          <div class="hidden lg:block w-[343px] h-[356px] left-[50px] top-[120px] absolute origin-top-left rotate-[-15deg] bg-[#E7F4F3] rounded-3xl"></div>
          <div class="hidden lg:block w-[343px] h-[356px] left-[240px] top-[33px] absolute origin-top-left rotate-[15deg] bg-[#E7F4F3] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"></div>
          
          <!-- Mobile layout image -->
          <div class="w-[247.67px] h-[278px] left-[69.16px] top-[58px] absolute rounded-2xl overflow-hidden lg:hidden">
            <img class="w-full h-full object-cover rounded-2xl" src="/discover.png" alt="Discover RootCause" />
          </div>
          
          <!-- Desktop layout image -->
          <div class="hidden lg:block w-[347px] h-[385px] left-[140px] top-[80px] absolute rounded-3xl overflow-hidden">
            <div data-property-1="Frame 1171276530" class="w-[343px] h-[613px] left-0 top-[-90px] absolute">
              <img class="w-[343px] h-[385px] left-0 top-[90px] absolute rounded-3xl" src="/discover.png" alt="Discover RootCause" />
            </div>
          </div>
        </div>

        <!-- Left column with text content - Last on mobile, First on desktop -->
        <div class="w-full lg:w-1/2 p-3 lg:p-8 bg-teal-600/5 rounded-3xl flex flex-col justify-center items-start gap-4 order-last lg:order-first">
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">The Medical Mystery</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">You've been to every specialist and tried every test, but you're still searching for answers. You're ready for a new, empowering perspective.</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">The Conscious Seeker</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">You already know your mind and body are profoundly connected. You practice yoga, meditation, or holistic health and need a tool to deepen that connection.</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">The GNM Explorer</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">You're familiar with German New Medicine and want a structured, self-paced way to apply its principles to your own life for reflection and learning.</div>
          </div>
        </div>
      </div>
    </section>


    <!-- Who Is RootCause Differences Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8">
      <div class="self-stretch inline-flex flex-col justify-start items-center gap-4">
        <div class="self-stretch text-center justify-start text-black font-nunito text-h2 lg:text-h1-md">Who Is Rootcause Differences</div>
        <div class="w-full lg:w-[611px] text-center justify-start text-black font-nunito text-small lg:text-small-lg italic">More Than an App—It's a New Perspective.</div>
      </div>
      
      <!-- Responsive container that switches from vertical (mobile) to horizontal (desktop) -->
      <div class="w-full flex flex-col lg:flex-row justify-start items-center lg:items-stretch gap-4 lg:gap-8">
        <!-- Image container - First in both mobile and desktop -->
        <div class="w-full lg:w-1/2 self-stretch relative bg-teal-600/5 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0">
          <!-- Mobile layout background rectangles -->
          <div class="w-[217.70px] h-[225.95px] left-[163.56px] top-[58px] absolute origin-top-left rotate-[15deg] bg-[#E7F4F3] rounded-2xl lg:hidden"></div>
          <div class="w-[217.70px] h-[225.95px] left-[16px] top-[113.46px] absolute origin-top-left rotate-[-15deg] bg-[#E7F4F3] rounded-2xl lg:hidden"></div>
          
          <!-- Desktop layout background rectangles -->
          <div class="hidden lg:block w-60 h-80 left-[293.50px] top-[150px] absolute bg-[#E7F4F3] rounded-3xl"></div>
          <div class="hidden lg:block w-60 h-80 left-[58.50px] top-[138px] absolute bg-[#E7F4F3] rounded-3xl"></div>
          
          <!-- Mobile layout image -->
          <div class="w-[247.67px] h-[278px] left-[69.16px] top-[58px] absolute rounded-2xl overflow-hidden lg:hidden">
            <img class="w-full h-full object-cover rounded-2xl" src="/exploring-your-body-insight.png" alt="Exploring your body insight" />
          </div>
          
          <!-- Desktop layout image -->
          <div class="hidden lg:block w-96 h-[488px] left-[94.50px] top-[44px] absolute">
            <div data-property-1="Screenshot 2024-12-30 at 7.17.56 PM" class="w-96 h-[459px] left-[19px] top-[19px] absolute">
              <img class="w-80 h-96 left-[16.97px] top-[17.49px] absolute rounded-3xl" src="/exploring-your-body-insight.png" alt="Exploring your body insight" />
            </div>
          </div>
        </div>

        <!-- Content container - Second in both mobile and desktop -->
        <div class="w-full lg:w-1/2 p-3 lg:p-8 bg-teal-600/5 rounded-3xl flex flex-col justify-center items-start gap-4">
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Rooted in Wisdom</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">We offer GNM-inspired insights—not medical advice—to serve as a powerful self-awareness tool.</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Compassion First</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">We start by validating your experience, not dismissing it. Your pain is real, and it has a message.</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Pattern Recognition</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">Go beyond one-off symptoms. Our tools help you understand the triggers that keep your issues recurring.</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-2xl flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div class="self-stretch justify-start text-black text-h2-italic lg:text-h2-italic-lg italic font-nunito">Personal Support Tools</div>
            <div class="self-stretch justify-start text-black text-small-medium lg:text-body-medium font-nunito">Gentle affirmations and guided journaling features support your emotional journey alongside your physical one.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8 lg:gap-lg-16">
      <div class="self-stretch flex flex-col justify-start items-center gap-2 lg:gap-4">
        <div class="self-stretch text-center justify-start text-black font-nunito text-h2 lg:text-h1-md">Feature Highlights</div>
      </div>
      
      <!-- Responsive container that switches from vertical (mobile) to horizontal (desktop) -->
      <div class="w-full lg:self-stretch flex flex-col lg:flex-row lg:h-64 justify-center lg:justify-start items-center lg:items-center gap-4">
        <!-- Body Signal Tracker -->
        <div class="w-full lg:flex-1 lg:h-auto lg:self-stretch p-4 bg-teal-600/5 rounded-2xl flex flex-col justify-between items-start overflow-hidden">
          <div class="w-8 h-8 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M29 26C29 26.2652 28.8946 26.5196 28.7071 26.7071C28.5196 26.8946 28.2652 27 28 27H4C3.73478 27 3.48043 26.8946 3.29289 26.7071C3.10536 26.5196 3 26.2652 3 26C3 25.7348 3.10536 25.4804 3.29289 25.2929C3.48043 25.1054 3.73478 25 4 25H5V17C5 16.7348 5.10536 16.4804 5.29289 16.2929C5.48043 16.1054 5.73478 16 6 16H9C9.26522 16 9.51957 16.1054 9.70711 16.2929C9.89464 16.4804 10 16.7348 10 17V25H12V11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H17C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11V25H20V5C20 4.73478 20.1054 4.48043 20.2929 4.29289C20.4804 4.10536 20.7348 4 21 4H26C26.2652 4 26.5196 4.10536 26.7071 4.29289C26.8946 4.48043 27 4.73478 27 5V25H28C28.2652 25 28.5196 25.1054 28.7071 25.2929C28.8946 25.4804 29 25.7348 29 26Z" fill="#800080"/>
            </svg>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h3-nunito-bold lg:text-h2 font-nunito">Body Signal Tracker</div>
            <div class="self-stretch justify-start text-black text-small font-nunito">Log symptoms and the emotional context to see the full picture.</div>
          </div>
        </div>
        
        <!-- Insight Reports -->
        <div class="w-full lg:flex-1 lg:h-auto lg:self-stretch p-4 bg-teal-600/5 rounded-2xl flex flex-col justify-between items-start overflow-hidden">
          <div class="w-8 h-8 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M27.3075 10.2925L20.3075 3.2925C20.2145 3.19967 20.1042 3.12605 19.9828 3.07586C19.8614 3.02568 19.7313 2.9999 19.6 3H7.59998C7.06954 3 6.56083 3.21071 6.18576 3.58579C5.81069 3.96086 5.59998 4.46957 5.59998 5V27C5.59998 27.5304 5.81069 28.0391 6.18576 28.4142C6.56083 28.7893 7.06954 29 7.59998 29H25.6C26.1304 29 26.6391 28.7893 27.0142 28.4142C27.3893 28.0391 27.6 27.5304 27.6 27V11C27.6001 10.8686 27.5743 10.7385 27.5241 10.6172C27.4739 10.4958 27.4003 10.3854 27.3075 10.2925ZM20.6 22H12.6C12.3348 22 12.0804 21.8946 11.8929 21.7071C11.7053 21.5196 11.6 21.2652 11.6 21C11.6 20.7348 11.7053 20.4804 11.8929 20.2929C12.0804 20.1054 12.3348 20 12.6 20H20.6C20.8652 20 21.1195 20.1054 21.3071 20.2929C21.4946 20.4804 21.6 20.7348 21.6 21C21.6 21.2652 21.4946 21.5196 21.3071 21.7071C21.1195 21.8946 20.8652 22 20.6 22ZM20.6 18H12.6C12.3348 18 12.0804 17.8946 11.8929 17.7071C11.7053 17.5196 11.6 17.2652 11.6 17C11.6 16.7348 11.7053 16.4804 11.8929 16.2929C12.0804 16.1054 12.3348 16 12.6 16H20.6C20.8652 16 21.1195 16.1054 21.3071 16.2929C21.4946 16.4804 21.6 16.7348 21.6 17C21.6 17.2652 21.4946 17.5196 21.3071 17.7071C21.1195 17.8946 20.8652 18 20.6 18ZM19.6 11V5.5L25.1 11H19.6Z" fill="#0000FF"/>
            </svg>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h3-nunito-bold lg:text-h2 font-nunito">Insight Reports</div>
            <div class="self-stretch justify-start text-black text-small font-nunito">Get GNM-style analysis tailored to your unique experience and history.</div>
          </div>
        </div>
        
        <!-- Daily Affirmations -->
        <div class="w-full lg:flex-1 lg:h-auto lg:self-stretch p-4 bg-teal-600/5 rounded-2xl flex flex-col justify-between items-start overflow-hidden">
          <div class="w-8 h-8 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M26.9312 15.6826L12.9312 30.6826C12.7829 30.8409 12.5871 30.9467 12.3733 30.984C12.1595 31.0213 11.9395 30.988 11.7463 30.8892C11.5531 30.7904 11.3973 30.6315 11.3023 30.4364C11.2074 30.2413 11.1785 30.0206 11.22 29.8076L13.0525 20.6414L5.84875 17.9364C5.69404 17.8785 5.55607 17.7832 5.44718 17.659C5.33828 17.5348 5.26185 17.3855 5.22471 17.2246C5.18756 17.0637 5.19087 16.896 5.23433 16.7366C5.27778 16.5773 5.36004 16.4312 5.47375 16.3114L19.4737 1.31136C19.6221 1.15303 19.8179 1.04725 20.0317 1.00998C20.2454 0.972711 20.4655 1.00598 20.6587 1.10476C20.8519 1.20354 21.0077 1.36248 21.1027 1.55759C21.1976 1.75269 21.2265 1.97338 21.185 2.18636L19.3475 11.3626L26.5512 14.0639C26.7048 14.1221 26.8417 14.2173 26.9497 14.341C27.0578 14.4647 27.1337 14.6131 27.1707 14.7732C27.2078 14.9332 27.2049 15.0998 27.1623 15.2585C27.1196 15.4171 27.0386 15.5628 26.9262 15.6826H26.9312Z" fill="#FFD700"/>
            </svg>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h3-nunito-bold lg:text-h2 font-nunito text-nowrap">Daily Affirmations</div>
            <div class="self-stretch justify-start text-black text-small font-nunito">Receive affirmations auto-generated based on your symptom patterns to support healing.</div>
          </div>
        </div>
        
        <!-- Healing Journal -->
        <div class="w-full lg:flex-1 lg:h-auto lg:self-stretch p-4 bg-teal-600/5 rounded-2xl flex flex-col justify-between items-start overflow-hidden">
          <div class="w-8 h-8 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M26.8 4H6.80005C6.26962 4 5.76091 4.21071 5.38584 4.58579C5.01076 4.96086 4.80005 5.46957 4.80005 6V26C4.80005 26.5304 5.01076 27.0391 5.38584 27.4142C5.76091 27.7893 6.26962 28 6.80005 28H26.8C27.3305 28 27.8392 27.7893 28.2143 27.4142C28.5893 27.0391 28.8 26.5304 28.8 26V6C28.8 5.46957 28.5893 4.96086 28.2143 4.58579C27.8392 4.21071 27.3305 4 26.8 4ZM10.8 26H6.80005V6H10.8V26ZM22.8 19H14.8C14.5348 19 14.2805 18.8946 14.0929 18.7071C13.9054 18.5196 13.8 18.2652 13.8 18C13.8 17.7348 13.9054 17.4804 14.0929 17.2929C14.2805 17.1054 14.5348 17 14.8 17H22.8C23.0653 17 23.3196 17.1054 23.5072 17.2929C23.6947 17.4804 23.8 17.7348 23.8 18C23.8 18.2652 23.6947 18.5196 23.5072 18.7071C23.3196 18.8946 23.0653 19 22.8 19ZM22.8 15H14.8C14.5348 15 14.2805 14.8946 14.0929 14.7071C13.9054 14.5196 13.8 14.2652 13.8 14C13.8 13.7348 13.9054 13.4804 14.0929 13.2929C14.2805 13.1054 14.5348 13 14.8 13H22.8C23.0653 13 23.3196 13.1054 23.5072 13.2929C23.6947 13.4804 23.8 13.7348 23.8 14C23.8 14.2652 23.6947 14.5196 23.5072 14.7071C23.3196 14.8946 23.0653 15 22.8 15Z" fill="#FFA500"/>
            </svg>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h3-nunito-bold lg:text-h2 font-nunito">Healing Journal</div>
            <div class="self-stretch justify-start text-black text-small font-nunito">A private space to reflect, process emotions, and build resilience. (Coming Soon!)</div>
          </div>
        </div>
        
        <!-- Pattern Log -->
        <div class="w-full lg:flex-1 lg:h-auto lg:self-stretch p-4 bg-teal-600/5 rounded-2xl flex flex-col justify-between items-start overflow-hidden">
          <div class="w-8 h-8 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M30.4 7V15C30.4001 15.1979 30.3416 15.3914 30.2317 15.556C30.1218 15.7206 29.9656 15.8489 29.7828 15.9246C29.5999 16.0004 29.3987 16.0202 29.2047 15.9815C29.0106 15.9429 28.8323 15.8475 28.6925 15.7075L25.4 12.4138L18.1075 19.7075C18.0146 19.8005 17.9043 19.8742 17.7829 19.9246C17.6615 19.9749 17.5314 20.0008 17.4 20.0008C17.2686 20.0008 17.1384 19.9749 17.017 19.9246C16.8956 19.8742 16.7853 19.8005 16.6925 19.7075L12.4 15.4137L4.10747 23.7075C3.91983 23.8951 3.66533 24.0006 3.39997 24.0006C3.13461 24.0006 2.88011 23.8951 2.69247 23.7075C2.50483 23.5199 2.39941 23.2654 2.39941 23C2.39941 22.7346 2.50483 22.4801 2.69247 22.2925L11.6925 13.2925C11.7853 13.1995 11.8956 13.1258 12.017 13.0754C12.1384 13.0251 12.2686 12.9992 12.4 12.9992C12.5314 12.9992 12.6615 13.0251 12.7829 13.0754C12.9043 13.1258 13.0146 13.1995 13.1075 13.2925L17.4 17.5863L23.9862 11L20.6925 7.7075C20.5525 7.56764 20.4571 7.38939 20.4184 7.19531C20.3798 7.00122 20.3996 6.80003 20.4753 6.61721C20.5511 6.43439 20.6794 6.27815 20.844 6.16828C21.0086 6.05841 21.2021 5.99984 21.4 6H29.4C29.6652 6 29.9195 6.10536 30.1071 6.29289C30.2946 6.48043 30.4 6.73478 30.4 7Z" fill="#008000"/>
            </svg>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-black text-h3-nunito-bold lg:text-h2 font-nunito">Pattern Log</div>
            <div class="self-stretch justify-start text-black text-small font-nunito">Monitor your progress and see how your physical symptoms shift as you resolve emotional conflicts. (Coming Soon!)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-4 lg:gap-6">
      <h2 class="self-stretch text-center justify-start text-black font-nunito text-h2 lg:text-h1-md">Choose Your Right Plan</h2>
      
      <!-- Responsive container that switches from vertical (mobile) to horizontal (desktop) -->
      <div class="w-full lg:w-[1247px] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center gap-4 lg:gap-2">
        
        <!-- Free Plan -->
        <div 
          class="w-full lg:flex-1 lg:self-stretch h-96 lg:h-auto p-2 rounded-2xl outline outline-2 outline-offset-[-1px] flex flex-col justify-between items-start overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg {selectedPlan === 'free' ? 'outline-teal-600 bg-teal-50' : 'outline-black/5'}" 
          style="background: {selectedPlan === 'free' ? 'linear-gradient(352deg, #E6FFFA 37.55%, #C3FFF8 130.98%)' : 'linear-gradient(352deg, #FFF 37.55%, #C3FFF8 130.98%)'}"
          on:click={() => selectPlan('free')}>
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch lg:h-64 pb-4 border-b border-black/5 flex flex-col justify-between items-start">
              <div class="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-4">
                <div class="px-2.5 py-1 lg:py-2 bg-teal-600 rounded-lg inline-flex justify-center items-center gap-2.5">
                  <div class="justify-start text-white text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Free Plan</div>
                </div>
                <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">Enjoy 5 free reports to uncover the emotional roots of your symptoms. Perfect for getting started on your wellness journey!</div>
                </div>
              </div>
              <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-start text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10">Free to Try</div>
              </div>
            </div>
          </div>
          <div class="self-stretch pt-2 lg:pt-4 border-t border-black/5 flex flex-col justify-start items-start gap-2.5">
            <button class="self-stretch px-8 py-2 lg:py-3 {selectedPlan === 'free' ? 'bg-teal-600 text-white' : 'bg-white'} rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center gap-2.5">
              <div class="text-center justify-start {selectedPlan === 'free' ? 'text-white' : 'text-teal-600'} text-sm lg:text-base font-medium font-['Montserrat'] leading-snug lg:leading-7">
                {selectedPlan === 'free' ? 'Selected - Free Plan' : 'Get Started for free'}
              </div>
            </button>
          </div>
        </div>

        <!-- Pay-as-you-go Plan -->
        <div 
          class="w-full lg:flex-1 lg:self-stretch h-96 lg:h-auto p-2 rounded-2xl outline outline-2 outline-offset-[-1px] flex flex-col justify-between items-start overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg {selectedPlan === 'payg' ? 'outline-teal-600 bg-teal-50' : 'outline-black/5'}" 
          style="background: {selectedPlan === 'payg' ? 'linear-gradient(352deg, #E6FFFA 37.55%, #C3FFF8 130.98%)' : 'linear-gradient(352deg, #FFF 37.55%, #C3FFF8 130.98%)'}"
          on:click={() => selectPlan('payg')}>
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch pb-4 border-b border-black/5 flex flex-col justify-start items-start gap-4 lg:gap-8">
              <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="px-2.5 py-1 lg:py-2 bg-teal-600 rounded-lg inline-flex justify-center items-center gap-2.5">
                  <div class="justify-start text-white text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Pay-as-you-go</div>
                </div>
                <div class="self-stretch justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">
                  • Flexibility for occasional users.<br/>
                  • Unlock individual insights whenever you need them.<br/>
                  • Perfect for those seeking quick targeted guidance.
                </div>
              </div>
              <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-start">
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10">$0.9</span>
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10 tracking-[2.88px] lg:tracking-[3.60px]">9</span>
                  <span class="text-neutral-500 text-base lg:text-xl font-bold font-['Nunito_Sans'] leading-10">/report</span>
                </div>
              </div>
            </div>
            <div class="self-stretch pb-2 lg:pb-4 flex flex-col justify-start items-start gap-4">
              <div class="self-stretch flex flex-col justify-start items-start gap-2">
                <div class="self-stretch px-2 py-1 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-600/50 inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Get a bundle of 10 reports for just $4.99</div>
                </div>
                <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">Save 50% with this bundle - Ideal for deeper exploration without a subscription.</div>
                </div>
              </div>
              <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-start">
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10">$0.49</span>
                  <span class="text-neutral-500 text-base lg:text-xl font-bold font-['Nunito_Sans'] leading-10">/report</span>
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch pt-2 lg:pt-4 border-t border-black/5 flex flex-col justify-start items-start gap-2.5">
            <button class="self-stretch px-8 py-2 lg:py-3 {selectedPlan === 'payg' ? 'bg-teal-600 text-white' : 'bg-white'} rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center gap-2.5">
              <div class="text-center justify-start {selectedPlan === 'payg' ? 'text-white' : 'text-teal-600'} text-sm lg:text-base font-medium font-['Montserrat'] leading-snug lg:leading-7">
                {selectedPlan === 'payg' ? 'Selected - Pay-as-you-go' : 'Get Started for free'}
              </div>
            </button>
          </div>
        </div>

        <!-- Monthly Subscription Plan -->
        <div 
          class="w-full lg:flex-1 lg:self-stretch h-96 lg:h-auto p-2 rounded-2xl outline outline-2 outline-offset-[-1px] flex flex-col justify-between items-start overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg {selectedPlan === 'monthly' ? 'outline-teal-600 bg-teal-50' : 'outline-black/5'}" 
          style="background: {selectedPlan === 'monthly' ? 'linear-gradient(352deg, #E6FFFA 37.55%, #C3FFF8 130.98%)' : 'linear-gradient(352deg, #FFF 37.55%, #C3FFF8 130.98%)'}"
          on:click={() => selectPlan('monthly')}>
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch lg:h-64 pb-4 border-b border-black/5 flex flex-col justify-between items-start">
              <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="px-2.5 py-1 lg:py-2 bg-teal-600 rounded-lg inline-flex justify-center items-center gap-2.5">
                  <div class="justify-start text-white text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Monthly Subscription</div>
                </div>
                <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">Enjoy up to 50 insights per month - plenty to support your wellness journey. Ideal for those seeking consistent, proactive support.</div>
                </div>
              </div>
              <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-start">
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10">$9.9</span>
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10 tracking-[2.88px] lg:tracking-[3.60px]">9</span>
                  <span class="text-neutral-500 text-base lg:text-xl font-bold font-['Nunito_Sans'] leading-10">/month</span>
                </div>
              </div>
            </div>
            <div class="self-stretch h-28 lg:pb-4 lg:h-auto flex flex-col justify-start items-start gap-4">
              <div class="self-stretch flex flex-col justify-start items-start gap-2">
                <div class="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">
                    • Detailed emotional-physical health reports<br/>
                    • Custom affirmations for personalized healing<br/>
                    • Additional reports are just $0.29 each.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch pt-2 lg:pt-4 border-t border-black/5 flex flex-col justify-start items-start gap-2.5">
            <button class="self-stretch px-8 py-2 lg:py-3 {selectedPlan === 'monthly' ? 'bg-teal-600 text-white' : 'bg-white'} rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center gap-2.5">
              <div class="text-center justify-start {selectedPlan === 'monthly' ? 'text-white' : 'text-teal-600'} text-sm lg:text-base font-medium font-['Montserrat'] leading-snug lg:leading-7">
                {selectedPlan === 'monthly' ? 'Selected - Monthly Plan' : 'Get Started for free'}
              </div>
            </button>
          </div>
        </div>

        <!-- Yearly Subscription Plan -->
        <div 
          class="w-full lg:flex-1 lg:self-stretch h-96 lg:h-auto p-2 rounded-2xl outline outline-2 outline-offset-[-1px] flex flex-col justify-between items-start overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg {selectedPlan === 'yearly' ? 'outline-teal-600 bg-teal-50' : 'outline-black/5'}" 
          style="background: {selectedPlan === 'yearly' ? 'linear-gradient(352deg, #E6FFFA 37.55%, #C3FFF8 130.98%)' : 'linear-gradient(352deg, #FFF 37.55%, #C3FFF8 130.98%)'}"
          on:click={() => selectPlan('yearly')}>
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch lg:h-64 pb-4 border-b border-black/5 flex flex-col justify-between items-start">
              <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="px-2.5 py-1 lg:py-2 bg-teal-600 rounded-lg inline-flex justify-center items-center gap-2.5">
                  <div class="justify-start text-white text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Yearly Subscription</div>
                </div>
                <div class="self-stretch px-2 py-1 lg:px-0 lg:py-0 lg:flex lg:flex-col lg:gap-2 bg-teal-600/5 lg:bg-transparent rounded-2xl lg:rounded-none outline outline-1 lg:outline-none outline-offset-[-1px] outline-teal-600/50 inline-flex lg:block justify-center items-center gap-2.5">
                  <div class="flex-1 lg:w-72 lg:px-2 lg:py-1 lg:bg-teal-600/5 lg:rounded-2xl lg:outline lg:outline-1 lg:outline-offset-[-1px] lg:outline-teal-600/50 lg:inline-flex lg:justify-center lg:items-center lg:gap-2.5 justify-start text-black text-sm lg:text-base font-bold font-['Nunito_Sans'] leading-snug lg:leading-normal">Save over 70% compared to pay-as-you-go.</div>
                </div>
                <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">Perfect for dedicated individuals seeking long-term growth and healing.</div>
                </div>
              </div>
              <div class="self-stretch px-2 inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-start">
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10">$99.9</span>
                  <span class="text-black text-3xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-10 tracking-[2.88px] lg:tracking-[3.60px]">9</span>
                  <span class="text-neutral-500 text-base lg:text-xl font-bold font-['Nunito_Sans'] leading-10">/year</span>
                </div>
              </div>
            </div>
            <div class="self-stretch lg:pb-4 flex flex-col justify-start items-start gap-4">
              <div class="self-stretch flex flex-col justify-start items-start gap-2">
                <div class="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div class="flex-1 justify-start text-black text-xs lg:text-sm font-normal font-['Montserrat'] leading-tight lg:leading-snug">
                    • Unlimited insights annually for comprehensive, year-round support.<br/>
                    • Detailed emotional-physical health reports<br/>
                    • Custom affirmations for personalized healing<br/>
                    • Additional reports are just $0.29 each.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch pt-2 lg:pt-4 border-t border-black/5 flex flex-col justify-start items-start gap-2.5">
            <button class="self-stretch px-8 py-2 lg:py-3 {selectedPlan === 'yearly' ? 'bg-teal-600 text-white' : 'bg-white'} rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center gap-2.5">
              <div class="text-center justify-start {selectedPlan === 'yearly' ? 'text-white' : 'text-teal-600'} text-sm lg:text-base font-medium font-['Montserrat'] leading-snug lg:leading-7">
                {selectedPlan === 'yearly' ? 'Selected - Yearly Plan' : 'Get Started for free'}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="flex flex-col justify-start items-center gap-4 lg:gap-6 mb-[45px] lg:mb-[119px]">
      <div class="self-stretch lg:w-[965px] text-center justify-start text-2xl lg:text-7xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-[78px]">
        Your Symptoms Tell a Story. It's 
        <span class="text-teal-600"> Time </span>
        to 
        <span class="text-teal-600"> Read </span>
        It
      </div>
      
      <div class="self-stretch lg:w-[884px] text-center justify-start text-black text-sm lg:text-xl font-normal font-['Nunito_Sans'] leading-snug lg:leading-7">
        Start understanding the emotional narrative behind your physical experiences. Download NOW and get 5 free health signal reports!
      </div>
      <div class="w-full lg:w-[617px] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center gap-4 lg:gap-5">
        <a href="https://apps.apple.com/fr/app/rootcause-emotion-body-link/id6740285911?l=en-GB" target="_blank" rel="noopener noreferrer" class="w-full lg:flex-1 lg:self-stretch px-4 lg:px-4 py-3 lg:py-2 bg-gradient-to-r from-teal-600 to-teal-900 rounded-full flex justify-center items-center gap-2.5">
          <div class="w-6 h-6 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.524 2.8125C12.732 2.00692 13.202 1.29338 13.86 0.784213C14.518 0.275046 15.3267 -0.000833469 16.1587 1.89152e-06H16.2524C16.4513 1.89152e-06 16.6421 0.0790195 16.7827 0.219672C16.9234 0.360324 17.0024 0.55109 17.0024 0.750002C17.0024 0.948914 16.9234 1.13968 16.7827 1.28033C16.6421 1.42098 16.4513 1.5 16.2524 1.5H16.1587C15.6598 1.49996 15.1751 1.6657 14.7807 1.97116C14.3863 2.27662 14.1046 2.70449 13.9799 3.1875C13.9302 3.3802 13.8059 3.54525 13.6345 3.64634C13.4631 3.74744 13.2585 3.77629 13.0658 3.72656C12.8731 3.67684 12.7081 3.5526 12.607 3.38118C12.5059 3.20976 12.4771 3.0052 12.5268 2.8125H12.524ZM21.4368 15.8991C21.3805 15.7705 21.2896 15.6602 21.1743 15.5803C19.5833 14.4872 19.2524 12.6225 19.2524 11.25C19.2524 9.59344 20.5152 8.15063 21.268 7.43719C21.3421 7.3671 21.4011 7.28265 21.4414 7.189C21.4817 7.09535 21.5025 6.99446 21.5025 6.8925C21.5025 6.79054 21.4817 6.68966 21.4414 6.59601C21.4011 6.50235 21.3421 6.4179 21.268 6.34781C20.0793 5.22563 18.1105 4.5 16.2524 4.5C14.9176 4.50119 13.613 4.89683 12.5024 5.63719C11.2069 4.76847 9.64916 4.37832 8.09711 4.53385C6.54507 4.68938 5.09572 5.38086 3.99834 6.48938C3.34232 7.15912 2.82758 7.95387 2.48471 8.82643C2.14183 9.69899 1.97782 10.6316 2.00241 11.5688C2.03921 13.1506 2.39096 14.7093 3.03709 16.1537C3.68322 17.5981 4.61077 18.8992 5.76553 19.9809C6.46097 20.638 7.38223 21.0028 8.33897 21H16.559C17.0705 21.001 17.5767 20.8969 18.0463 20.6942C18.5159 20.4915 18.9389 20.1945 19.289 19.8216C19.9375 19.1236 20.4985 18.3491 20.9596 17.5153C21.6177 16.3125 21.5333 16.125 21.4368 15.8991Z" fill="white"/>
            </svg>
          </div>
          <div class="text-center justify-start text-white text-base lg:text-xl font-medium font-['Montserrat'] leading-7">Download for iOS</div>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.ayanadevstudio.rootcause" target="_blank" rel="noopener noreferrer" class="w-full lg:flex-1 lg:h-16 px-4 lg:px-4 py-3 lg:py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 flex justify-center items-center gap-2.5">
          <div class="w-6 h-6 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M22.4832 11.2044L6.75003 2.20252C6.52067 2.06877 6.25992 1.99829 5.99441 1.99829C5.7289 1.99829 5.46815 2.06877 5.23878 2.20252C5.01281 2.33209 4.82532 2.51938 4.69552 2.74523C4.56571 2.97107 4.49825 3.22735 4.50003 3.48783V21.5122C4.49929 21.7724 4.56764 22.0282 4.69809 22.2533C4.82854 22.4785 5.01642 22.665 5.24253 22.7938C5.4719 22.9275 5.73265 22.998 5.99816 22.998C6.26367 22.998 6.52442 22.9275 6.75378 22.7938L22.4832 13.7938C22.7155 13.6664 22.9093 13.479 23.0443 13.251C23.1792 13.0231 23.2505 12.7631 23.2505 12.4981C23.2505 12.2332 23.1792 11.9732 23.0443 11.7452C22.9093 11.5173 22.7155 11.3299 22.4832 11.2025V11.2044ZM15 13.5603L16.7738 15.3341L8.47691 20.0835L15 13.5603ZM8.47503 4.91564L16.7747 9.66595L15 11.4397L8.47503 4.91564ZM18.1228 14.5625L16.0603 12.5L18.1228 10.4375L21.7257 12.5L18.1228 14.5625Z" fill="url(#paint0_linear_6945_72430)"/>
              <defs>
                <linearGradient id="paint0_linear_6945_72430" x1="4.5" y1="12.4981" x2="23.2505" y2="12.4981" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2B9C8E"/>
                  <stop offset="1" stop-color="#264653"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="text-center justify-start text-teal-600 text-base lg:text-xl font-medium font-['Montserrat'] leading-7">Download for Android</div>
        </a>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <Footer />
</div>

<style>
	.rectangle-120 {
		width: 973px;
		height: 563px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		filter: blur(2px);
	}

	.frame-1171276496 {
		width: 940px;
		height: 533px;
		left: 17px;
		top: 15px;
		position: absolute;
		border-radius: 16px;
	}

	.frame-1171276495 {
		width: 973px;
		height: 563px;
		left: 59px;
		top: 60px;
		position: absolute;
		
		overflow: hidden;
		border-radius: 26px;
		outline: 1px white solid;
		outline-offset: -1px;
	}

	.frame-1171276493 {
		width: 1090px;
		height: 385px;
		position: relative;
		border-radius: 24px;
		background-image: url('/hero-image-bg.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		margin-bottom: 250px; /* Space for the overflowing video */
	}

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

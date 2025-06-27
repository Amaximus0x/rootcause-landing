<script>
  import Header from '$lib/Header.svelte';
</script>

<!-- RootCause Landing Page -->
<div class="w-full h-auto relative bg-pure-white overflow-hidden">
  <!-- Hero Section -->
  <div class="w-full h-auto min-h-[800px] lg:h-[1431px] relative rounded-bl-[32px] rounded-br-[32px] lg:rounded-bl-[64px] lg:rounded-br-[64px] overflow-hidden">
    <!-- Decorative Grid Background -->
    <div class="w-full h-[1431px] absolute opacity-20">
      <div class="h-[1431px] absolute -left-[73px] top-0 inline-flex justify-start items-center gap-lg-24">
        {#each Array(22) as _, i}
          <div class="w-[1431px] self-stretch origin-top-left rotate-90 border-r border-teal-dark/20"></div>
        {/each}
      </div>
      <div class="absolute -left-[283px] top-0 origin-top-left -rotate-90 inline-flex justify-start items-center gap-lg-24">
        {#each Array(15) as _, i}
          <div class="w-0 h-[2311px] origin-top-left rotate-90 border-r border-teal-dark/20"></div>
        {/each}
      </div>
    </div>
    
    <!-- Gradient Overlay -->
    <div class="w-[1516px] h-[762px] absolute -left-[73px] top-[950px] bg-gradient-to-b from-white/0 to-white"></div>
    
    <!-- Hero Content -->
    <div class="w-full absolute left-1/2 transform -translate-x-1/2 top-[120px] sm:top-[160px] lg:top-[217px] text-center px-4 sm:px-8 lg:px-16">
      <div class="text-center lg:w-[1036px] lg:mx-auto">
        <span class="text-black text-2xl lg:text-7xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-[78px]">Your Body Speaks RootCause </span>
        <span class="text-teal-600 text-2xl lg:text-7xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-[78px]">Helps</span>
        <span class="text-black text-2xl lg:text-7xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-[78px]"> You Listen</span>
      </div>
    </div>
    
    <div class="w-full absolute left-1/2 transform -translate-x-1/2 top-[280px] sm:top-[320px] lg:top-[398px] text-center px-4 sm:px-8 lg:px-16">
      <p class="text-black text-sm lg:text-xl font-normal font-['Nunito_Sans'] leading-snug lg:leading-7 lg:w-[884px] mx-auto">
        Go beyond just managing your symptoms and start understanding them. RootCause gives you the tools to map the powerful connection between emotional trauma and your physical well-being.
      </p>
    </div>
    
    <!-- CTA Buttons -->
    <div class="w-full absolute left-1/2 transform -translate-x-1/2 top-[420px] sm:top-[460px] lg:top-[516px] flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-8 lg:px-16">
      <button class="self-stretch p-4 lg:px-4 lg:py-2 bg-gradient-to-r from-teal-600 to-teal-950 rounded-full inline-flex justify-center items-center gap-2.5">
        <div class="w-6 h-6 relative overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.524 2.8125C12.732 2.00692 13.202 1.29338 13.86 0.784213C14.518 0.275046 15.3267 -0.000833469 16.1587 1.89152e-06H16.2524C16.4513 1.89152e-06 16.6421 0.0790195 16.7827 0.219672C16.9234 0.360324 17.0024 0.55109 17.0024 0.750002C17.0024 0.948914 16.9234 1.13968 16.7827 1.28033C16.6421 1.42098 16.4513 1.5 16.2524 1.5H16.1587C15.6598 1.49996 15.1751 1.6657 14.7807 1.97116C14.3863 2.27662 14.1046 2.70449 13.9799 3.1875C13.9302 3.3802 13.8059 3.54525 13.6345 3.64634C13.4631 3.74744 13.2585 3.77629 13.0658 3.72656C12.8731 3.67684 12.7081 3.5526 12.607 3.38118C12.5059 3.20976 12.4771 3.0052 12.5268 2.8125H12.524ZM21.4368 15.8991C21.3805 15.7705 21.2896 15.6602 21.1743 15.5803C19.5833 14.4872 19.2524 12.6225 19.2524 11.25C19.2524 9.59344 20.5152 8.15063 21.268 7.43719C21.3421 7.3671 21.4011 7.28265 21.4414 7.189C21.4817 7.09535 21.5025 6.99446 21.5025 6.8925C21.5025 6.79054 21.4817 6.68966 21.4414 6.59601C21.4011 6.50235 21.3421 6.4179 21.268 6.34781C20.0793 5.22563 18.1105 4.5 16.2524 4.5C14.9176 4.50119 13.613 4.89683 12.5024 5.63719C11.2069 4.76847 9.64916 4.37832 8.09711 4.53385C6.54507 4.68938 5.09572 5.38086 3.99834 6.48938C3.34232 7.15912 2.82758 7.95387 2.48471 8.82643C2.14183 9.69899 1.97782 10.6316 2.00241 11.5688C2.03921 13.1506 2.39096 14.7093 3.03709 16.1537C3.68322 17.5981 4.61077 18.8992 5.76553 19.9809C6.46097 20.638 7.38223 21.0028 8.33897 21H16.559C17.0705 21.001 17.5767 20.8969 18.0463 20.6942C18.5159 20.4915 18.9389 20.1945 19.289 19.8216C19.9375 19.1236 20.4985 18.3491 20.9596 17.5153C21.6177 16.3125 21.5333 16.125 21.4368 15.8991Z" fill="white"/>
          </svg>
        </div>
        <div class="text-center justify-start text-white text-base lg:text-xl font-medium font-['Montserrat'] leading-7">Download for iOS</div>
      </button>
      <button class="self-stretch p-4 lg:h-16 lg:px-4 lg:py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center gap-2.5">
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
      </button>
    </div>
    
    <!-- Free Reports Badge -->
    <div class="px-3 lg:px-4 py-2 lg:py-2.5 absolute left-1/2 transform -translate-x-1/2 top-[580px] sm:top-[620px] lg:top-[628px] bg-teal-600/5 rounded-full outline outline-1 outline-offset-[-1px] outline-black/5 backdrop-blur-[2px] inline-flex justify-center items-center gap-2.5 max-w-[90%]">
      <img class="w-8 h-8" src="/RootCause.png" alt="RootCause icon" />
      <div class="text-center justify-start text-black text-sm lg:text-base font-normal font-['Nunito_Sans'] leading-7">get 5 free health signal reports!</div>
    </div>
    
    <!-- Hero Image -->
    <div class="w-[1090px] h-96 absolute left-[175px] top-[718px] rounded-3xl">
      <div class="w-[973px] h-[563px] absolute left-[59px] top-[60px] rounded-3xl shadow-[0px_25px_68px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-pure-white overflow-hidden">
        <div class="w-[973px] h-[563px] absolute left-0 top-0 bg-pure-white/20 rounded-2xl blur-[2px]"></div>
        <img class="w-[940px] h-[533px] absolute left-[17px] top-[15px] rounded-2xl" src="https://placehold.co/940x533" alt="RootCause app preview" />
      </div>
    </div>
  </div>

  <!-- Main Content Sections -->
  <div class="w-full mt-8 sm:mt-12 lg:mt-[56px] flex flex-col justify-center items-center gap-16 sm:gap-20 lg:gap-xl-112 px-4 sm:px-8 lg:px-16 xl:px-24">
    
    <!-- Testimonials Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8 lg:gap-lg-32">
      <div class="w-full flex flex-col justify-start items-center gap-4 lg:gap-sm-8">
        <div class="self-stretch text-center justify-start text-black text-2xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-10">Why Holistic Experts Are Talking About RootCause</div>
        <div class="self-stretch lg:w-[611px] text-center justify-start text-black text-sm lg:text-base font-normal font-['Nunito_Sans'] leading-snug mx-auto">Discover the app featured in wellness communities for its revolutionary, compassionate, and GNM-grounded approach to mind-body health.</div>
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
      <div class="self-stretch text-center justify-start text-black text-2xl lg:text-4xl font-bold font-['Nunito_Sans'] leading-loose lg:leading-10">Why RootCause?</div>
      <div class="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-lg-16">
        <div class="w-96 lg:self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-10 lg:w-12 h-10 lg:h-12" src="https://placehold.co/42x42" alt="Feature icon" />
            </div>
            <div class="flex-1 justify-start text-black text-xl lg:text-2xl font-bold font-['Nunito_Sans'] leading-7 lg:leading-loose">My Tests Are Normal, But My Pain is REAL</div>
          </div>
          <div class="self-stretch justify-start text-black text-sm font-medium font-['Nunito_Sans'] leading-snug">
            You've spent $400+ per specialist visit only to hear "everything looks fine." But your chronic fatigue, migraines, and flare-ups don't feel fine. You're one of 30 million Americans dismissed by a system that's missing the bigger picture. Your symptoms are real, but no one seems equipped to help you understand why.
          </div>
        </div>
        
        <div class="w-96 lg:self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-10 lg:w-12 h-10 lg:h-12" src="https://placehold.co/42x42" alt="Feature icon" />
            </div>
            <div class="flex-1 justify-start text-black text-xl lg:text-2xl font-bold font-['Nunito_Sans'] leading-7 lg:leading-loose">My Emotions and Symptoms Are Connected</div>
          </div>
          <div class="self-stretch justify-start text-black text-sm font-medium font-['Nunito_Sans'] leading-snug">
            Stressful week = migraines. Anxiety = stomach knots. You see the pattern, but doctors don't. 60-80% of doctor visits are stress-related, yet medicine treats your body like separate, unconnected parts. You're left knowing there's a deeper story, but with no way to decode it.
          </div>
        </div>
        
        <div class="w-96 lg:self-stretch p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch inline-flex justify-start items-start gap-2.5">
            <div class="p-1.5 bg-teal-600/5 rounded-full flex justify-start items-center gap-2.5">
              <img class="w-10 lg:w-12 h-10 lg:h-12" src="https://placehold.co/42x42" alt="Feature icon" />
            </div>
            <div class="flex-1 justify-start text-black text-xl lg:text-2xl font-bold font-['Nunito_Sans'] leading-7 lg:leading-loose">Understanding Your Body's Language</div>
          </div>
          <div class="self-stretch justify-start text-black text-sm font-medium font-['Nunito_Sans'] leading-snug">
            Your body is constantly communicating with you through symptoms. RootCause helps you decode these messages, understand the emotional roots, and work with your body's natural healing processes rather than against them.
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-lg-32">
      <div class="self-stretch flex flex-col justify-start items-center gap-lg-16">
        <h2 class="font-nunito text-h1-md text-pure-black text-center">How It Works</h2>
        <p class="w-[611px] font-nunito text-body-medium text-pure-black text-center">From Symptom to Insight in Minutes</p>
      </div>
      
      <div class="self-stretch p-lg-32 bg-teal-light rounded-3xl flex flex-col justify-center items-start gap-lg-16">
        {#each [
          {
            title: "Pinpoint Your Body's Signals",
            description: "Log recurring physical symptoms like fatigue, skin issues, gut discomfort, or chronic tension. Be as specific as you like."
          },
          {
            title: "Receive GNM-Inspired Insights", 
            description: "Our algorithm generates a report connecting your symptoms to potential emotional or biological conflicts based on German New Medicine frameworks."
          },
          {
            title: "Identify Your Triggers",
            description: "The app helps you recognize patterns between your symptoms and specific events, environments, or stressors in your life."
          },
          {
            title: "Heal from Within",
            description: "Use daily affirmations and guided journaling prompts (Coming Soon!) designed to help you process conflicts, reduce your emotional load, and support your body's innate healing capacity."
          },
          {
            title: "Track Your Healing Progress",
            description: "With Pattern Logging, monitor how your symptoms evolve over time as you address emotional conflicts. See recurring cycles, improvements, and get empowered by witnessing your body's natural healing journey."
          }
        ] as step}
          <div class="self-stretch bg-teal-light rounded-2xl inline-flex justify-center items-center gap-lg-16 overflow-hidden">
            <div class="w-lg-16 self-stretch bg-teal"></div>
            <div class="flex-1 py-lg-16 inline-flex flex-col justify-start items-start gap-sm-8">
              <h3 class="font-nunito text-h2 text-pure-black">{step.title}</h3>
              <p class="font-nunito text-body-medium text-pure-black">{step.description}</p>
            </div>
            <div class="w-lg-16 self-stretch bg-teal"></div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Who Is RootCause For Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-lg-32">
      <div class="self-stretch flex flex-col justify-start items-center gap-lg-16">
        <h2 class="font-nunito text-h1-md text-pure-black text-center">Who Is RootCause For?</h2>
        <p class="w-[611px] font-nunito text-body-medium text-pure-black text-center">If This Sounds Like You, You're in the Right Place.</p>
      </div>
      
      <div class="inline-flex justify-start items-start gap-lg-32">
        <div class="w-[601px] p-lg-32 bg-teal-light rounded-3xl inline-flex flex-col justify-center items-start gap-lg-16">
          {#each [
            {
              title: "The Medical Mystery",
              description: "You've been to every specialist and tried every test, but you're still searching for answers. You're ready for a new, empowering perspective."
            },
            {
              title: "The Conscious Seeker",
              description: "You already know your mind and body are profoundly connected. You practice yoga, meditation, or holistic health and need a tool to deepen that connection."
            },
            {
              title: "The GNM Explorer",
              description: "You're familiar with German New Medicine and want a structured, self-paced way to apply its principles to your own life for reflection and learning."
            }
          ] as persona}
            <div class="self-stretch p-lg-16 bg-pure-white rounded-2xl flex flex-col justify-center items-center gap-sm-8 overflow-hidden">
              <h3 class="font-nunito text-h2 text-pure-black">{persona.title}</h3>
              <p class="font-nunito text-body-medium text-pure-black">{persona.description}</p>
            </div>
          {/each}
        </div>
        
        <div class="w-[601px] self-stretch relative bg-teal-light rounded-3xl overflow-hidden">
          <div class="w-80 h-96 absolute left-[39.50px] top-[126.41px] origin-top-left rotate-[-14.76deg] bg-teal-vibrant-light rounded-3xl"></div>
          <div class="w-80 h-96 absolute left-[230.21px] top-[39.01px] origin-top-left rotate-[14.76deg] bg-teal-vibrant-light rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"></div>
          <div class="w-80 h-96 absolute left-[130.50px] top-[86px] rounded-3xl overflow-hidden">
            <img class="w-80 h-96 absolute left-0 top-[90px] rounded-3xl" src="https://placehold.co/343x385" alt="RootCause app interface" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-lg-16">
      <h2 class="font-nunito text-h1-md text-pure-black text-center">Feature Highlights</h2>
      <div class="self-stretch h-64 inline-flex justify-start items-center gap-lg-16">
        {#each [
          {
            icon: "bg-vibrant-pink-dark",
            title: "Body Signal Tracker",
            description: "Log symptoms and the emotional context to see the full picture."
          },
          {
            icon: "bg-blue-vibrant-dark",
            title: "Insight Reports", 
            description: "Get GNM-style analysis tailored to your unique experience and history."
          },
          {
            icon: "bg-vibrant-yellow-light",
            title: "Daily Affirmations",
            description: "Receive affirmations auto-generated based on your symptom patterns to support healing."
          },
          {
            icon: "bg-vibrant-orange",
            title: "Healing Journal",
            description: "A private space to reflect, process emotions, and build resilience. (Coming Soon!)"
          },
          {
            icon: "bg-vibrant-green",
            title: "Pattern Log",
            description: "Monitor your progress and see how your physical symptoms shift as you resolve emotional conflicts. (Coming Soon!)"
          }
        ] as feature}
          <div class="flex-1 self-stretch p-lg-16 bg-teal-light rounded-2xl inline-flex flex-col justify-between items-start overflow-hidden">
            <div class="w-lg-32 h-lg-32 relative overflow-hidden">
              <div class="w-sm-6 h-sm-6 left-[3px] top-[4px] absolute {feature.icon}"></div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-sm-8">
              <h3 class="font-nunito text-h2 text-pure-black">{feature.title}</h3>
              <p class="font-nunito text-small text-pure-black">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-sm-6">
      <h2 class="font-nunito text-h1-md text-pure-black text-center">Choose Your Right Plan</h2>
      <div class="w-[1247px] inline-flex justify-start items-center gap-sm-8">
        {#each [
          {
            name: "Free Plan",
            price: "Free to Try",
            description: "Enjoy 5 free reports to uncover the emotional roots of your symptoms. Perfect for getting started on your wellness journey!",
            features: [],
            highlight: false
          },
          {
            name: "Pay-as-you-go",
            price: "$0.99",
            period: "/report",
            description: "Flexibility for occasional users. Unlock individual insights whenever you need them. Perfect for those seeking quick targeted guidance.",
            bundle: "Get a bundle of 10 reports for just $4.99 - Save 50% with this bundle",
            bundlePrice: "$0.49/report",
            features: [],
            highlight: false
          },
          {
            name: "Monthly Subscription", 
            price: "$9.99",
            period: "/month",
            description: "Enjoy up to 50 insights per month - plenty to support your wellness journey. Ideal for those seeking consistent, proactive support.",
            features: [
              "Detailed emotional-physical health reports",
              "Custom affirmations for personalized healing", 
              "Additional reports are just $0.29 each."
            ],
            highlight: true
          },
          {
            name: "Yearly Subscription",
            price: "$99.99",
            period: "/year", 
            description: "Perfect for dedicated individuals seeking long-term growth and healing.",
            badge: "Save over 70% compared to pay-as-you-go",
            features: [
              "Unlimited insights annually for comprehensive, year-round support",
              "Detailed emotional-physical health reports",
              "Custom affirmations for personalized healing",
              "Additional reports are just $0.29 each."
            ],
            highlight: false
          }
        ] as plan}
          <div class="flex-1 self-stretch p-sm-8 bg-gradient-to-l from-pure-white to-teal-light rounded-2xl {plan.highlight ? 'outline outline-1 outline-offset-[-1px] outline-teal' : 'outline outline-1 outline-offset-[-1px] outline-black/5'} inline-flex flex-col justify-between items-start overflow-hidden">
            <div class="self-stretch flex flex-col justify-start items-start gap-lg-16">
              <div class="self-stretch h-64 pb-lg-16 border-b border-black/5 flex flex-col justify-between items-start">
                <div class="self-stretch flex flex-col justify-start items-start gap-lg-16">
                  <div class="px-md-10 py-sm-8 bg-teal rounded-lg inline-flex justify-center items-center gap-md-10">
                    <span class="font-nunito text-body-bold text-pure-white">{plan.name}</span>
                  </div>
                  {#if plan.badge}
                    <div class="w-72 px-sm-8 py-xs-4 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal/50 inline-flex justify-center items-center gap-md-10">
                      <span class="font-nunito text-body-bold text-pure-black">{plan.badge}</span>
                    </div>
                  {/if}
                  <div class="self-stretch px-sm-8 inline-flex justify-center items-center gap-md-10">
                    <p class="flex-1 font-montserrat text-small-montserrat text-pure-black">{plan.description}</p>
                  </div>
                </div>
                <div class="self-stretch px-sm-8 inline-flex justify-center items-center gap-md-10">
                  <div class="flex-1 font-nunito text-h1-md text-pure-black">
                    {plan.price}
                    {#if plan.period}
                      <span class="text-neutral-500 text-xl font-bold">{plan.period}</span>
                    {/if}
                  </div>
                </div>
              </div>
              {#if plan.bundle}
                <div class="self-stretch pb-lg-16 flex flex-col justify-start items-start gap-lg-16">
                  <div class="self-stretch flex flex-col justify-start items-start gap-sm-8">
                    <div class="self-stretch px-sm-8 py-xs-4 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal/50 inline-flex justify-center items-center gap-md-10">
                      <span class="font-nunito text-body-bold text-pure-black">{plan.bundle}</span>
                    </div>
                    <div class="self-stretch px-sm-8 inline-flex justify-center items-center gap-md-10">
                      <span class="font-nunito text-h1-md text-pure-black">{plan.bundlePrice}</span>
                    </div>
                  </div>
                </div>
              {/if}
              {#if plan.features && plan.features.length > 0}
                <div class="self-stretch pb-lg-16 flex flex-col justify-start items-start gap-lg-16">
                  <div class="self-stretch inline-flex justify-center items-center gap-md-10">
                    <div class="flex-1 font-montserrat text-small-montserrat text-pure-black">
                      {#each plan.features as feature}
                        {feature}<br />
                      {/each}
                    </div>
                  </div>
                </div>
              {/if}
            </div>
            <div class="self-stretch pt-lg-16 border-t border-black/5 flex flex-col justify-start items-start gap-md-10">
              <button class="self-stretch px-lg-32 py-md-12 bg-pure-white rounded-full outline outline-1 outline-offset-[-1px] outline-teal inline-flex justify-center items-center gap-md-10">
                <span class="font-montserrat text-body-montserrat text-teal">Get Started for free</span>
              </button>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="flex flex-col justify-start items-center gap-xl-48">
      <div class="flex flex-col justify-start items-center gap-sm-6">
        <h2 class="w-[965px] font-nunito text-h1-xl text-pure-black text-center">
          Your Symptoms Tell a Story. It's 
          <span class="text-teal">Time</span>
          to 
          <span class="text-teal">Read</span>
          It
        </h2>
        <p class="w-[884px] font-nunito text-h3-nunito text-pure-black text-center">
          Start understanding the emotional narrative behind your physical experiences. Download NOW and get 5 free health signal reports!
        </p>
      </div>
      <div class="w-[617px] h-md-16 inline-flex justify-start items-center gap-lg-20">
        <button class="flex-1 self-stretch px-lg-16 py-sm-8 bg-gradient-to-r from-teal to-teal-dark rounded-full flex justify-center items-center gap-md-10">
          <div class="w-sm-6 h-sm-6 relative overflow-hidden">
            <div class="w-5 h-5 left-[1.50px] top-0 absolute bg-pure-white"></div>
          </div>
          <span class="font-montserrat text-body-montserrat text-pure-white">Download for iOS</span>
        </button>
        <button class="flex-1 h-md-16 px-lg-16 py-sm-8 rounded-full outline outline-1 outline-offset-[-1px] outline-teal flex justify-center items-center gap-md-10">
          <div class="w-sm-6 h-sm-6 relative overflow-hidden">
            <div class="w-5 h-5 left-[4.50px] top-[1.50px] absolute bg-gradient-to-r from-teal to-blue-dark"></div>
          </div>
          <span class="font-montserrat text-body-montserrat text-teal">Download for Android</span>
        </button>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer class="w-full py-sm-6 border-t border-black/5 inline-flex flex-col justify-start items-center gap-lg-32">
    <div class="self-stretch flex flex-col justify-start items-center gap-lg-32">
      <img class="w-64 h-20" src="https://placehold.co/251x85" alt="RootCause logo" />
      <nav class="self-stretch inline-flex justify-center items-center gap-md-16">
        <a href="#contact" class="font-nunito text-body-medium text-pure-black">Contact</a>
        <a href="#affiliate" class="font-nunito text-body-medium text-pure-black">Affiliate</a>
        <a href="#privacy" class="font-nunito text-body-medium text-pure-black">Privacy Policy</a>
        <a href="#terms" class="font-nunito text-body-medium text-pure-black">Terms and Conditions</a>
        <a href="#newsletter" class="font-nunito text-body-medium text-pure-black">News Letter</a>
      </nav>
    </div>
    <div class="inline-flex justify-start items-center gap-md-12">
      {#each Array(4) as _, i}
        <div class="w-sm-6 h-sm-6 relative overflow-hidden">
          <div class="w-5 h-5 left-[2.25px] top-[2.25px] absolute bg-teal"></div>
        </div>
      {/each}
    </div>
    <div class="self-stretch font-nunito text-body-medium text-pure-black text-center">© 2025 rootcause</div>
  </footer>

  <!-- Navigation Header -->
  <div class="absolute left-0 top-4 sm:top-6 lg:top-[77px] z-50 w-full px-4 sm:px-8 lg:px-16">
    <Header />
  </div>
</div>

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
        <h2 class="font-nunito text-2xl sm:text-3xl lg:text-4xl xl:text-h1-md text-pure-black text-center max-w-5xl">Why Holistic Experts Are Talking About RootCause</h2>
        <p class="w-full font-nunito text-sm sm:text-base lg:text-lg xl:text-body-medium text-pure-black text-center max-w-3xl">
          Discover the app featured in wellness communities for its revolutionary, compassionate, and GNM-grounded approach to mind-body health.
        </p>
      </div>
      
      <div class="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-lg-16">
        <div class="p-4 lg:p-lg-16 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-lg-16 overflow-hidden">
          <div class="p-2 lg:p-xs-4 bg-pure-white rounded-full flex justify-start items-center">
            <div class="w-5 h-5 lg:w-sm-6 lg:h-sm-6 relative overflow-hidden">
              <div class="w-4 h-4 lg:w-5 lg:h-5 left-[2px] top-[2px] lg:left-[1.51px] lg:top-[1.50px] absolute bg-vibrant-yellow-light"></div>
            </div>
          </div>
          <div class="font-nunito text-sm sm:text-base lg:text-body-lg text-pure-black text-center sm:text-left">4.8★ rating from the medically unheard</div>
        </div>
        
        <div class="p-4 lg:p-lg-16 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-lg-16 overflow-hidden">
          <div class="p-2 lg:p-xs-4 bg-pure-white rounded-full flex justify-start items-center">
            <div class="w-5 h-5 lg:w-sm-6 lg:h-sm-6 relative overflow-hidden">
              <div class="w-4 h-4 lg:w-5 lg:h-5 left-[2px] top-[2px] lg:left-[2.62px] lg:top-[1.88px] absolute bg-vibrant-green"></div>
            </div>
          </div>
          <div class="font-nunito text-sm sm:text-base lg:text-body-lg text-pure-black text-center sm:text-left">Recommended by holistic health practitioners</div>
        </div>
        
        <div class="p-4 lg:p-lg-16 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-lg-16 overflow-hidden">
          <div class="p-2 lg:p-xs-4 bg-pure-white rounded-full flex justify-start items-center">
            <div class="w-5 h-5 lg:w-sm-6 lg:h-sm-6 relative overflow-hidden">
              <div class="w-4 h-4 lg:w-5 lg:h-5 left-[2px] top-[2px] lg:left-[1.13px] lg:top-[2.62px] absolute bg-vibrant-purple"></div>
            </div>
          </div>
          <div class="font-nunito text-sm sm:text-base lg:text-body-lg text-pure-black text-center sm:text-left">Rooted in German New Medicine wisdom</div>
        </div>
        
        <div class="p-4 lg:p-lg-16 bg-teal-light rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-lg-16 overflow-hidden">
          <div class="p-2 lg:p-xs-4 bg-pure-white rounded-full flex justify-start items-center">
            <div class="w-5 h-5 lg:w-sm-6 lg:h-sm-6 relative overflow-hidden">
              <div class="w-4 h-4 lg:w-5 lg:h-5 left-[2px] top-[2px] lg:left-[2.25px] lg:top-[2.25px] absolute bg-blue-vibrant"></div>
            </div>
          </div>
          <div class="font-nunito text-sm sm:text-base lg:text-body-lg text-pure-black text-center sm:text-left">Downloaded in 25 Countries</div>
        </div>
      </div>
    </section>

    <!-- Why RootCause Section -->
    <section class="self-stretch flex flex-col justify-start items-center gap-8 lg:gap-lg-16">
      <h2 class="font-nunito text-2xl sm:text-3xl lg:text-h1-md text-pure-black text-center">Why RootCause?</h2>
      <div class="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-lg-16">
        <div class="p-6 lg:p-lg-16 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col justify-start items-start gap-4 lg:gap-md-10 overflow-hidden">
          <div class="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4 lg:gap-md-10">
            <div class="p-3 lg:p-md-12 bg-teal-light rounded-full flex justify-start items-center">
              <img class="w-8 h-8 lg:w-xl-48 lg:h-xl-48" src="https://placehold.co/50x50" alt="Feature icon" />
            </div>
            <h3 class="flex-1 font-nunito text-lg sm:text-xl lg:text-h2 text-pure-black">My Tests Are Normal, But My Pain is REAL</h3>
          </div>
          <p class="font-nunito text-sm lg:text-small-medium text-pure-black">
            You've spent $400+ per specialist visit only to hear "everything looks fine." But your chronic fatigue, migraines, and flare-ups don't feel fine. You're one of 30 million Americans dismissed by a system that's missing the bigger picture. Your symptoms are real, but no one seems equipped to help you understand why.
          </p>
        </div>
        
        <div class="p-6 lg:p-lg-16 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col justify-start items-start gap-4 lg:gap-md-10 overflow-hidden">
          <div class="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4 lg:gap-md-10">
            <div class="p-3 lg:p-md-12 bg-teal-light rounded-full flex justify-start items-center">
              <img class="w-8 h-8 lg:w-xl-48 lg:h-xl-48" src="https://placehold.co/50x50" alt="Feature icon" />
            </div>
            <h3 class="flex-1 font-nunito text-lg sm:text-xl lg:text-h2 text-pure-black">My Emotions and Symptoms Are Connected</h3>
          </div>
          <p class="font-nunito text-sm lg:text-small-medium text-pure-black">
            Stressful week = migraines. Anxiety = stomach knots. You see the pattern, but doctors don't. 60-80% of doctor visits are stress-related, yet medicine treats your body like separate, unconnected parts. You're left knowing there's a deeper story, but with no way to decode it.
          </p>
        </div>
        
        <div class="p-6 lg:p-lg-16 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 flex flex-col justify-start items-start gap-4 lg:gap-md-10 overflow-hidden">
          <div class="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4 lg:gap-md-10">
            <div class="p-3 lg:p-md-12 bg-teal-light rounded-full flex justify-start items-center">
              <img class="w-8 h-8 lg:w-xl-48 lg:h-xl-48" src="https://placehold.co/50x50" alt="Feature icon" />
            </div>
            <h3 class="flex-1 font-nunito text-lg sm:text-xl lg:text-h2 text-pure-black">Understanding Your Body's Language</h3>
          </div>
          <p class="font-nunito text-sm lg:text-small-medium text-pure-black">
            Your body is constantly communicating with you through symptoms. RootCause helps you decode these messages, understand the emotional roots, and work with your body's natural healing processes rather than against them.
          </p>
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

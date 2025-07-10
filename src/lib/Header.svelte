<script>
  import { page } from '$app/stores';
  
  $: isAffiliatePage = $page.url.pathname.startsWith('/affiliate');
  $: isBlogPage = $page.url.pathname.startsWith('/blog');
</script>

<!-- Header Component -->
<div class="w-full p-3 lg:px-6 lg:py-4 bg-white/10 rounded-full lg:rounded-[3000000px] backdrop-blur-[2px] flex justify-between items-center border border-black/10">
  <!-- Logo -->
  <a href="/">
    <img class="w-32 h-10 sm:w-48 sm:h-14 lg:w-64 lg:h-20" src="/rootcause-side.png" alt="RootCause logo" />
  </a>
  
  <!-- Navigation -->
  <div class="flex items-center gap-2 sm:gap-4">
    <!-- Affiliate Button -->
    <a href="/affiliate" class="h-10 sm:h-12 lg:h-16 px-3 sm:px-6 lg:px-8 py-1 sm:py-2 bg-white rounded-lg flex justify-center items-center transition-all duration-300 relative {isAffiliatePage ? 'border-b border-teal' : ''}">
      <div class="text-center font-['Montserrat'] text-sm sm:text-base lg:text-xl font-medium leading-7" style="background: linear-gradient(90deg, #2B9C8E 0%, #264653 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Affiliates</div>
    </a>
    
    <!-- Visit Blog Button -->
    <a href="/blog" class="h-10 sm:h-12 lg:h-16 px-3 sm:px-6 lg:px-8 py-1 sm:py-2 rounded-full flex justify-center items-center transition-all duration-300 {isBlogPage ? '' : 'bg-white'}" style="background: {isBlogPage ? '#2B9C8E0F' : 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #2B9C8E 0%, #264653 100%) border-box'}; border: 1px solid {isBlogPage ? '#2B9C8E' : 'transparent'};">
      <div class="text-center font-['Montserrat'] text-sm sm:text-base lg:text-xl font-medium leading-7" style="background: linear-gradient(90deg, #2B9C8E 0%, #264653 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Visit Blog</div>
    </a>
  </div>
</div> 
<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			const isAndroid = /Android/i.test(navigator.userAgent);
			const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

			function openApp() {
				if (isAndroid) {
					window.location.href = "intent://navigation/dashboard#Intent;scheme=rootcause;package=com.ayanadevstudio.rootcause;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.ayanadevstudio.rootcause;end";
				} else if (isIOS) {
					window.location.href = "rootcause://navigation/dashboard";
					setTimeout(() => {
						window.location.href = "https://apps.apple.com/app/id123456789";
					}, 2500);
				} else {
					window.location.href = "https://play.google.com/store/apps/details?id=com.ayanadevstudio.rootcause";
				}
			}

			setTimeout(openApp, 1000);
		}
	});
</script>

<svelte:head>
	<title>Opening RootCause Dashboard...</title>
	<meta name="description" content="Redirecting to RootCause mobile app dashboard" />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
	<div class="max-w-sm w-full bg-white rounded-lg shadow-lg p-8">
		<h3 class="text-xl font-semibold text-center mb-4">Opening RootCause Dashboard...</h3>
		
		<div class="flex justify-center mb-4">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
		</div>
		
		<p class="text-sm text-gray-600 text-center mb-6">This should happen automatically</p>
		
		<div class="space-y-2">
			<p class="text-center text-gray-700 font-medium">If the app doesn't open:</p>
			
			<a 
				href="https://play.google.com/store/apps/details?id=com.ayanadevstudio.rootcause" 
				class="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-center transition-colors"
			>
				📱 Download Android
			</a>
			
			<a 
				href="https://apps.apple.com/app/id123456789" 
				class="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-center transition-colors"
			>
				📱 Download iOS
			</a>
		</div>
	</div>
</div>
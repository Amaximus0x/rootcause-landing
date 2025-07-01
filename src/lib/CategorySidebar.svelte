<script lang="ts">
	// Category data - you can replace this with real data later
	const categories = [
		{ name: "Survival Conflicts", count: 1 },
		{ name: "Meditation", count: 8 },
		{ name: "Mind-Body Connection", count: 1 },
		{ name: "Health Insights", count: 1 },
		{ name: "Getting Started", count: 1 }
	];

	let searchQuery = '';
</script>

<!-- Category Sidebar -->
<div class="w-full max-w-[240px] flex flex-col justify-start items-start gap-5">
	<!-- Search Box -->
	<div class="w-full px-4 py-2 rounded-full border border-black/20 flex justify-between items-center gap-2.5">
		<input 
			type="text" 
			placeholder="Search" 
			bind:value={searchQuery}
			class="flex-1 text-gray-500 text-sm font-normal font-['Nunito_Sans'] leading-snug bg-transparent outline-none placeholder:text-gray-500"
		/>
		<div class="w-6 h-6 relative overflow-hidden">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M19.52 19.52L15.31 15.31M17.23 10.23C17.23 14.31 13.91 17.63 9.83 17.63C5.75 17.63 2.43 14.31 2.43 10.23C2.43 6.15 5.75 2.83 9.83 2.83C13.91 2.83 17.23 6.15 17.23 10.23Z" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>

	<!-- Categories Section -->
	<div class="w-full flex flex-col justify-start items-start gap-2">
		<div class="w-full text-black text-xl font-bold font-['Nunito_Sans'] leading-8">Categories</div>
		
		<!-- Categories List -->
		<div class="w-full overflow-hidden rounded-lg border border-black/10 flex flex-col">
			{#each categories as category, index}
				<div class="w-full px-4 py-2 {index === 0 ? 'rounded-t-lg' : ''} {index === categories.length - 1 ? 'rounded-b-lg border-b-0' : 'border-b border-black/10'} flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
					<div class="text-black text-sm font-medium font-['Nunito_Sans'] leading-8">{category.name}</div>
					<div class="w-5 h-5 px-2.5 py-2.5 bg-teal-600/10 rounded-full flex justify-center items-center">
						<div class="text-teal-700 text-xs font-medium font-['Nunito_Sans'] leading-8">{category.count}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div> 
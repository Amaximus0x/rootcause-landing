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
<div class="w-full max-w-[240px] h-[40px] flex flex-col justify-start items-start gap-5">
	<!-- Search Box -->
	<div class="self-stretch px-4 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-black/20 inline-flex justify-between items-center">
		<input 
			type="text" 
			placeholder="Search" 
			bind:value={searchQuery}
			class="flex-1 text-neutral-500 text-sm font-normal font-['Nunito_Sans'] leading-snug bg-transparent outline-none placeholder:text-neutral-500"
		/>
		
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M21.5308 20.4694L16.8368 15.7763C18.1973 14.1429 18.8757 12.0478 18.7309 9.92694C18.5861 7.80607 17.6293 5.82268 16.0593 4.38935C14.4894 2.95602 12.4274 2.18311 10.3021 2.23141C8.17687 2.27971 6.15205 3.1455 4.64888 4.64867C3.14571 6.15184 2.27993 8.17666 2.23163 10.3019C2.18333 12.4272 2.95623 14.4892 4.38956 16.0591C5.82289 17.629 7.80629 18.5859 9.92715 18.7307C12.048 18.8755 14.1431 18.1971 15.7765 16.8366L20.4696 21.5306C20.5393 21.6003 20.622 21.6556 20.713 21.6933C20.8041 21.731 20.9017 21.7504 21.0002 21.7504C21.0988 21.7504 21.1963 21.731 21.2874 21.6933C21.3784 21.6556 21.4612 21.6003 21.5308 21.5306C21.6005 21.4609 21.6558 21.3782 21.6935 21.2872C21.7312 21.1961 21.7506 21.0985 21.7506 21C21.7506 20.9015 21.7312 20.8039 21.6935 20.7128C21.6558 20.6218 21.6005 20.5391 21.5308 20.4694ZM3.75021 10.5C3.75021 9.16498 4.14609 7.85993 4.88779 6.7499C5.62949 5.63987 6.6837 4.77471 7.9171 4.26381C9.1505 3.75292 10.5077 3.61925 11.8171 3.8797C13.1264 4.14015 14.3292 4.78303 15.2732 5.72703C16.2172 6.67103 16.8601 7.87377 17.1205 9.18314C17.381 10.4925 17.2473 11.8497 16.7364 13.0831C16.2255 14.3165 15.3603 15.3707 14.2503 16.1124C13.1403 16.8541 11.8352 17.25 10.5002 17.25C8.71061 17.248 6.99488 16.5362 5.72944 15.2708C4.464 14.0053 3.7522 12.2896 3.75021 10.5Z" fill="#7C7C7C"/>
			</svg>
		
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
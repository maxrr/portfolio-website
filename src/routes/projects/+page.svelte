<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
</script>

<!-- <div class="mx-auto w-3/5 h-4/5 flex flex-wrap flex-row p-20 gap-8 justify-center items-center">
	<h1 class="h1 basis-full text-center">Projects</h1>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</div> -->

<div class="flex flex-col items-center justify-center w-full h-auto min-h-screen p-24">
	<h1 class="h1 text-center mt-4 mb-6">Projects</h1>
	<!-- <div
			class="grid grid-flow-col grid-cols-3 max-w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg overflow-x-scroll gap-5 p-2"
			> -->
	<!-- <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-5 p-2"> -->
	<div class="sweater">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	/* .sweater {
		@apply grid;
		@apply gap-5;
		@apply p-2;
		@apply w-full;
		@apply justify-center;
		@apply max-w-7xl;
		grid-template-columns: repeat(auto-fill, 18rem);
	} */

	.sweater {
		@apply flex;
		@apply flex-wrap;
		@apply gap-4;
		@apply p-2;
		@apply w-full;
		@apply h-full;
		@apply justify-center;
		@apply max-w-7xl;
		grid-template-columns: repeat(auto-fill, 18rem);
	}
</style>

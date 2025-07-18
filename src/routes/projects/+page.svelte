<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types';
	import type { PageData } from './$types';

	// Once again...
	
	interface Props {
		// export let data: PageData;
		data: { projects: Project[] };
	}

	let { data = $bindable() }: Props = $props();
	data.projects = data?.projects ?? [];
</script>

<svelte:head>
	<title>Projects • rountree.me</title>
	<meta name="description" content="List of all projects" />
</svelte:head>

<div
	class="flex flex-col items-center justify-center w-full h-auto min-h-screen py-24 pb-8 md:pb-24"
>
	<h1 class="h1 text-center mt-4 mb-6">Projects</h1>
	<div class="sweater">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.sweater {
		@apply flex;
		@apply flex-wrap;
		@apply gap-4;
		@apply p-2;
		@apply w-full;
		@apply h-full;
		@apply justify-center;
		@apply max-w-6xl;
		grid-template-columns: repeat(auto-fill, 18rem);
	}
</style>

<script lang="ts">
	// Initialize modal stores because we need to interact with it
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	// Get our helper functions and types ready
	export let project: import('$lib/server/loadProjects').Project;
</script>

<button
	on:click={() => {
		const modal = {
			type: 'component',
			component: 'modalProjectCard',
			valueAttr: { project: project }
		};
		// @ts-ignore
		// This error won't go away because of some wacky typescript shenanigans... not going to spend too much time on it
		modalStore.trigger(modal);
	}}
	class="jacket"
>
	<div
		class="card project-card-{project.id} p-0 dark:variant-glass-surface shadow-none !drop-shadow-md relative"
	>
		{#if project.img && project.img.url && project.img.alt}
			<img src={project.img.url} alt={project.img.alt} loading="lazy" height="96" width="288" />
		{/if}
		<div class="content p-4 pt-3">
			<h1 class="text-xl mb-1">{project?.title ?? 'Title'}</h1>
			{#if project.tags}
				<div class="flex flex-wrap gap-1 gap-y-1">
					{#each project.tags as tag}
						<span
							class="badge variant-glass-surface dark:variant-surface rounded-md px-1.5 py-0.5 text-[0.75rem]"
							>{tag}</span
						>
					{/each}
				</div>
			{/if}
			<p
				class={`description ${
					project.img && project.img.url && project.img.alt ? 'line-clamp-4' : 'line-clamp-[8]'
				}`}
			>
				{project?.description ?? 'Description'}
			</p>
			<div class="flex flex-col gap-2 mt-2">
				{#if project.links && project.links.length >= 1}
					<!-- {#each project.links as link} -->
					<a href={project.links[0].url} target="_blank">
						<!-- TODO: Implement on:keypress (A11y suggestion) -->
						<div class="project-btn" on:click|stopPropagation on:keypress={() => {}} role="button" tabindex="0" aria-label="Project link button to {project.links[0].site}">
							{#if project.links[0].site == 'github'}<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									class="-ml-1 mr-1.5"
									><path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/></svg
								>{/if}{project.links[0].text ?? `View on ${project.links[0].site}`}
							</div
						>
					</a>
					<!-- {/each} -->
				{/if}
			</div>
		</div>

		<!-- Uncomment to re-enable 'open' button instead of having the whole card be the open button -->
		<!-- {#if project.id} -->
		<!-- <button
			on:click={() => {
				const modal = {
					type: 'component',
					component: 'modalProjectCard',
					valueAttr: { project: project }
				};
				// @ts-ignore
				// This error won't go away because of some wacky typescript shenanigans... not going to spend too much time on it
				modalStore.trigger(modal);
			}}
			class="btn variant-glass-surface hover:variant-soft-surface py-1 px-3 rounded-md absolute bottom-4 right-4 gap-1"
		>
			<svg
				clip-rule="evenodd"
				fill-rule="evenodd"
				stroke-linejoin="round"
				stroke-miterlimit="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				><path
					d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-7.565 3.522h-1.218c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.033c.414 0 .75.336.75.75v3.05c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.244l-5.918 5.922h1.219c.414 0 .75.336.75.75s-.336.75-.75.75c-.715 0-2.319 0-3.033 0-.415 0-.75-.336-.75-.75 0-.715 0-2.335 0-3.05 0-.414.335-.75.75-.75.414 0 .75.336.75.75v1.243z"
					fill-rule="nonzero"
				/></svg
			>More
		</button> -->
		<!-- {/if} -->
	</div>
</button>

<style>
	path {
		@apply fill-token;
	}

	img {
		/* width: auto; */
		/* @apply h-24; */
		object-fit: cover;
	}

	.project-btn {
		@apply btn;
		@apply variant-glass-surface;
		@apply py-1;
		@apply px-3;
		@apply rounded-md;
		@apply absolute;
		@apply bottom-4;
		@apply left-4;
	}

	.project-btn:hover {
		@apply variant-soft-surface;
	}

	.description {
		/* @apply hyphens-auto; */
		@apply max-w-full;
		@apply mt-2;
	}

	.card {
		@apply text-left;
		@apply snap-start;
		@apply drop-shadow-xl;
		@apply overflow-hidden;
		@apply h-80;
		/* @apply shrink-0; */
		@apply w-64;
		@apply flex;
		@apply flex-col;
		@apply transition-all;
		min-width: 18rem;
		transform: translateZ(0rem) scale(1);
		backface-visibility: hidden;
		perspective: 1000;
		-webkit-backface-visibility: hidden;
		-webkit-perspective: 1000;
		-webkit-font-smoothing: subpixel-antialiased;
		/* z-index: 1; */
	}

	img {
		height: 96px;
		width: 288px;
	}

	.card:hover {
		/* transform: translateZ(2rem); */
		transform: scale(1.04);
		z-index: 2;
	}

	.jacket {
		-webkit-perspective: 1000;
	}

	/* .project-image {
		@apply bg-cover;
		@apply bg-center;
	} */

	.card .content {
		/* @apply w-auto; */
		@apply max-w-full;
		@apply h-[10.5rem];
		@apply overflow-clip;
		/* @apply h-56; */
	}
</style>

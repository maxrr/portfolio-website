<!-- https://github.com/skeletonlabs/skeleton/blob/master/sites/skeleton.dev/src/lib/modals/examples/ModalExampleForm.svelte -->
<script lang="ts">
	/** Exposes parent props to this component. */
	// export let parent: any;

	// Stores
	import { LightSwitch, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	// @ts-ignore
	let project: Project = $modalStore[0]?.valueAttr?.project;

	import { local_img_match } from '$lib/util/localUrlResolver';
</script>

{#if $modalStore[0] && project}
	<div
		class="jacket w-full h-full md:w-3/4 lg:w-1/2 max-w-2xl bg-surface-50-900-token rounded-lg relative"
	>
		<button
			class="absolute top-3 left-3 gap-2 btn bg-surface-50-900-token hover:bg-primary-50-900-token px-2 py-1 rounded-md"
			on:click={() => {
				modalStore.close();
			}}
		>
			<svg
				clip-rule="evenodd"
				fill-rule="evenodd"
				stroke-linejoin="round"
				stroke-miterlimit="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				width="24"
				><path
					class="transition-all fill-base-token dark:fill-dark-token"
					d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"
					fill-rule="nonzero"
				/></svg
			>
			Back</button
		>
		<div class="sweater w-full h-full">
			<div class="absolute top-4 right-4"><LightSwitch /></div>
			<div class="flex flex-col w-full h-full">
				{#if project.img && project.img.url && project.img.alt}
					<img src={local_img_match[project.img.url] ?? project.img.url} alt={project.img.alt} />
				{/if}
				<div
					class="content flex flex-col p-8 pt-5 gap-2 dark:border-primary-900 dark:border-2 rounded-lg rounded-t-none dark:border-t-0"
				>
					<h1 class="h1">{project.title}</h1>
					{#if project.tags}
						<div class="flex flex-wrap gap-1.5 gap-y-1">
							{#each project.tags as tag}
								<span
									class="badge variant-glass-surface dark:variant-surface rounded-md px-1.5 py-0.5 text-sm"
									>{tag}</span
								>
							{/each}
						</div>
					{/if}
					<p class="mt-2">{@html project.description.replaceAll('\n', '<br />')}</p>
					<div class="flex flex-col gap-2 mt-2">
						{#if project.links}
							{#each project.links as link}
								<a href={link.url} target="_blank">
									<button
										class="btn variant-glass-surface hover:variant-soft-surface py-1 px-3 rounded-md"
									>
										{#if link.site == 'github'}<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												class="-ml-1 mr-1.5"
												><path
													d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
												/></svg
											>{/if}{link.text ?? `View on ${link.site}`}</button
									>
								</a>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.jacket {
		overflow: hidden;
	}

	path {
		@apply fill-token;
	}

	img {
		width: auto;
		height: auto;
		@apply max-h-64;
		object-fit: cover;
	}
</style>

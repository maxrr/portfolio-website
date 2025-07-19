<script lang="ts">
	import '../app.css';
	import moment from 'moment';
	import LightSwitch from '$lib/components/LightSwitch.svelte';

	// https://vercel.com/docs/analytics/quickstart
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	interface Props {
		data: { test: string; streamed: { githubLastUpdated: Promise<any> } };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let now = moment();

	// TODO: Derive this from the func below
	let lastUpdatedTitle = $state('Retrieving details...');

	async function retrieveLastCommitDatetime(): Promise<moment.Moment> {
		const commitInfo = await data.streamed.githubLastUpdated;
		return Promise.resolve(moment(commitInfo?.commit?.author?.date));
	}
</script>

<div class="w-full h-full min-h-screen flex flex-col items-center">
	<div
		class="w-full max-w-[52rem] min-h-screen pt-16 pb-4 px-10 flex flex-col justify-between gap-16"
	>
		<div class="flex justify-between items-center">
			<a href="/">
				<div class="-ml-[10px] btn btn-ghost px-2">
					<h1 class="font-bold text-2xl">rountr.ee</h1>
				</div>
			</a>
			<LightSwitch />
		</div>

		<div class="pb-40 grid gap-5 mb-auto">
			{@render children?.()}
		</div>

		<div
			class="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center md:justify-between justify-self-end"
		>
			<p class="md:m-0 justify-self-start" title={lastUpdatedTitle}>
				Last updated <a href="https://github.com/maxrr/portfolio-website" target="_blank" class="link"
					><strong>
						{#await retrieveLastCommitDatetime()}
							...
						{:then lastUpdated}
							{#if lastUpdated > now}
								a while ago?
							{:else}
								{lastUpdated.from(now)}.
							{/if}
						{:catch}
							in another timeline...
						{/await}
					</strong></a
				>
			</p>

			<p class="text-center">
				Made overkill with <a href="https://kit.svelte.dev/" target="_blank" class="link"
					><strong>SvelteKit</strong></a
				>.
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		transition: all 100ms ease-in-out;
	}
	
	.link:hover {
		color: hsl(from var(--color-base-content) h s calc(l + 20));
	}
</style>

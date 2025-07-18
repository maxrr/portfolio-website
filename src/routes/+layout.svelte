<script lang="ts">
	import '../app.css';
	import moment from 'moment';

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

<div class="absolute float-right top-4 right-4">
	<!-- TODO: <LightSwitch /> -->
</div>

{@render children?.()}

<div
	class="relative h-auto lg:h-0 bottom-0 lg:bottom-6 mt-2 md:mt-0 p-4 pt-0 lg:py-0 right-0 w-full align-middle flex flex-col lg:flex-row items-center justify-start lg:justify-between"
>
	<p class="mb-1 mt-12 lg:m-0 justify-self-start" title={lastUpdatedTitle}>
		Last updated <a href="https://github.com/maxrr/portfolio-website" target="_blank"
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
		Made overkill with <a href="https://kit.svelte.dev/" target="_blank"
			><strong>SvelteKit</strong></a
		>
	</p>
</div>

<style>
	p > a {
		transition: all 100ms ease-in-out;
	}
	p > a:hover {
		color:hsl(from var(--color-base-content) h s calc(l + 20))
	}
</style>

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

	async function date(): Promise<moment.Moment> {
		const commitInfo = await data.streamed.githubLastUpdated;
		return Promise.resolve(moment(commitInfo?.commit?.author?.date));
	}
</script>

<div class="absolute float-right top-4 right-4">
	<!-- <LightSwitch /> -->
</div>

{@render children?.()}

<div
	class="relative h-auto lg:h-0 bottom-0 lg:bottom-6 mt-2 md:mt-0 p-4 pt-0 lg:py-0 right-0 w-full align-middle text-primary-900 dark:text-surface-400 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
>
	{#await date()}
		<p class="mb-1 mt-12 lg:m-0 justify-self-start">Last updated...</p>
	{:then lastUpdated}
		{#if lastUpdated > now}
			<p class="mb-1 lg:m-0 justify-self-start" title={lastUpdated.format('M/D/YY h:mma Z')}>
				Last updated... <a href="https://github.com/maxrr/portfolio-website" target="_blank"
					><strong>a while ago</strong></a
				>?
			</p>
		{:else}
			<p class="mb-1 lg:m-0 justify-self-start" title={lastUpdated.format('M/D/YY h:mma Z')}>
				Last updated <a href="https://github.com/maxrr/portfolio-website" target="_blank"
					><strong>{lastUpdated.from(now)}</strong></a
				>.
			</p>
		{/if}
	{:catch}
		<p class="mb-1 mt-12 md:m-0 justify-self-start">Error fetching last commit date :(</p>
	{/await}

	<p class="text-center">
		Made overkill with <a href="https://kit.svelte.dev/" target="_blank"
			><strong>SvelteKit</strong></a
		>
	</p>
</div>

<style>
	p > a {
		/* @apply transition-all; */ /* mass-replaced */
		/* @apply underline; */ /* mass-replaced */
	}
	p > a:hover {
		/* @apply text-surface-700-300; */ /* mass-replaced */
	}
</style>

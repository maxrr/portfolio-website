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
	let lastUpdatedTooltip = $state('Retrieving details...');

	async function retrieveLastCommitDatetime(): Promise<moment.Moment> {
		const commitInfo = await data?.streamed?.githubLastUpdated;
		const commitTimestamp = moment(commitInfo?.commit?.author?.date);

		lastUpdatedTooltip = commitTimestamp.format('M/D/YY H:mma Z');

		return Promise.resolve(commitTimestamp);
	}
</script>

<div class="w-full h-full min-h-screen flex flex-col items-center">
	<div class="w-full max-w-[52rem] min-h-screen py-4 px-10 flex flex-col gap-8 justify-between">
		<div class="flex justify-between items-center justify-self-start">
			<a href="/">
				<div class="-ml-[10px] btn btn-ghost px-2">
					<h1 class="underline-animation font-bold text-2xl">rountr.ee</h1>
				</div>
			</a>
			<LightSwitch />
		</div>

		<div class="grid gap-5">
			{@render children?.()}
		</div>

		<div
			class="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center md:justify-between justify-self-end"
		>
			<p class="md:m-0 justify-self-start" title={lastUpdatedTooltip}>
				Last updated <a
					href="https://github.com/maxrr/portfolio-website"
					target="_blank"
					class="link tooltip"
					data-tip={lastUpdatedTooltip}
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
	.underline-animation::after {
		content: '';
		transform: scaleX(0);
		transition: 300ms all cubic-bezier(0.165, 0.84, 0.44, 1);
		transform-origin: bottom left;
		background-color: rgb(var(--theme-font-color-base));
		display: inline-block;
		width: 100%;
		position: absolute;
		height: 0.25rem;
		bottom: 0;
		left: 0;
	}

	/* More in app.postcss */
	.underline-animation:hover::after {
		transform: scaleX(1);
	}
</style>

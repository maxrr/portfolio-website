<script lang="ts">
	import ModalProjectCard from '$lib/components/ModalProjectCard.svelte';
	// import { getPageTitle, setPageName } from '$lib/util/pageNameResolver';
	// import { page } from '$app/stores';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import moment from 'moment';
	import { storePopup, initializeStores, Modal, popup, LightSwitch } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';

	// https://vercel.com/docs/analytics/quickstart
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' })

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalProjectCard: {
			ref: ModalProjectCard
		}
	};

	// I should be able to use the LayoutData type, but the auto-generated types just aren't cooperating
	
	interface Props {
		// export let data: LayoutData;
		data: { test: string; streamed: { githubLastUpdated: Promise<any> } };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	// Set our page name for home, since 'Home' can't be reasonably inferred from '/'
	// setPageName('/', 'Home');

	// Initialize our Skeleton stores (for modals and such)
	initializeStores();

	// Find out the last time the repository for this project (maxrr/portfolio-website) was committed to
	let now = moment();
	// let lastUpdated = moment(new Date(2023, 8, 21, 8, 34, 2));
	// let lastUpdated: moment.Moment;

	async function date(): Promise<moment.Moment> {
		const commitInfo = await data.streamed.githubLastUpdated;
		return Promise.resolve(moment(commitInfo?.commit?.author?.date));
	}

	// Debug stuff
	// console.log(data.streamed.githubLastUpdated);
	// data.streamed.githubLastUpdated.then((e) => {
	// 	console.log(e);
	// });

	// Get our page name
	// let pageTitle: string;
	// $: pageTitle = getPageTitle($page.url.pathname);
</script>

<!-- <svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageTitle} />
</svelte:head> -->

<Modal components={modalComponentRegistry} />

<div class="absolute float-right top-4 right-4"><LightSwitch /></div>

{@render children?.()}

<div
	class="relative h-auto lg:h-0 bottom-0 lg:bottom-6 mt-2 md:mt-0 p-4 pt-0 lg:py-0 right-0 w-full align-middle text-primary-900 dark:text-surface-400 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
>
	{#await date()}
		<p class="mb-1 mt-12 lg:m-0 justify-self-start">Last updated...</p>
	{:then lastUpdated}
		<!-- Had this on the element below:: use:popup={{
				event: 'hover',
				target: 'popupLastModified',
				placement: 'top',
			}} -->
		<p class="mb-1 lg:m-0 justify-self-start" title={lastUpdated.format('M/D/YY h:mma Z')}>
			Last updated <a href="https://github.com/maxrr/portfolio-website" target="_blank"
				><strong>{lastUpdated.from(now)}</strong></a
			>.
		</p>

		<!-- <div
			class="card py-1 px-2 variant-solid-surface text-surface-800-100-token pointer-events-none"
			data-popup="popupLastModified"
		>
			<p>{lastUpdated.format('M/D/YY h:mma Z')}</p>
		</div> -->
	{:catch}
		<p class="mb-1 mt-12 md:m-0 justify-self-start">Error fetching last commit date :(</p>
	{/await}

	<p class="text-center">
		Made with <a href="https://kit.svelte.dev/" target="_blank"><strong>SvelteKit</strong></a><!-- ,
		<a href="https://tailwindcss.com/" target="_blank"><strong>Tailwind</strong></a>, and
		<a href="https://www.skeleton.dev/" target="_blank"><strong>Skeleton<strong /></strong></a> -->.
		Powered by <a href="https://vercel.com" target="_blank"><strong>Vercel</strong></a>.
		<!-- <span class="hidden lg:inline-block">Totally overkill.</span> -->
	</p>
</div>

<style>
	p > a {
		@apply transition-all;
		@apply underline;
	}
	p > a:hover {
		@apply text-surface-600-300-token;
	}
</style>

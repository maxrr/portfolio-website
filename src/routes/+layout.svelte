<script lang="ts">
	import ModalProjectCard from '$lib/components/ModalProjectCard.svelte';
	import { getPageTitle, setPageName } from '$lib/util/pageNameResolver';
	import { page } from '$app/stores';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import moment from 'moment';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import {
		storePopup,
		initializeStores,
		Modal,
		getModalStore,
		popup
	} from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalProjectCard: {
			ref: ModalProjectCard
			// props: {},
			// slot: '<p>Skeleton</p>'
		}
	};

	// I should be able to do this, but the auto-generated types just aren't cooperating
	// export let data: LayoutData;
	export let data: { streamed: { githubLastUpdated: Promise<string> } };

	// console.log(getPageName($page.url.pathname));
	setPageName('/', 'Home');

	initializeStores();

	let now = moment();
	let lastUpdated = moment(new Date(2023, 8, 21, 8, 34, 2));

	// Month (second entry) needs to be one less than the actual month
</script>

<svelte:head>
	<title>{getPageTitle($page.url.pathname)}</title>
</svelte:head>

<Modal components={modalComponentRegistry} />

<slot />

<div
	class="relative h-auto md:h-0 bottom-16 mt-12 md:mt-0 md:bottom-6 p-4 pt-0 md:py-0 right-0 w-full align-middle text-surface-600 flex flex-col md:flex-row items-center justify-center md:justify-between"
>
	{#await data.streamed.githubLastUpdated}
		<p class="mb-1 mt-0 md:m-0 justify-self-start h-0 overflow-visible">Last updated (...)</p>
	{:then githubLastUpdated}
		<p
			class="mb-1 mt-12 md:m-0 justify-self-start"
			use:popup={{
				event: 'hover',
				target: 'popupLastModified',
				placement: 'top'
			}}
		>
			Last updated {lastUpdated.from(now)}
		</p>

		<!-- <p class="mb-1 mt-0 md:m-0 justify-self-start" title={lastUpdated.from(now)}>
			Last updated {lastUpdated.from(now)}
		</p> -->

		<div
			class="card py-1 px-2 variant-glass-primary text-surface-800-100-token"
			data-popup="popupLastModified"
		>
			<p>{lastUpdated.format('M/D/YY h:mma')}</p>
		</div>
	{/await}

	<p class="text-center">
		Made with <a href="https://kit.svelte.dev/" target="_blank"><strong>SvelteKit</strong></a>,
		<a href="https://tailwindcss.com/" target="_blank"><strong>Tailwind</strong></a>, and
		<a href="https://www.skeleton.dev/" target="_blank"><strong>Skeleton</strong></a>.
		<span class="hidden md:inline-block">Totally overkill.</span>
	</p>
</div>

<!-- <div class="w-full h-full min-h-screen relative">
	<div
		class="relative h-0 bottom-4 right-0 w-full align-middle text-surface-600 flex items-center justify-center md:justify-end"
	>
		<p class="mb-4 mr-4">
			Made with <a href="https://svelte.dev/" target="_blank"><strong>Svelte</strong></a>,
			<a href="https://tailwindcss.com/" target="_blank"><strong>Tailwind</strong></a>, and
			<a href="https://www.skeleton.dev/" target="_blank"><strong>Skeleton</strong></a>.
			<span class="hidden md:inline-block">Totally overkill.</span>
		</p>
	</div>
</div> -->

<style>
	p > a {
		@apply transition-all;
		@apply underline;
	}
	p > a:hover {
		@apply text-surface-500;
	}
</style>

<script lang="ts">
	import ModalProjectCard from '$lib/components/ModalProjectCard.svelte';
	import { getPageName, setPageName } from '$lib/util/pageNameResolver';
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

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalProjectCard: {
			ref: ModalProjectCard
			// props: {},
			// slot: '<p>Skeleton</p>'
		}
	};

	// console.log(getPageName($page.url.pathname));
	setPageName($page.url.pathname, 'Home');

	initializeStores();

	let now = moment();
	let lastUpdated = moment(new Date(2023, 8, 21, 8, 34, 2));
	// Month (second entry) needs to be one less than the actual month
</script>

<svelte:head>
	<title>{getPageName($page.url.pathname)}</title>
</svelte:head>

<Modal components={modalComponentRegistry} />

<slot />

<div
	class="relative h-32 md:h-0 bottom-16 md:bottom-6 p-4 md:py-0 right-0 w-full align-middle text-surface-600 flex flex-col md:flex-row items-center justify-center md:justify-between"
>
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

	<div
		class="card py-1 px-2 variant-glass-primary text-surface-800-100-token"
		data-popup="popupLastModified"
	>
		<p>{lastUpdated.format('M/D/YY h:mma')}</p>
	</div>

	<p class="">
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

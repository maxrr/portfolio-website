<script lang="ts">
	import ModalProjectCard from '$lib/components/ModalProjectCard.svelte';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { storePopup, initializeStores, Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalProjectCard: {
			ref: ModalProjectCard
			// props: {},
			// slot: '<p>Skeleton</p>'
		}
	};

	initializeStores();
</script>

<Modal components={modalComponentRegistry} />

<slot />

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

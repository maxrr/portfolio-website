<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { getPageName } from '$lib/util/pageNameResolver';

	let crumbs: string[] = [];

	let ptr = 0;
	let i = 0;

	function addCrumb(ptrLocal: number) {
		let thisJump = getPageName($page.url.pathname.slice(0, ptrLocal));
		console.log(thisJump, $page.url.pathname, ptrLocal);
		crumbs.push(thisJump);
		ptrLocal = $page.url.pathname.indexOf('/', ptrLocal + 1);
	}

	while ((ptr = $page.url.pathname.indexOf('/', ptr + 1)) != -1) {
		i++;
		if (i > 7) break;

		addCrumb(ptr);
	}
	addCrumb($page.url.pathname.length);
	// for (let jump of $page.url.pathname.split('/')) {
	// 	console.log(jump);
	// }
</script>

<div class="flex flex-col w-full h-full min-h-inherit absolute top-0 left-0">
	<div class="flex w-full h-16 items-center p-6">
		<a href="/"><h1 class="mb-1 text-3xl text-token big-header relative">rountree.me</h1></a>

		<ol
			class="breadcrumb ml-4 max-[420px]:absolute max-[420px]:top-[3.75rem] max-[420px]:left-4 h-0 w-0 overflow-visible"
		>
			{#each crumbs as crumb}
				<li class="crumb-separator" aria-hidden>/</li>
				<li class="crumb">{crumb}</li>
			{/each}
			<!-- <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Home</a></li>
			<li class="crumb-separator" aria-hidden>/</li>
			<li class="crumb">
				Projects
				<a class="underline hover:brightness-75" href="/elements/breadcrumbs">Projects</a>
			</li>
			<li class="crumb-separator" aria-hidden>/</li>
			<li>Article</li> -->
			<!-- {#each } -->
		</ol>

		<div class="absolute top-4 right-4"><LightSwitch /></div>
	</div>
</div>

<slot />

<style>
	.big-header::after {
		content: '';
		transform: scaleX(0);
		transition: 300ms all cubic-bezier(0.165, 0.84, 0.44, 1);
		transform-origin: bottom left;
		background-color: rgb(var(--theme-font-color-base));
		@apply inline-block;
		@apply w-full;
		@apply absolute;
		@apply h-1;
		/* @apply bg-red-500; */
		/* @apply bg-primary-900-50-token; */
		@apply bottom-0;
		@apply left-0;
	}

	/* More in app.postcss */

	.big-header:hover::after {
		transform: scaleX(1);
	}

	/* .crumb > a {
		transition: 0.1s all ease;
	} */
</style>

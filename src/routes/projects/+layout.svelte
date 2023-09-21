<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let crumbs = [];

	for (let jump of $page.url.pathname.split('/')) {
		console.log(jump);
	}
</script>

<div class="flex flex-col w-full h-full min-h-inherit absolute top-0 left-0">
	<div class="flex w-full h-16 items-center p-6">
		<a href="/"><h1 class="mb-1 text-3xl text-token big-header relative">rountree.me</h1></a>

		<ol class="breadcrumb ml-4">
			<!-- <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Home</a></li> -->
			<li class="crumb-separator" aria-hidden>/</li>
			<li class="crumb">
				Projects
				<!-- <a class="underline hover:brightness-75" href="/elements/breadcrumbs">Projects</a> -->
			</li>
			<li class="crumb-separator" aria-hidden>/</li>
			<li>Article</li>
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

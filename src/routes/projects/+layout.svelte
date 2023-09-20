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
		<a href="/"><h1 class="h2 mb-1 text-3xl text-token">rountree.me</h1></a>

		<ol class="breadcrumb ml-4">
			<!-- <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Home</a></li> -->
			<li class="crumb-separator" aria-hidden>/</li>
			<li class="crumb">
				<a class="underline hover:brightness-75" href="/elements/breadcrumbs">Projects</a>
			</li>
			<li class="crumb-separator" aria-hidden>/</li>
			<li>Article</li>
		</ol>

		<div class="absolute top-4 right-4"><LightSwitch /></div>
	</div>
</div>

<slot />

<style>
	.crumb > a {
		transition: 0.1s all ease;
	}
</style>

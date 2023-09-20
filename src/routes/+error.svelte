<script>
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="absolute top-4 right-4"><LightSwitch /></div>

<div class="w-full h-full flex flex-wrap justify-center items-center text-center">
	<div>
		{#if $page.status === 404}
			<h1 class="h1 basis-full">That page doesn't exist!</h1>
		{:else}
			<h1 class="h1 basis-full">Sorry, I messed up!</h1>
			<h2 class="h2 pt-3">Error {$page.status}</h2>
		{/if}
		<h3 class="h3 pt-2">
			Go
			<a href="/" class="underline cursor-hand hover:brightness-50 transition-all">home</a> or try again
			later.
		</h3>
	</div>
</div>

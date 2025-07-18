<script>
	import { page } from '$app/state';
</script>

<div class="absolute top-4 right-4">
	<!-- <LightSwitch /> -->
</div>

<div class="w-full h-full flex flex-wrap justify-center items-center text-center">
	<div>
		{#if page.status === 404}
			<h1 class="h1 basis-full">That page doesn't exist!</h1>
		{:else}
			<h1 class="h1 basis-full">Looks like something went wrong.</h1>
			<h2 class="h2 pt-3">Error {page.status}</h2>
			<p>If the issue persists, it'd be kind of you to <a href="https://github.com/maxrr/portfolio-website/issues/new" target="_blank">open a GitHub issue</a> or <a href="mailto:max@rountr.ee">contact me</a>.</p>
		{/if}
		<h3 class="h3 pt-2">
			Go
			<a href="/" class="underline cursor-hand hover:brightness-50 transition-all">home</a> or try again
			later.
		</h3>
	</div>
</div>

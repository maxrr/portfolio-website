<svelte:head>
	<title>Home • rountr.ee</title>
	<meta name="description" content="Homepage of rountr.ee, Max Rountree's portfolio website" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen flex items-center justify-center py-24 pb-8 md:pb-24">
	<div
		class="flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-5 w-3/4 max-w-5xl gap-12 md:gap-24"
	>
		<!-- Left panel - name, subtitle, links -->
		<div class="flex flex-col gap-4 justify-center items-center lg:items-start">
			<h1
				class="mb-1 -ml-1 font-extrabold text-7xl sm:text-8xl lg:text-9xl text-center lg:text-left"
			>
				Max<br />
				<span class="underline underline-offset-[30px]">Rountree</span>
			</h1>
			<h2 class="mt-8 -mb-8 max-w-md lg:max-w-lg text-center lg:text-left text-4xl">
				Welcome to my site! I'm an aspiring software engineer.
			</h2>
			<!-- <p class="h2 font-normal pt-7 pb-0"></p> -->
		</div>

		<!-- Right panel -->
		<!-- TODO: Component-ify this -->
		<div class="bg-purple-500">
			<div class="flex gap-4 w-auto h-auto bg-red-500 float-left">
				<a
					href="https://www.linkedin.com/in/maxrountree/"
					target="_blank"
					class="[&>*]:pointer-events-none svglink"
					aria-label="Link to my LinkedIn profile"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							class="fill-token"
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/></svg
					>
				</a>
				<div class="card py-1 px-2 bg-gradient-to-r from-tertiary-500 to-primary-500">
					<p>/in/maxrountree</p>
				</div>
				<a
					href="https://github.com/maxrr"
					target="_blank"
					class="[&>*]:pointer-events-none svglink"
					aria-label="Link to my GitHub profile"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</a>
				<div class="card py-1 px-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
					<p>/maxrr</p>
				</div>
				<a
					href="mailto:max@rountree.me"
					class="[&>*]:pointer-events-none svglink"
					aria-label="Link to send me an email"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"
						/></svg
					>
				</a>
			</div>
			<div class="card py-1 px-2 bg-gradient-to-r from-secondary-500 to-tertiary-500 text-white">
				<p>max@rountree.me</p>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: 'IBM Plex Mono', monospace;
		/* @apply drop-shadow-2xl; */ /* mass-replaced */
	}

	path {
		/* @apply fill-token; */ /* mass-replaced */
	}

	a > svg > path {
		/* @apply transition-all; */ /* mass-replaced */
		transition: 0.12s all ease;
	}

	a:hover > svg > path {
		/* @apply brightness-50; */ /* mass-replaced */
		transform: scale(0.95) translate(2.5%, 2.5%);
	}
</style>

<svelte:head>
	<title>Home • rountr.ee</title>
	<meta name="description" content="Homepage of rountr.ee, Max Rountree's portfolio website" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<h1 class="text-2xl font-bold">
	Max Rountree <span class="px-1">•</span> Aspiring Software Engineer
</h1>
<p>
	Hi, welcome to my site. I'm an aspiring software engineer with an interest in backend
	technologies. Like many others looking to enter the field of software engineering, I went to
	college
	<a href="https://youtu.be/5-MO1IQvDmI?si=5mDeh9LaF_95Z4BY" target="_blank" class="link"
		>(go badgers!)</a
	>
	and took the standard computer science courses.
</p>

<div class="w-full flex flex-col justify-center gap-3">
	<p>You can connect with me through:</p>
	<div class="w-full flex gap-4">
		{#snippet social(
			/** @type {string} */ link,
			/** @type {string} */ platform,
			/** @type {string} */ iconClass
		)}
			<div class="tooltip tooltip-bottom" data-tip={platform}>
				<a
					href={link}
					aria-label={platform}
					target="_blank"
					class="transition-all hover:text-primary"><span class={iconClass}></span></a
				>
			</div>
		{/snippet}

		{@render social('https://github.com/maxrr', 'GitHub', 'tabler--brand-github')}
		{@render social('https://linkedin.com/in/maxrountree', 'LinkedIn', 'tabler--brand-linkedin')}
		{@render social('mailto:max@rountr.ee', 'Email', 'tabler--mail')}
	</div>
</div>

<style>
	/* https://svelte.dev/docs/kit/icons */
	/* https://iconify.design/docs/usage/css/ */
	/* tabler:brand-github */
	.tabler--brand-github {
		display: inline-block;
		width: 48px;
		height: 48px;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	/* tabler:brand-linkedin */
	.tabler--brand-linkedin {
		display: inline-block;
		width: 48px;
		height: 48px;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0'/%3E%3Cpath d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z'/%3E%3C/g%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	/* tabler:mail */
	.tabler--mail {
		display: inline-block;
		width: 48px;
		height: 48px;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpath d='m3 7l9 6l9-6'/%3E%3C/g%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
</style>

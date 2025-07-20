<!-- Heavily influenced by -->
<!-- https://github.com/CaptainCodeman/sveltekit-dark-mode/blob/master/src/lib/Theme.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const LIGHT_THEME = "goolius";
	const DARK_THEME = "glorbo";

	let dark: boolean = $state(true);
	let loading = $state(true);
    
	onMount(() => {
        dark = document.documentElement.classList.contains('dark');
		loading = false;

		// Listen for system settings change
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleMediaChange);
		return () => matcher.removeEventListener('change', handleMediaChange);
	});

	// Handle system settings change and adjust
	function handleMediaChange({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.getItem('theme')) {
			setMode(dark);
		}
	}

	function setMode(value: boolean) {
		dark = value;

		if (value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('theme', dark ? 'dark' : 'light');

		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
</script>

<svelte:head>
	<script>
		// We must unfortunately duplicate code here because there's no way to reference our
		// existing functions or variables here, we're also doing this in the head to avoid a flash
		// of the wrong theme on the first page load
		if (
			localStorage.getItem('theme') === 'dark' ||
			(localStorage.getItem('theme') === null &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<!-- Activating the theme controller will turn on light mode -->
<!-- https://daisyui.com/components/theme-controller/ -->
<label class="toggle text-base-content">
	<input
        id="theme-controller"
		type="checkbox"
		value={LIGHT_THEME}
		class="theme-controller"
		checked={!dark}
		aria-checked={!dark}
		onchange={(c) => setMode(!c.currentTarget.checked)}
	/>
	<svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><g
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-width="2"
			fill="none"
			stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g
		></svg
	>
	<svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><g
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-width="2"
			fill="none"
			stroke="currentColor"
			><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"
			></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path
				d="M2 12h2"
			></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path
				d="m19.07 4.93-1.41 1.41"
			></path></g
		></svg
	>
</label>

<style>
	label {
		transition: all 200ms ease-in-out;
	}
	label:hover {
		/* background-color: var(--color-base-300) */
		background-color: color-mix(in oklab, var(--color-base-300), #000, 0%);
	}
</style>
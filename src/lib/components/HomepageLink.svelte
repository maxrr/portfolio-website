<script lang="ts">
	let {
		link,
		label,
		title,
		description,
		icon
	}: {
		link: string;
		label: string;
		title: string;
		description: string;
		icon: string;
	} = $props();
</script>

<a href={link} target="_blank" class="[&>*]:pointer-events-none" aria-label={label}>
    <div class="invert logo-masker w-fit h-fit">
        <img alt={title + " icon"} src={icon} height="48px" width="48px" />
    </div>
    
	<h1>{title}</h1>
	<div class="card py-1 px-2 bg-gradient-to-r from-red-500 to-cyan-500">
		<p>{description}</p>
	</div>
</a>

<style>
	a > svg > path {
		transition: 0.12s all ease;
	}

	a:hover > svg > path {
		transform: scale(0.95) translate(2.5%, 2.5%);

		/* taken from brightness-50 */
		--tw-brightness: brightness(80%);
		filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,)
			var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,)
			var(--tw-drop-shadow,);
	}
</style>

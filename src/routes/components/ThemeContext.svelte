<script lang='ts'>
    import { writable } from 'svelte/store';
    import { themes } from '../themes.js';
    import { onMount } from 'svelte';

    let _current = 'dark';
    export const theme = writable(themes[_current]);
    export const changeTheme = () => {
        _current = _current == 'dark' ? 'light' : 'dark';
        theme.set(themes[_current]);
    }

    onMount(() => {
        // const r = document.querySelector(':root');
        // const r = document.querySelector(':root');
        const r = document.documentElement;
        if (r instanceof HTMLElement) {
            // console.log(Object.entries($theme.colors));
            Object.entries($theme.colors).forEach((elem, _) => {
                r.style.setProperty('--theme-' + elem[0], elem[1]);
            });
        }
    })
</script>
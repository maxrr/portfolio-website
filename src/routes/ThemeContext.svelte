<script lang='ts'>
    import { setContext } from 'svelte';
    import { themes, themes as _themes } from './themes.js';

    let _current = themes[0].name 

    const getCurrentTheme = (name: string) => themes.find(h => h.name === name);
    //const Theme = writable(getCurrentTheme(_current))

    setContext('theme', {
        
    })
</script>
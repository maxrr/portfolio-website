<!--
<h1>Welcome to SvelteKit</h1>
    <p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>

    Flexbox guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    Site for icons: https://iconmonstr.com/
    Three.js examples: https://freefrontend.com/three-js-examples/
    Cool flowing pattern: https://codepen.io/soju22/pen/PLeLwo
    https://stackoverflow.com/questions/27198525/three-js-what-is-planebuffergeometry
-->
<head>
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin=true>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap' rel='stylesheet'>
</head>

<script>
    import Splash from './components/Splash.svelte';
    import Section from './components/Section.svelte';
    import Panel from './components/Panel.svelte';
    import SkillsList from './components/SkillsList.svelte';
    //import { onMount } from 'svelte';
    //import { createNoise3D } from 'simplex-noise';
    import ThemeContext from './components/ThemeContext.svelte';
    // import theme from './components/ThemeContext.svelte';
    import changeTheme from './components/ThemeContext.svelte';

    const socials = [
        { name: 'linkedin', url: 'https://linkedin.com/in/maxrountree', src: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' },
        { name: 'github', url: 'https://github.com/maxrr', src: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' } 
    ];
</script>

<ThemeContext/>

<button on:click={() => changeTheme}>
    <p>Test</p>
</button>

<Splash>
    <div style='display: grid; height: 100%; flex-basis: 100%'>
        <div style='z-index: -1; grid-column: 1; grid-row: 1'><!--<canvas id='fungraphic'/>--></div>
        <div class='flexCenterAll' style='z-index: 1; grid-column: 1; grid-row: 1'>
            <h1 class='headline'>Hi, I'm Max.</h1> <br />
            <!-- <h2 class='subHeadline'>I make websites that wow.</h2> -->
            <h2 class='subHeadline'>This is my site. I'm not done with it yet.</h2>

            <div class='socialsContainer flexCenterAll' style='margin-top: 1em; gap: 2em'>
                {#each socials as social}
                    <a href={social.url} target='_blank' rel="noreferrer"><svg viewBox='0 0 24 24' class='socialLinkIcon'><path d="{social.src}"/></svg></a>
                {/each}
            </div>
        </div>
    </div>
</Splash>

<div style='margin-top: -7em'>
    <Section>
        <Panel>
            <h1 style='margin-right: auto; margin-bottom: 0.1em;'>About Me</h1>
            <p>I'm in my last year at UW-Madison. I have experience working in C, Java, JavaScript, Python, and Lua. I'm always open to new opportunities - please reach out to me using the links above if you want to get in touch.</p>
        </Panel>
    </Section>
</div>

    
<div style='width: 65vw; margin-right: auto; margin-left: auto; margin-bottom: 1em'>
    <h1 style='margin: 0 auto 0 0.5em; flex-basis: 100%;'>Projects</h1>
</div>

<div style='width: 65vw; margin-right: auto; margin-left: auto; margin-bottom: 2em; columns: 2 280px; column-gap: 1em;'>
    <Panel display='inline-block'>
        <h2>This Website</h2>
        <div style='margin: 0.25em 0'><SkillsList skills={['HTML & CSS', 'Svelte']}/></div>
        <p>This website was built using <a href='https://svelte.dev/' target='_blank' rel='noreferrer'>Svelte</a>. It's overkill for a small, static website like this, but I'm enjoying learning about it through this project. This tool is really cool!</p>
    </Panel>

    <!-- <Panel display='inline-block'>
        <h2>Sample Project</h2>
        <p>I haven't made this project yet, but it's here!</p>
    </Panel> -->

    <Panel display='inline-block'>
        <h2>Garry's Mod</h2>
        <div style='margin: 0.25em 0'><SkillsList skills={['Lua', 'SQL']}/></div>
        <p>I managed and developed custom addons for a <a href='https://store.steampowered.com/app/4000' target='_blank' rel='noreferrer'>Garry's Mod</a> <a href='https://hgaming.net' target='_blank' rel='noreferrer'>game server</a> for 8 years. They were written in <a href='https://wiki.facepunch.com/gmod#learning' target='_blank' rel='noreferrer'>GLua</a>, a version of Lua with some added libraries. You can find these addons on my <a href='https://github.com/maxrr/hazard-addons' target='_blank' rel='noreferrer'>GitHub</a>, also linked above.</p>
    </Panel>

    <Panel display='block'>
        <h2>Discord Bots</h2>
        <div style='margin: 0.25em 0'><SkillsList skills={['Node.js', 'Typescript']}/></div>
        <p>I've created multiple Discord bots using Node.js, a few of which used Typescript. You can find one of them on my Github <a href='https://github.com/maxrr/dadbot' target='_blank' rel='noreferrer'>here</a>.</p>
    </Panel>
</div>

<style>
    :global(body) {
        margin: 0px; padding: 0px;
        background-color: #222133;
        background-color: var(--theme-background);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #abb3d6;
    }

    p {
        font-size: 18px;
    }

    a {
        transition: color 0.05s ease;
    }

    a:visited {
        color: #8088a9;
    }

    a:link {
        color: #979ebc;
    }

    a:hover {
        color: #746fb1;
    }

    a:active{
        color: #b1b8d9;
    }

    .headline {
        font-size: 5em;
        flex-basis: 100%;
    }

    .subHeadline {
        font-size: 2em;
        flex-basis: 100%;
        color: #8b90a9;
    }

    .flexCenterAll {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .socialsContainer {
        margin: 1em;
        padding: 1em;
        gap: 0.75em;
        background-color: #222133;
        border-radius: 8px;
        box-shadow: 0px 0px 7px 0px rgb(30, 30, 30);
    }

    .socialLinkIcon {
        width: 2em;
        height: 2em;
        fill: #abb3d6;
    }

    .socialLinkIcon:hover {
        fill: #615eab;
        transition: fill 0.1s;
    }
</style>
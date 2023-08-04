<script lang='ts'>
    export let skills: Array<string> = [];

    let computedColors: any = {};
    const makeColor = (text: string) => {
        if (computedColors[text]) return computedColors[text];
    }
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<div class='container'>
    {#each skills as skill}
        <div class='skill'>
            {skill}
        </div>
    {/each}
</div>

<style>
    .skill {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.8em;
        display: inline-block;
        white-space: nowrap;
        background-color: rgb(40, 40, 40);
        border-radius: 0.5em;
        padding: 0.25em 0.5em;
        margin-right: 0.5em;
    }
</style>
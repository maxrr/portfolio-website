<script lang='ts'>
    export let display: string = 'default';
</script>

<div style='display: {display}'>
    <slot />
</div>

<style>
    div {
        padding: 1em;
        background: #29283d;
        border-radius: 16px;
        box-shadow: 0px 0px 8px 0px rgb(30, 30, 30);
        margin-bottom: 1em;
    }
</style>
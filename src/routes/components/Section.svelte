<div class='top'>
    <div class='pre'>
        <slot name='pre'/>
    </div>
    <div class='content'>
        <slot/>
    </div>
</div>

<style>
    .top {
        max-width: 65vw;
        display: flex;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2em auto 2em auto;
    }

    .pre {
        width: 100%;
        padding: 0 1em 0em 1em;
    }

    /* .content {
        width: 100%;
        padding: 1em;
        background: #29283d;
        border-radius: 16px;
        box-shadow: 0px 0px 8px 0px rgb(30, 30, 30);
    } */
</style>
<div class='fillPage'>
    <slot></slot>
</div>

<style>
    * {
        color: #abb3d6;
        flex-basis: 100%;
        text-align: center;
    }

    .fillPage {
        height: 70vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        /* background-color: rgb(30, 33, 41); */
        
    }
</style>

<!-- box-shadow: 0px -3px 7px 0px black; (from .fillPage) -->
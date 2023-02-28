<script>
    export let items;
</script>

<div class="container">
    {#each Object.keys(items) as item}
        <div class="item"  style="background-color:{items[item]}">
            <!-- <span class="color"></span> -->
            <span class="text">{item}</span>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 60px;
        width: 100%;
        gap: 8px;
    }

    .item {
        width: fit-content;
        text-align: center;
        padding: 2px 8px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text {
        font-size: 0.8rem;
        color: white;
    }
</style>
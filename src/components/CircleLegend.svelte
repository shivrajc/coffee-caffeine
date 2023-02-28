<script>
    export let rScale;
    export let items;
    export let boundedHeight;
    export let boundedWidth;
</script>

<g>
    {#each items as item}        
        <circle 
            cx={boundedWidth} 
            cy={boundedHeight - rScale(item)} 
            r={rScale(item)} 
            class="circle"
        />
        
        <line 
        x1={boundedWidth + rScale(item)}
        x2={boundedWidth + 40}
        y1={boundedHeight - rScale(item)}
        y2={boundedHeight - rScale(item)}
        class="line"
        />

        <text 
            x={boundedWidth + 40} 
            y={boundedHeight - rScale(item)} 
            r={rScale(item)} 
            class="text"
            alignment-baseline="middle"
        >{item}ml</text>
    {/each}
</g>

<style>
    .circle {
        fill: none;
        stroke: hsl(15, 24%, 40%);
    }
    
    .line {
        stroke: hsl(15, 24%, 40%);   
        stroke-dasharray: 2;     
    }
    
    .text {        
        fill: hsl(15, 24%, 40%);   
        font-size: 0.6rem;
        font-weight: bold;
        
    }
</style>
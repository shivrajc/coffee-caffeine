<script>
    import { data } from "../data/data";
    import {scaleLinear, max, scaleBand, extent, scaleSqrt, axisBottom, range} from 'd3';
    import CircleLegend from "./CircleLegend.svelte";

    const products = ["Cappuccino", "Filter/Brewed Coffee", "Single-shot Espresso"];
    export let width;
    export let height;

    const xTicks = range(0, 400, 50);
    const colors = {
        "Caffe Nero": "#3fb4c8",
        "Costa": "#b51244",
        "Greggs": "#01568f",
        "Pret": "#6a1b23",
        "Starbucks": "#00704A",
    };

    let hoveredData;

    $: margin = {top: 60, right: 100, bottom: 40, left: 20};
    $: boundedWidth = width - margin.left - margin.right;
    $: boundedHeight = height - margin.top - margin.bottom;

    $: yScale = scaleBand()
        .domain(products)
        .range([0, boundedHeight]);

    $: xScale = scaleLinear()
        .domain([0, max($data, d => d.caffeine_mg)])
        .range([0, boundedWidth]);

    $: rScale = scaleSqrt()
        .domain(extent($data.map(d => d.drink_size_ml)))
        .range([8, 20]);  
    
    function handleHover(chain) {
        hoveredData = chain;
    }

</script>

<svg {width} {height}>
    {#each xTicks as tick}        
        <g transform="translate({margin.left}, {margin.top})">
            <line class="axis-grid" x1={xScale(tick)} x2={xScale(tick)} y1={margin.top-14} y2={boundedHeight-16}/>
            <text class="axis-label" x={xScale(tick)} y={margin.top-20} text-anchor="middle">{tick === 0 ? "0mg" : tick}</text>
            <text class="axis-label" x={xScale(tick)} y={boundedHeight} text-anchor="middle">{tick === 0 ? "0mg" : tick}</text>
        </g>
    {/each}

    <text x={margin.left-16} y={margin.top+20} class="axis-header">Caffeine --></text>  
    <text x={margin.left-16} y={height-20} class="axis-header">Caffeine --></text>  

    {#each products as product}
        <line 
            x1={margin.left-10} 
            x2={width-8} 
            y1={yScale(product) + (yScale.bandwidth()/2) + margin.top} 
            y2={yScale(product) + (yScale.bandwidth()/2) + margin.top} 
            class="row-header-line"    
        />
        
        <text 
            class="row-header-label" 
            x={24} 
            y={yScale(product) + (yScale.bandwidth()/2 + margin.top) - 16} 
            alignment-baseline="middle"
        >
            {product}
        </text>
    {/each}

    <g transform="translate({margin.left}, {margin.top})">
        {#each $data as d}
            {#if d.product === 'Single-shot Espresso'}
                {#if d.chain === 'Caffe Nero' ||  d.chain === 'Costa'}
                    <line x1={xScale(d.caffeine_mg)} 
                          x2={xScale($data.filter(p => p.product === 'Cappuccino' && p.chain === d.chain)[0].caffeine_mg)}
                          y1={yScale(d.product) + (yScale.bandwidth()/2)}
                          y2={yScale('Cappuccino') + (yScale.bandwidth()/2)}
                          stroke="{colors[d.chain]}"
                          stroke-width="2"
                          stroke-dasharray="2"
                          opacity="{hoveredData === d.chain ? '1' : '0'}"
                    />
                {:else}
                    <line x1={xScale(d.caffeine_mg)} 
                        x2={xScale($data.filter(p => p.product === 'Filter/Brewed Coffee' && p.chain === d.chain)[0].caffeine_mg)}
                        y1={yScale(d.product) + (yScale.bandwidth()/2)}
                        y2={yScale('Filter/Brewed Coffee') + (yScale.bandwidth()/2)}
                        stroke="{colors[d.chain]}"
                        stroke-width="2"
                        stroke-dasharray="2"
                        opacity="{hoveredData === d.chain ? '1' : '0'}"
                    />                    
                {/if}
            {/if}
            {#if d.product === 'Filter/Brewed Coffee'}
                {#if d.chain !== 'Caffe Nero' &&  d.chain !== 'Costa'}
                    <line x1={xScale(d.caffeine_mg)} 
                          x2={xScale($data.filter(p => p.product === 'Cappuccino' && p.chain === d.chain)[0].caffeine_mg)}
                          y1={yScale(d.product) + (yScale.bandwidth()/2)}
                          y2={yScale('Cappuccino') + (yScale.bandwidth()/2)}
                          stroke="{colors[d.chain]}"
                          stroke-width="2"
                          stroke-dasharray="2"
                          opacity="{hoveredData === d.chain ? '1' : '0'}"
                    />
                {/if}
            {/if}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <circle 
                class="circle"
                cx={xScale(d.caffeine_mg)} 
                cy={yScale(d.product) + (yScale.bandwidth()/2)} 
                r={rScale(d.drink_size_ml)} 
                fill="{colors[d.chain]}"
                opacity="{!hoveredData ? '1' : hoveredData === d.chain ? '1' : '0.4'}"
                class:hovered={hoveredData == d.chain}
                on:mouseover={() => handleHover(d.chain)}    
                on:mouseout={() => hoveredData = null}    
            />


            <text 
                class="data-label"                
                x={xScale(d.caffeine_mg)} 
                y={yScale(d.product) + (yScale.bandwidth()/2) + (d.product === 'Single-shot Espresso' ? 20 : 0)} 
                fill="{d.product === 'Single-shot Espresso' ? colors[d.chain] : 'white' }" 
                text-anchor="middle"
                alignment-baseline="middle"
                opacity="{hoveredData === d.chain ? '1' : '0'}"
            >
                {d.caffeine_mg}mg
            </text>

            <text 
                class:label-hovered={hoveredData === d.chain}
                x={xScale(d.caffeine_mg) - (d.product === 'Single-shot Espresso' && d.chain === 'Starbucks' ? 24 : 0)} 
                y={yScale(d.product) + (yScale.bandwidth()/2 + 40)} 
                fill="{colors[d.chain]}" 
                text-anchor="middle"
                opacity="{!hoveredData ? '1' : hoveredData === d.chain ? '1' : '0.4'}"
                class="circle-label"
            >
                {d.chain}
            </text>
        {/each}

        <CircleLegend {rScale} boundedHeight={boundedHeight-30} boundedWidth={boundedWidth-20} items={[30, 300]} />
    </g>

</svg>

<style>    

    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');

    * {
        font-family: 'Space Grotesk', sans-serif;
        transition: opacity 0.2s ease;
    }

    .axis-header {        
        text-anchor: left;
        fill: hsl(15, 12%, 60%);
        font-size: 0.8rem;
    }

    .axis-label {
        fill: #49342d;

    }

    .axis-grid {
        stroke: hsl(15, 8%, 60%);
        stroke-width: 1;
        stroke-dasharray: 4;
    }

    .row-header-label {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.5rem;
        fill: #49342d;
        opacity: 0.6;        
        font-weight: 500;
    }

    .row-header-line {
        stroke: #49342d;
    }

    .data-label {
        pointer-events: none;
        font-size: 0.7rem;
    }
    
    .circle-label {
        font-size: 0.8rem;

    }

    .hovered {
        stroke: #49342d;
        stroke-width: 2;
    }

    .circle {
        cursor: pointer;
    }

    .label-hovered {
        font-weight: bold;
    }

</style>
<script>
  import Header from './components/Header.svelte';
  import Viz from './components/Viz.svelte';
  import Footer from './components/Footer.svelte';
  import MediaQuery from './MediaQuery.svelte';
  import VizMobile from './components/VizMobile.svelte';
  import HeaderMobile from './components/HeaderMobile.svelte';
  import FooterMobile from './components/FooterMobile.svelte';
  import ColorLegendMobile from './components/ColorLegendMobile.svelte';

  let width = 1200;
  let height = 700;

  const colors = {
        "Caffe Nero": "#3fb4c8",
        "Costa": "#b51244",
        "Greggs": "#01568f",
        "Pret": "#6a1b23",
        "Starbucks": "#00704A",
    };

</script>

<main>
    <MediaQuery query="(min-width: 500px)" let:matches>
      {#if matches}
        <Header />
        <div class="viz-container" >
          <Viz {width} {height} />    
        </div>    
        <div class="footer">
          <Footer />
        </div>
      {/if}
    </MediaQuery>
    
    <MediaQuery query="(max-width: 500px)" let:matches>
      {#if matches}
        <HeaderMobile />
        <div class="viz-container" >
          <VizMobile width={400} height={500} />
        </div>

        <div class="color-legend">
          <ColorLegendMobile items={colors} />
        </div>

        <div class="footer">
          <FooterMobile />
        </div>        
      {/if}
    </MediaQuery>         

</main>

<style>
  main {
    height: 100vh;
    padding: 40px;
    min-width: 400px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .color-legend {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
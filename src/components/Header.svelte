<script>
    import coffee from '../assets/coffee.svg';
</script>

<header>
    <p>Caffeine levels in high street coffees</p>
    <div class="divider">
        <div class="img-container">
            <img src="{coffee}" alt="coffee in a cup">
        </div>
    </div>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');

    p {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 2.8rem;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 28px;
        color: #49342d;
    }

    .divider {
        background-color: #49342d;
        height: 1px;
        width: 200px;
        margin: 0 auto;
        position: relative;
        border-radius: 20px;
    }
    
    img {
        width: 40px;
        position: absolute;        
        top: calc(50% - 28px);
        left: calc(50% - 16px);
    }
</style>
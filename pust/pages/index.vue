<template>
    <section class="home">
        <h1>BREATHE. MOVE. CONNECT.</h1>
        <h2>Yoga for every body. Mindful movement in a calmning space.</h2>
        
        <div class="explore">
            <NuxtLink to="/activities">
                Explore our classes
            </NuxtLink>
        </div>
    </section>
    <div>
        <h1>Welcome to Pust</h1>
        <p>This is the Pust Yoga home page!</p>
    </div>
</template>


<style scoped>
section.home {
    background-image: url("/pust_home.jpg");
    background-size: cover;
    background-position: center;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    text-align: center;
}

.home > * {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    margin: 0;
}
.home h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 60px */
    letter-spacing: 6px;
    top: 30%;
}
.home h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 1px;
    top: 42%;
}
.explore {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 62%;
}
.explore a {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    font-style: normal;
    color: white;
    text-decoration: none;
    padding: 15px 50px;
    border-radius: 8px;
    background: #D49277;
}


</style>
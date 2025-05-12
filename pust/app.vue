<template>
    <nav>
        <NuxtLink to="/">
            <img src="public/pust-yoga_logo_cropped.png" alt="Logo" />
        </NuxtLink>
        <ul>
            <li><NuxtLink to="/teachers">TEACHERS</NuxtLink></li>
            <li><NuxtLink to="/activities">ACTIVITIES</NuxtLink></li>
            <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
            <li><NuxtLink to="/contact">CONTACT US</NuxtLink></li>
        </ul>
    </nav>
    <NuxtPage />
</template>

<style>
/* GLOBAL STYLES */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
:root {
    --header-height: 75px;
    --blue: #597ED1;
    --background: rgba(255, 241, 213, 0.90);
    --header-color: #ffffff;
    --font: Inter, Arial, sans-serif;
}

body {
    margin: 0;
    font-family: var(--font);
    background-color: var(--background);
}

.link {
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

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    position: relative;
    height: var(--header-height);
    padding: 0 20px;
    background-color: var(--header-color);
}
nav img {
    height: var(--header-height);
    padding: 4px;
    box-sizing: border-box;
}
nav ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: flex-end;
}
nav ul a {
    display: inline-block;
    text-decoration: none;
    padding: 0 20px;
    transition: background-color 0.3s, color 0.3s;

    /* Figma styles */
    color: var(--blue);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--header-height);
}
nav a:hover {
    background-color: #f0f0f0;
    color: #000;
}
</style>

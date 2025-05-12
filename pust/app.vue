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
:root {
    --header-height: 50px;
    --blue: #597ED1;
    --background: #FFF1D5E5;
}

body {
    margin: 0;
    font-family: Inter, Arial, sans-serif;
}
</style>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    position: relative;
    height: var(--header-height);
    padding: 0 20px;
}
nav img {
    height: var(--header-height);
    padding: 4px;
    box-sizing: border-box;
}
nav ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: flex-end;
}
nav ul a {
    display: inline-block;
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s, color 0.3s;

    /* Figma styles */
    color: var(--blue);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}
nav a:hover {
    background-color: #f0f0f0;
    color: #000;
}
</style>

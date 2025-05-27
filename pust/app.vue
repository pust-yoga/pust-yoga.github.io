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
    <footer>
        <h2>PUST YOGA</h2>
        <div>
            <div>
                <p>Find balance through breath, movement, and mindfulness. 
                    <br>We offer yoga classes for all levels – from beginners to advanced practitioners.</p>
                <p>Step into a calm and welcoming space to reconnect with yourself.</p>
                <p>🌿 🧘 ✨</p>
                <div class="socials">
                    <a href="https://instagram.com">
                        <img src="/socials-insta.png" alt="Instagram" />
                    </a>
                    <a href="https://facebook.com">
                        <img src="/socials-fb.png" alt="Facebook" />
                    </a>
                    <a href="https://youtube.com">
                        <img src="/socials-yt.png" alt="Youtube" />
                    </a>
                </div>
            </div>
            <div class="links">
                <div>
                    <NuxtLink to="/about">About PUST YOGA</NuxtLink>
                    <NuxtLink to="/contact">Contact Us</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
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
    background-color: #D49277;
    display: inline-block;
    transition: background-color .3s;
}
.link:hover {
    background-color: #CB765A;
}
@property --card-gradient-1 {
    syntax: "<color>";
    inherits: false;
    initial-value: white;
}
@property --card-gradient-2 {
    syntax: "<color>";
    inherits: false;
    initial-value: white;
}
.card-hover {
    background: linear-gradient(var(--card-gradient-1), var(--card-gradient-2)) !important;
    transition: --card-gradient-1 0.3s, --card-gradient-2 0.3s, border 0.3s;
    border: 1px solid transparent;
}
.card-hover:hover {
    --card-gradient-1: #F5F8FE;
    --card-gradient-2: #E3ECFF;
    border: 1px solid #597ED1;
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
nav a {
    transition: background-color 0.3s, color 0.3s;
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

footer {
    background-color: white;
    padding: 50px 100px;
}

footer h2 {
    margin: 0 0 10px 0;
    color: #2E3A59;
    font-size: 24px;
    font-weight: 700;
}

footer > div {
    display: flex;
    flex-direction: row;
}

footer > div > div {
    flex: 1;
}

footer p {
    color: #445277;
    font-size: 18px;
}

footer .socials {
    display: flex;
    flex-direction: row;    
    gap: 20px;
}

footer .socials img {
    width: 35px;
    height: 35px;
    transition: transform 0.3s;
}

footer .socials img:hover {
    transform: scale(1.1);
}

footer .links {
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer .links a {
    display: block;
    color: #445277;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 0;
    text-decoration: none;
    margin-bottom: 20px;
}

</style>

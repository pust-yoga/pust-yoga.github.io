<template>
  <nav>
    <NuxtLink to="/">
      <img src="public/pust-yoga_logo_cropped.png" alt="Logo" />
    </NuxtLink>
    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>
    <ul :class="{ open: menuOpen }">
      <li><NuxtLink to="/teachers">TEACHERS</NuxtLink></li>
      <li><NuxtLink to="/activities">ACTIVITIES</NuxtLink></li>
      <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
      <li><NuxtLink to="/contact">CONTACT US</NuxtLink></li>
    </ul>
  </nav>

  <div class="nav-margin"></div>
  <Breadcrumbs />

  <NuxtPage />

  <footer>
    <h2>PUST YOGA</h2>
    <div class="footer-content">
      <div>
        <p>
          Find balance through breath, movement, and mindfulness.
          <br />We offer yoga classes for all levels – from beginners to
          advanced practitioners.
        </p>
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

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
/* GLOBAL STYLES */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
:root {
  --header-height: 75px;
  --blue: #597ed1;
  --background: rgba(255, 241, 213, 0.9);
  --header-color: #ffffff;
  --font: Inter, Arial, sans-serif;
  --breadcrumb-height: 75px;
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
  background-color: #d49277;
  display: inline-block;
  transition: background-color 0.3s;
}
.link:hover {
  background-color: #cb765a;
}

@property --card-gradient-1 {
  syntax: '<color>';
  inherits: false;
  initial-value: white;
}
@property --card-gradient-2 {
  syntax: '<color>';
  inherits: false;
  initial-value: white;
}
.card-hover {
  background: linear-gradient(
    var(--card-gradient-1),
    var(--card-gradient-2)
  ) !important;
  transition: --card-gradient-1 0.3s, --card-gradient-2 0.3s, border 0.3s;
  border: 1px solid transparent;
}
.card-hover:hover {
  --card-gradient-1: #f5f8fe;
  --card-gradient-2: #e3ecff;
  border: 1px solid #597ed1;
}
</style>

<style scoped>
.router-link-active {
  font-weight: 700;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: var(--header-height);
  padding: 0 20px;
  background-color: var(--header-color);
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
}

nav img {
  height: var(--header-height);
  padding: 4px;
  box-sizing: border-box;
}

.menu-toggle {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 10px;
}

nav ul li {
  margin: 0;
}
nav ul a {
  text-decoration: none;
  color: var(--blue);
  font-size: 20px;
  font-weight: 400;
  line-height: var(--header-height);
  padding: 0 20px;
}

.nav-margin {
  height: var(--header-height);
}


/* FOOTER STYLE  */
footer {
  background-color: white;
  padding: 50px 100px;
}

footer h2 {
  margin: 0 0 10px 0;
  color: #2e3a59;
  font-size: 24px;
  font-weight: 700;
}

.footer-content {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.footer-content > div {
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
  margin-top: 10px;
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
  color: #445277;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  text-decoration: none;
  margin-bottom: 20px;
}
/* MOBILE VIEW STYLE  */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav ul {
    position: absolute;
    top: var(--header-height);
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: var(--header-color);
    display: none;
    padding: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  nav ul.open {
    display: flex;
  }

  nav ul li {
    border-top: 1px solid #eee;
  }

  nav ul a {
    padding: 15px 20px;
    line-height: 1.5;
    font-size: 18px;
  }

  footer {
    padding: 40px 20px;
  }

  .footer-content {
    flex-direction: column;
    gap: 20px;
  }

  footer .links {
    align-items: flex-start;
  }
}
</style>

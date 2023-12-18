<template>
  <div>
    <header>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      <nuxt-img src="/the real one.png" class="logo" alt="mylogo" />
      <button @click="toggleMenu" class="hamburger-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </header>
    <nav class="navbar" :class="{ 'show-menu': isMenuOpen }" ref="menu">
      <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <Nuxt-link class="home-style" @click="toggleMenu" to="/">Home</Nuxt-link>
        <Nuxt-link class="about-style" @click="toggleMenu" to="/about">About</Nuxt-link>
        <Nuxt-link class="contact-style" @click="toggleMenu" to="/contact">Contact</Nuxt-link>
      </div>
      <div class="linkedin"></div>
    </nav>
    <section>
      <div class="About-me">
        <h2>Hello, I'm Georgi Karchev, 17 years old from Plovdiv. Programming is my passion, and I want to develop it professionally. My goal is to create something unique and personal in the field of software development. I actively search opportunities for learning, practice, and connecting with new people who share similar interests.</h2>
      </div>
    </section>

    <section>
      <div class="Contact-me">
        <h1>Contact Me</h1>
      </div>
    </section>
  </div>
</template>

<style lang="css">
body {
  background: #18191d;
}

.logo {
  width: 5rem;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
}
.nav-links {
  display: none;
}

.show-menu .nav-links a {
  margin-bottom: 20px;
  text-decoration: none;
  color: white;
  font-size: 24px;
  transition: 0.3s;
}

.show-menu .nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 30vh;
  background-color: rgba(39, 40, 44, 0.582);
  width: 100%;
  z-index: 999;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: translateX(0%);
}

.show-menu .nav-links a:hover {
  color: #48bb78;
}

.navbar.show-menu {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
}

.hamburger-btn.active .bar:nth-child(1),
body.menu-active .hamburger-btn .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger-btn.active .bar:nth-child(2),
body.menu-active .hamburger-btn .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .bar:nth-child(3),
body.menu-active .hamburger-btn .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.hamburger-btn .bar {
  transition: 0.4s;
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

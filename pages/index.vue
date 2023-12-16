<template>
  <div>
    <header>
      <nuxt-img src="/the real one.png" class="logo" alt="mylogo" />
      <button @click="toggleMenu" class="hamburger-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </header>
    <nav class="navbar">
      <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
  <Nuxt-link class="home-style" @click="toggleMenu" to="/">Home</Nuxt-link>
  <Nuxt-link class="about-style" @click="toggleMenu" to="/about">About</Nuxt-link>
  <Nuxt-link class="contact-style" @click="toggleMenu" to="/contact">Contact</Nuxt-link>
</div>
      <div class="linkedin">

      </div>
    </nav>
    <section>
      <div class="About-me">
        <h2>Hello, I'm Georgi Karchev, 17 years old from Plovdiv. Programming is my passion, and i want to develop it professionally. My goal is to create something unique and personal in the field of software development. I actively search opportunities for learning, practice, and connecting with new people who share similar interests.</h2>
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
    

/* Бутона */

.hamburger-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
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

  .show-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 70px;
    right: 20px;
    background-color: #18191d;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .nav-links a {
    margin-bottom: 10px;
    text-decoration: none;
    color: white;
    font-size: 18px;
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

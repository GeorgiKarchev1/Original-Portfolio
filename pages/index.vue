<template>
  <div>
    <Header />
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




</style>

<script>
import Header from '~/components/Header.vue';

export default {
  components: { 
    Header,
  },
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

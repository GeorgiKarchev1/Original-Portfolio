<template>
  <div>
    <Header />
    <Georgi />
    <About />
    <Contact />
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
/* Components */
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Contact from '~/components/Contact.vue';
import Georgi from '~/components/Georgi.vue';
export default {
  components: { 
    Header,
    About,
    Contact,
    Georgi,
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

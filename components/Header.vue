<template>
  <header>
    <nuxt-img src="/the real one.png" class="logo" alt="mylogo" />
    <button @click="toggleMenu" class="hamburger-btn">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <nav class="navbar" :class="{ 'show-menu': isMenuOpen }" ref="menu">
      <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <Nuxt-link class="home-style"  to="/">Home</Nuxt-link>
        <Nuxt-link @click="scrollToSection('about-me-section')" class="about-style" >About</Nuxt-link>
        <Nuxt-link @click="scrollToSection('contact-section')" class="contact-style" >Contact</Nuxt-link>
      </div>
    </nav>
  </header>
</template>

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
      document.body.classList.toggle('menu-active', this.isMenuOpen);
    },

    scrollToSection(sectionId) {
      this.isMenuOpen = false;
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        this.$nextTick(() => {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
          });
        });
      }
    },
  },
};
</script>
<style scoped>
.navbar {
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
  text-decoration: none;
  color: white;
  font-size: 24px;
  transition: 0.3s;
  display: block;
}

.nav-links a:hover {
  color: green;
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
  z-index: 1000;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: translateX(0%);
}

.navbar.show-menu {
  height: 100vh;
  position: fixed;
  z-index: 1;
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



@media screen and (min-width: 856px) {
  .hamburger-btn {
    display: none; /* Скрива hamburger бутона */
  }

  .nav-links {
    display: flex !important; /* Променя стиловете за линковете, за да станат видими */
    flex-direction: row;
    align-items: center;
    justify-content: flex-end; /* Поставя линковете в десния ъгъл */
    position: static;
    background-color: transparent;
    box-shadow: none;
    height: auto;
    width: auto;
    transform: none;
  }
 
  .navbar.show-menu {
    height: auto;
    position: static;
    
  }

  .nav-links a {
    font-size: 1.3rem;
    color: white; /* Задава цвета на линковете на бяло */
    text-decoration: none; /* Премахва подчертаването под линковете */
    padding: 10px; /* Добавя вътрешен падинг за по-добро пространство */
  }

  .nav-links a:hover {
    color: green; /* Променя цвета при ховър, както вашият оригинален стил */
  }

  .navbar.show-menu .nav-links {
    display: none; /* Скрива линковете, когато менюто е активирано */
  }
}



</style>

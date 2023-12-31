<template>
  <div>
    <head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <section class="intro">
      <div class="intro-text">
        <h1 class="name left">GEORGI</h1>
        <h1 class="name right">KARCHEV</h1>
      </div>
        <div class="social-buttons" data-aos="zoom-in-down">
          <button @click="goToGitHub" class="social-button"><Icon name="uil:github"/></button>
          <button @click="goToLinkedIn" class="social-button"><Icon name= "mdi:linkedin" /></button>
          <button @click="goToEmail" class="social-button"><Icon name="material-symbols:mail-sharp" /></button>
          <button @click="goToInstagram" class="social-button"><Icon name="mdi:instagram" /></button>
    </div>
    </section>
  </div>
</template>

<style lang="css">
.intro {
  display: flex;
  font-size: 4rem;
  align-items: center;
  flex-direction: column;
  padding-block: 7rem;
  color: white;
  line-height: 4rem;
}

.right {
  padding-left: 7rem;
}

.name {
  white-space: nowrap; 
}

@media screen and (max-width: 770px) {
  .left {
    animation: slide-in-left 1s ease-out; 
  }
}

@media screen and (max-width: 770px) {
  .right {
    animation: slide-in-right 1s ease-out; 
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Стилове за бутоните*/

.social-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.social-button {
  border: none;
  border-radius: 50%; /* Радиус на бутоните - прави ги кръгли */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-button:hover {
  transform: scale(1.1); /* Увеличаване на размера при хофвър */
}

/* Стилове за иконките във бутоните */
.social-button svg {
  fill: white; /* Цвят на иконките */
  width: 40px; /* Ширина на иконките */
  height: 40px; /* Височина на иконките */
}

.social-button {
    padding: 5px; /* Променете размера на бутоните при по-малък екран, ако е необходимо */
    margin: 10px; /* Променете разстоянието между бутоните при по-малък екран */
  }


  @media screen and (max-width: 614px) {
    .intro-text {
      font-size: 3.5rem;


    }
}

@media screen and (max-width: 546px) {
    .intro-text {
      font-size: 3.2rem;


    }
}

@media screen and (max-width: 507px) {
  .intro-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.5rem;
}

.right {
  padding-left: 1rem;
}

}

@media screen and (max-width: 397px) {
  .intro-text {
    line-height: 0.2rem;
    font-size: 2.5rem;
}

.right {
  padding-left: 0.5rem;
}

}




</style>

<script>
export default {
  methods: {
    goToGitHub() {
      // Пренасочване към GitHub
      window.location.href = 'https://github.com/GeorgiKarchev1';
    },
    goToLinkedIn() {
      // Пренасочване към LinkedIn
      window.location.href = 'https://www.linkedin.com/in/твой-потребител';
    },
    goToEmail() {
      // Пренасочване към имейл
      window.location.href = 'mailto:georgikarchev5@gmail.com';
    },
    goToInstagram() {
      // Пренасочване към Instagram
      window.location.href = 'https://www.instagram.com/georgi_karchev/';
    },
  },
};
</script>

<template>
  <div>
    <head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <section class="intro">
      <div class="intro-text">
        <h1 class="name left">GEORGI</h1>
        <h1 class="name right">KARCHEV</h1>
        <div class="social-buttons">
          <button @click="goToGitHub" class="social-button"><Icon name="uil:github"/></button>
          <button @click="goToLinkedIn" class="social-button"><Icon name="bi:linkedin" /></button>
          <button @click="goToEmail" class="social-button"><Icon name="material-symbols:mail-sharp" /></button>
          <button @click="goToInstagram" class="social-button"><Icon name="mdi:instagram" /></button>
    </div>
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
  padding: 20px; /* Променете размера на бутоните */
  margin: 10px; /* Променете разстоянието между бутоните */
  border-radius: 50%; /* Радиус на бутоните - прави ги кръгли */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-button:hover {
  background-color: #0056b3; /* Пример за нов цвят на фона при хофвър */
  transform: scale(1.1); /* Увеличаване на размера при хофвър */
}

/* Стилове за иконките във бутоните */
.social-button svg {
  fill: white; /* Цвят на иконките */
  width: 40px; /* Ширина на иконките */
  height: 40px; /* Височина на иконките */
}

.social-button {
    padding: 15px; /* Променете размера на бутоните при по-малък екран, ако е необходимо */
    margin: 5px; /* Променете разстоянието между бутоните при по-малък екран */
  }


</style>

<script>

</script>

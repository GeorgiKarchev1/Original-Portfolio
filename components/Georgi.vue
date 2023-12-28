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
  white-space: nowrap; /* Задължително, за да се задържи текста на един ред */
}

/* Анимация за GEORGI при екрани с ширина по-малка от 770 пиксела */
@media screen and (max-width: 770px) {
  .left {
    animation: slide-in-left 1s ease-out; /* Промени продължителността и типа на анимацията, ако е необходимо */
  }
}

/* Анимация за KARCHEV при екрани с ширина по-малка от 770 пиксела */
@media screen and (max-width: 770px) {
  .right {
    animation: slide-in-right 1s ease-out; /* Промени продължителността и типа на анимацията, ако е необходимо */
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
</style>

<script>

</script>

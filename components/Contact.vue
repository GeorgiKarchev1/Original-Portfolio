<template>
  <div>
    <section id="contact-section" class="pastrak">
      <div data-aos="fade-up" class="Contact-me">
        <h1>Get in Touch</h1>
        <h3>
          Here's a quick summary of what I bring to the table. If you think my
          skills align with your project needs, let's chat.
        </h3>
        <div class="pismo-container" data-aos="fade-left">
        <img src="/green.png" class="pismo" alt="img-of-letter" />
        <h3 class="mail">Mail me</h3>
        <h3 class="mail-text">georgikarchev5@gmail.com</h3>
        </div>
        <div class="button-container">
          <button class="linkedin" @click="goToLinkedIn">LinkedIn</button>
          <button class="instagram" @click="goToInstagram">Instagram</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css">
  .pastrak {
    /* background: #3b3d47;
    width: 100%; */
    /* background-color: #2f3139; */
  }

 h3 {
    font-size: 1rem;
    text-align: center;
  }

  .Contact-me {
    display: flex;
    color: white;
    font-size: 1.7rem;
    max-width: 50rem;
    margin-inline: auto;
    padding-inline: 1rem;
    padding-bottom: 7rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 1.5rem;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem; /* Преместили сме margin-top от .instagram и .linkedin тук */
  }

  .linkedin,
  .instagram {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: 2px solid #ffffff; /* Цвят на рамката на бутона */
    background-color: transparent; /* Прозрачен фон */
    color: #ffffff; /* Цвят на текста на бутона */
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
  }

  .linkedin:hover,
  .instagram:hover {
    background-color: #ffffff; /* Променен цвят на фона при ховър */
    color: #000000; /* Променен цвят на текста при ховър */
  }

  .pismo {
     width: 10rem;
  }
  
  .pismo-container {
    display: flex;
    flex-direction: column;
    align-items: center ;
  }
    .mail {
      font-size: 2rem;
      margin: 0;
    }
    .mail-text {
    }

    @media (min-width: 544px) {
    .button-container {
      display: flex;
      margin-top: 0; /* Нулиране на margin-top */
      justify-content: space-around;
    }
  }



</style>

<script>
export default {
  methods: {
    goToLinkedIn() {
      window.open('https://www.linkedin.com', '_blank');
    },
    goToInstagram() {
      window.open('https://www.instagram.com/georgi_karchev/', '_blank');
    },
  },
};
</script>
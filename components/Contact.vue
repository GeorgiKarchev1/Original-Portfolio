<template>
    <div >
  <section id="contact-section" class="pastrak">
    <div data-aos="fade-up" class="Contact-me">
      <h1>Get in Touch</h1>
      <h3>Here's a quick summary of what I bring to the table. If you think my skills align with your project needs, let's chat.</h3>
      <button class="linkedin" @click="goToLinkedIn">Visit LinkedIn</button>
      <button class="instagram" @click="goToInstagram">Visit Instagram</button>
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
      font-size: 1rem ;
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

 .linkedin {
  margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: 2px solid #ffffff; /* Цвят на рамката на бутона */
    background-color: transparent; /* Прозрачен фон */
    color: #ffffff; /* Цвят на текста на бутона */
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
 }

  .linkedin:hover {
    background-color: #ffffff; /* Променен цвят на фона при ховър */
    color: #000000; /* Променен цвят на текста при ховър */
  }



  </style>
  
  <script>
 export default {
  methods: {
    goToLinkedIn() {
      window.open('https://www.linkedin.com', '_blank');
    },
    goToInstagram() {
      // Заменете 'YOUR_INSTAGRAM_PROFILE_URL' със своя Instagram профил URL
      window.open('https://www.instagram.com/georgi_karchev/', '_blank');
    },
    
  },
};
  </script>
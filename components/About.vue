<template>
    <div>
      <section class="pedal">
        <img data-aos="fade-right" src="../assets/strak2.png" class="strak" alt="img of me "/>
        <div data-aos="fade-left" class="About-me">
          <h2 data-aos="zoom-in-up" class="me">About Me</h2>
          <h3 class="text">Hello, I'm Georgi Karchev, 17 years old from Plovdiv. Programming is my passion, and I want to develop it professionally. My goal is to create something unique and personal in the field of software development. I actively search opportunities for learning, practice, and connecting with new people who share similar interests.</h3>
        </div>
        </section>
    </div>
  </template>
  
  <style lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600&family=Open+Sans:ital,wght@0,700;0,800;1,700&family=Work+Sans:wght@300&display=swap');
        .About-me {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            max-width: 50rem;
            padding-inline: 1.5rem;
            
        }
        .pedal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-block: 5rem;
        position: relative;
      }
      .pedal::before {
       content: "";
       position: absolute;
       top: 4rem;
       left: 50%;
       transform: translateX(-50%);
       width: 80%;
       height: 4px;
       background-color: #ffffff; /* Цвят на линията */
      }

        .pedal::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 4px;
        background-color: #ffffff; /* Цвят на линията */
       }

        .strak {
            max-width: 20rem;
            border-radius: 2.5rem 0px;
        }
        
        .me {
          margin-bottom: 1rem;
          color: white;
          font-size: 2.5rem;
        }

        .text {
          font-size: 1.2rem; 
          line-height: 1.5;
          text-align: center; 
          margin-top: 1rem; 
        }


  </style>
  
  <script>

  </script>
 
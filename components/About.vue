<template>
    <div>
      <section id="about-me-section" class="pedal">
        <hr class="line"  data-aos="fade-left"/>
        <div data-aos="fade-left" class="About-me">
          <img src="../assets/strak2.png" class="strak" alt="img of me " data-aos="fade-up-right"/>
          <div class="text-container">
          <h2 data-aos="zoom-in-up" class="me">About Me</h2>
          <h3 class="text" data-aos="zoom-in-up">Hello, I'm Georgi Karchev, 17 years old from Plovdiv. Programming is my passion, and I want to develop it professionally. My goal is to create something unique and personal in the field of software development. I actively search opportunities for learning, practice, and connecting with new people who share similar interests.</h3>
        </div>
        </div>
        <hr class="line" data-aos="fade-left" />

        </section>
    </div>
  </template>
  
  <style lang="css">
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
        padding-block: 3rem;
        position: relative;
      }


      .line {
       width: 80%;
       height: 2px;
       background-color: #ffffff; /* Цвят на линията */
       margin: 2rem 0; /* Променете според вашите нужди */
      }
      /* .pedal::before {
       content: "";
       position: absolute;
       top: 4rem;
       left: 50%;
       transform: translateX(-50%);
       width: 80%;
       height: 4px;
       background-color: #ffffff; /* Цвят на линията
      }
       */
       
       
        /* .pedal::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 4px;
        background-color: #ffffff; /* Цвят на линията 
        }*/
       

        .strak {
            max-width: 20rem;
            border-radius: 2.5rem 0px;
        }
        
        .me {
          margin-bottom: 1rem;
          color: white;
          font-size: 2.5rem;
          order: 1;
        }

        .text {
          font-size: 1.2rem; 
          line-height: 1.5;
          text-align: center; 
          margin-top: 1rem; 
          order: 2;
        }


        .text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
       
        @media screen and (min-width: 856px) {
       
          .About-me {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .strak {
    margin-right: 2rem;
    margin-left: 0;
  }

  

  .text-container {
    order: 1; /* Преместваме .text-container горе */
    align-self: flex-start; /* Поставяме .text-container отново отгоре */
  }

  
        }
  </style>
  
  <script>
 
  </script>
 
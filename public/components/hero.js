class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          .hero {
            width: 100vw;
            height: 100vh;
            // margin-top: -5.5rem;
          }
          
          .hero-container {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            background-color: #1a1a1a;
          }
          
          .hero-text {
            display: flex;
            justify-content: center;
            min-width: 30%;
            flex-direction: column;
            padding-left: 8rem;
          }
          
          .hero-header {
            display: inline-block;
            color: #ffffff;
            text-transform: capitalize;
            font-family: "Open Sans", sans-serif;
            font-size: 2rem;
            // margin-bottom: 13rem;
          }
          
          /* Type text */
          .text-container {
            height: 6rem;
            color: #ffffff;
            text-transform: capitalize;
            font-size: 2.5rem;
            position: relative;
            z-index: 100;
            margin-bottom: -10rem;
            font-weight: 800;
          }
          
          .cursor {
            display: inline-block;
            width: 0.3rem;
            height: 2.5rem;
            vertical-align: bottom;
            background-color: #f6f6f6;
            animation: blink 0.2s infinite;
          }
          
          @keyframes blink {
            0% {
              opacity: 0;
            }
          
            50% {
              opacity: 1;
            }
          
            100% {
              opacity: 0;
            }
          }
          
          .hero-img {
            width: 70vw;
            height: 100vh;
            position: absolute;
            right: 0;
            z-index: 1;
          }
          
          .hero-img::after {
            width: 100%;
            height: 100%;
            content: "";
            display: table;
            background-color: #084c2f50;
          }
        </style>
        <section class="hero">
          <div class="hero-container">
            <div class="hero-text">
              <h2 class="hero-header">
                
              </h2>

              <div class="text-container" id="text-container"></div>
            </div>
            <div class="hero-img"></div>
          </div>
        </section>
      `;
  }
}

customElements.define("hero-component", Hero);

class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <style>
            // Nav
            * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            }
            .header {
                width: 100vw;
                height: 5.5rem;
                position: absolute;
                top: 0;
                left: 0;
                z-index:1000
            }
            .nav {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                // padding-top: 1.5rem;
                align-items: center;
                position: relative;
                // z-index: 10;
                padding-left: 6rem;
                padding-right: 2rem;
            }
            
            .nav-img {
                width: 10rem;
                /* margin-left: 8rem; */
            }
        
            .nav-img img {
                width: 100%;
            }
            
            .nav-items {
                width: 60%;
                padding-right: 4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .nav-items ul {
                list-style-type: none;
                display: flex;
                justify-content: space-between;
                width: 70%;
            }
            
            .nav-item {
                display: inline-block;
            }

            .nav-link {
              padding: 0.5rem 0.8rem;
            }

            .nav-link.active {
              background-color: #084c2e;
            }
            
            .nav-link,
            .nav-cta a {
                text-decoration: none;
                color: #ffffff;
                letter-spacing: 0.1rem;
                font-family: "Work Sans", sans-serif;
                /* font-weight: 00; */
                transition: all 0.3s;
            }
            
            .nav-link:hover:not(.active) {
                background-color: #084c2e;
                font-weight: 600
            }
            
            
            .nav-cta {
                margin-left: 2rem;
            }
            
            // .nav-cta:hover {
            //     // background-color: #f6f6f6;
            //     // color: #084c2e;
            //     // border: 1px solid #084c2e;
            //     transform: translateY(-3px)
            // }

            .cta-link:link,
            .cta-link:visited {
              text-transform: capitalize;
              text-decoration: none;
              display: inline-block;
              background-color: #084c2e;
              color: #ffffff;
              padding: 0.8rem 1.2rem;
              border-radius: 2rem;
              font-family: "Open Sans", sans-serif;
              transition: all .2s;
              position: relative;
            }

            .cta-link:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 20px #084c2e
            }
            .cta-link:active {
              transform: translateY(-1px);
              box-shadow: 0 5px 10px #084c2e
            }

            .cta-link::after {
              content: "";
              display: inline-block;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #084c2e;
              z-index: -1;
              border-radius: 2rem;
              transition: all .4s
            }

            .cta-link:hover::after {
              transform: scaleX(1.4) scaleY(1.6);
              opacity: 0;
            }

            // .hero {
            //   width: 100vw;
            //   height: 100vh;
            //   // margin-top: -5.5rem;
            // }

            .nav-toggle {
              width: 2.9rem;
              height: 2.9rem;
              // background-color: red;
              display: none;
              flex-direction: column;
              justify-content: space-between;
              cursor: pointer;
              padding: 0.7rem;
              border-radius: 50%;
              transition: all 0.8s;
              position: relative;
              z-index: 10000;
              transition: all 0.5s;
            }

            .nav-toggle:hover {
              background-color: #f1f1f16e;
            }

            .toggle-bar {
              width:100%;
              height: 10%;
              background-color: #fff;
              transform: translateX(0);
              transition: all 0.5s;
              position: relative;
              // animation-duration: 1s;
            }

            @keyframes toggle2 {
              0% {
                transform: rotateZ(0);
              }

              80% {
                transform: rotateZ(90deg);
              }

              100% {
                transform: rotateZ(45deg);
              }
            }

            @keyframes deactivateToggle2 {
              0% {
                transform: rotateZ(45deg);
              }

              80% {
                transform: rotateZ(90deg);
              }

              100% {
                transform: rotateZ(0);
              }
            }

            @keyframes toggle {
              0% {
                transform: translate(-50%, -50%);
              }

              100% {
                transform: translate(-50%, -50%) rotateZ(-90deg);
              }
              
              // 100% {
              //   transform: translate(-50%, -50%) rotateZ(45deg);
              // }
            }
            
            @keyframes deactivateToggle {
              0% {
                transform: translate(-50%, -50%) rotateZ(-90deg);
              }

              100% {
                transform: translate(-50%, -50%);
              }
              
              // 100% {
              //   transform: translate(-50%, -50%) rotateZ(45deg);
              // }
            }

            .toggle-bar-2.toggle-active {
              animation-name: toggle2;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            
            .toggle-bar-2.toggle-active.deactivate {
              animation-name: deactivateToggle2;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              // animation-direction: reverse;
            }

            .toggle-bar-2::after {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              content: "";
            }
            
            .toggle-bar-2.toggle-active::after {
              background-color: #fff;
              animation-name: toggle;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            
            .toggle-bar-2.toggle-active.deactivate::after {
              background-color: none;
              animation-name: deactivateToggle;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              // animation-direction: reverse !important;
            }
            
            .hero-container {
                width: 100vw;
                height: 100vh;
              position: relative;
              display: flex;
              background-color: #1a1a1a;
              flex-direction: column;
            }

            .hero-content {
                width: 100%;
                height: calc(100vh - 5.5rem);
                display: flex;
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
              background-color: #084c2f73;
            }

            @media screen and (max-width: 1400px) {
              .hero-header {
                font-size: 1.5rem;
              }

              .hero-text {
                padding-left: 5rem;
              }

              .nav {
                padding-left: 5rem;
              }

              .nav-items {
                width: 70%;
                padding-right: 3rem;
              }
            
            }

            @media screen and (max-width: 1200px) {
                .nav-link, .nav-cta a {
                  font-size: 0.8rem;
              }
            }
            
            @media screen and (max-width: 1000px) {
              .nav {
                padding-left: 3rem;
              }

              .nav-img {
                width: 8rem;
              }

              .nav-items {
                padding-right: 0rem;
              }

              .nav-cta {
                margin-left: 0; 
              }

              .nav-cta a {
                padding: 0.6rem;
              }

              .nav-link, .nav-cta a {
                font-size: 0.7rem;
              }

              .hero-img {
                  width: 100vw;
              }

              .hero-header {
                z-index: 100;
                position: absolute;
                left: 50%;
                top: 30%;
                transform: translateX(-50%);
                font-size: 2.6rem;
                line-height: 4.5rem;
              }

              .text-container {
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                font-size: 3rem;
                text-align: center;
              }
            }

            @media screen and (max-width: 750px) {
              .hero-header {
                width: 100%;
                text-align: center;
              }

              .text-container {
                font-size: 2.5rem;
              }
            }
            
            @media screen and (max-width: 550px) {
              .hero-container {
                height: 100vh !important;
              }

              .hero-img {
                height: 100%;
              }

              .hero-header {
                font-size: 1.8rem;
                top:25%;
              }

              .text-container {
                font-size: 2rem;
              }
            }
            
            }
          </style>
                        
        <div class="hero-container">
            <header class = "header">
                <nav class="nav">
                    <div class="nav-img">
                        <a href = "index.html"><img src="img/Logo.png" alt="Mercho" /></a>
                    </div>
                    <div class="nav-items">
                        <ul>
                            <li class="nav-item">
                                <a href="works.html" class="nav-link">Works</a>
                            </li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="services.html" class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>
                        <a class="cta-link" href="#">Book a session</a>
                    </div>
                    <div class = "nav-toggle">
                      <div class = 'toggle-bar toggle-bar-1'></div>
                      <div class = 'toggle-bar toggle-bar-2'></div>
                      <div class = 'toggle-bar toggle-bar-3'></div>
                    </div>
                </nav>
            </header> 
            <div class = "hero-content">
                <div class="hero-text">
                </div>
                <div class="hero-img"></div>        
            </div>
        </div>
        `;
  }
}

customElements.define("hero-component", Hero);

class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .hero-container {
                    width: 100vw;
                    height: 100vh;
                    background-color: #1a1a1a;
                }

                .header {
                    width: 100vw;
                    height: 5.5rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    transition: all 1s;
                }

                .header.sticky {
                    position: fixed;
                    top: 0;
                    left: 0
                }

                .nav {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    padding-left: 6rem;
                    padding-right: 2rem;
                }

                .nav.flex-end {
                    justify-content: flex-end
                }
                
                .nav-img {
                    width: 10rem;
                    z-index: 10000;
                }
            
                .nav-img img {
                    width: 100%;
                }
                
                .nav-items {
                    // width: 60%;
                    padding-right: 4rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .nav-items ul {
                    list-style-type: none;
                    display: flex;
                    justify-content: space-between;
                }
                
                .nav-item {
                    display: inline-block;
                    margin-right: 2.5rem
                }
    
                .nav-link {
                  padding: 0.5rem 0.8rem;
                }
    
                .nav-link.active {
                  background-color: #084c2e;
                }

                .nav-hidden-link.active {
                    color: #084c2e !important;
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
                  margin-left: 3rem;
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

                .nav-hidden {
                    width: 100vw;
                    height: calc(100vh - 5rem);
                    position: absolute;
                    top: 5.5rem;
                    left: 0;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transform: translateY(-100%);
                    transition: all 1s;
                    background-color: #1a1a1a;
                    opacity: 0;
                    visibility: hidden;
                    // display: none;
                }

                .nav-hidden ul {
                    list-style-type: none;
                }
                  
                .nav-hidden ul li {
                    margin-bottom: 2rem;
                    text-align: center;
                } 

                .nav-hidden.show {
                    transform: translateY(-2px);
                    opacity: 1;
                    display: flex;
                    visibility: visible;
                }

                .nav-hidden-link:link,
                .nav-hidden-link:visited {
                    color: #fff;
                    text-decoration: none;
                    font-family: "open sans", sans-serif;
                    text-transform: uppercase;
                    font-size: 2rem;
                    letter-spacing: 0.2rem;
                    position: relative;
                    transition: all 0.5s;
                }

                .nav-hidden-link:after {
                    width: 0;
                    height: 100%;
                    content: "";
                    display: table;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-bottom: 2px solid #084c2e;
                    transition: all 0.5s;
                }

                .nav-hidden-link:hover::after, .nav-hidden-link.active::after {
                    width: 100%;
                    /* display: table; */
                }

                .nav-hidden-link:hover {
                    color: #084c2e;
                }

                
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

                .hero-content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                }
                
                .hero-text {
                  display: flex;
                  justify-content: center;
                  min-width: 30%;
                  flex-direction: column;
                  padding-left: 8rem;
                  z-index: 2;
                }
                
                .hero-header {
                  display: inline-block;
                  color: #ffffff;
                  text-transform: capitalize;
                  font-family: "Open Sans", sans-serif;
                  font-size: 2rem;
                  // margin-bottom: 13rem;
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
                      padding-left: 4rem;
                    }
      
                    .nav {
                      padding-left: 5rem;
                    }
      
                    .nav-items {
                      padding-right: 3rem;
                    }
                  
                }
      
                @media screen and (max-width: 1200px) {
                    .nav-link, .nav-cta a {
                        font-size: 0.8rem;
                    }
                    .nav {
                        padding-left: 4rem;
                    }
                    .nav-item {
                        margin-right: 2rem;
                    }
                    .nav-items {
                        margin-right: 2rem;
                        padding-right: 0;
                    }
                    .cta-link:link, .cta-link:visited {
                        margin-left: 1.5rem;
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
                        margin-right: 0; 
                        padding-right: 0;
                        width: 70%;
                    }

                    .nav-item {
                        margin-right: 1rem;
                    }

                    .cta-link:link, .cta-link:visited {
                        margin-left: 0;
                        font-size: 0.7rem;
                        min-width: 6rem;
                        padding: 0.7rem 0.5rem;
                    }

                }
      
                @media screen and (max-width: 750px) {
                    .nav-items {
                        display: none !important;
                    }
                    .nav-toggle {
                        display: flex !important;
                    }
                    .hero-img {
                        width: 100vw;
                    }
                    .hero-text {
                        padding-left: 0;
                        margin: 0 auto;
                    }
                    .nav {
                        padding-left: 2rem;
                        padding-rightt: 2rem;
                    }
                    .hero-header {
                        font-size: 2rem;
                    }
                }
                
                @media screen and (max-width: 550px) {

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
                          <a class="cta-link" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/yaqubabdallah/free-consultation'});return false;">Book a session</a>
                      </div>
                      <div class="nav-toggle">
                        <div class='toggle-bar toggle-bar-1'></div>
                        <div class='toggle-bar toggle-bar-2'></div>
                        <div class='toggle-bar toggle-bar-3'></div>
                      </div>
                  </nav>
                  <div class="nav-hidden">
                    <ul>
                        <li><a href="works.html" class="nav-hidden-link">Works</a></li>
                        <li><a href="about.html" class="nav-hidden-link">About</a></li>
                        <li><a href="services.html" class="nav-hidden-link">Services</a></li>
                        <li><a href="contact.html" class="nav-hidden-link">Contact</a></li>
                    </ul>
                  </div>
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

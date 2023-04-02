class hiddenNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .header-hidden {
                    box-shadow: 0 0 10px 2px #084c2f7c;
                    background-color: #1a1a1a;
                    display: none;
                    width: 100vw;
                    height: 5.5rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                }
                .nav-hidden {
                    width: 100vw;
                    height: calc(100vh - 5rem);
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    background-color: #1a1a1a;
                    z-index: 3000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translateY(calc(-100% - 5.5rem));
                    opacity: 1;
                    transition: all 1s;
                }
                
                .nav-hidden.show {
                transform: translateY(0px);
                /* opacity: 1; */
                }
              
                .nav-hidden ul {
                list-style-type: none;
                }
                
                .nav-hidden ul li {
                margin-bottom: 2rem;
                text-align: center;
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
                
                .nav-hidden-link:hover::after {
                width: 100%;
                /* display: table; */
                }

                // .nav-toggle {
                //     width: 2.9rem;
                //     height: 2.9rem;
                //     // background-color: red;
                //     display: none;
                //     flex-direction: column;
                //     justify-content: space-between;
                //     cursor: pointer;
                //     padding: 0.7rem;
                //     border-radius: 50%;
                //     transition: all 0.8s;
                //     position: relative;
                //     z-index: 10000;
                //     transition: all 0.5s;
                //   }
      
                //   .nav-toggle:hover {
                //     background-color: #f1f1f16e;
                //   }
      
                //   .toggle-bar {
                //     width:100%;
                //     height: 10%;
                //     background-color: #fff;
                //     transform: translateX(0);
                //     transition: all 0.5s;
                //     position: relative;
                //     // animation-duration: 1s;
                //   }
      
                //   @keyframes toggle2 {
                //     0% {
                //       transform: rotateZ(0);
                //     }
      
                //     80% {
                //       transform: rotateZ(90deg);
                //     }
      
                //     100% {
                //       transform: rotateZ(45deg);
                //     }
                //   }
      
                //   @keyframes deactivateToggle2 {
                //     0% {
                //       transform: rotateZ(45deg);
                //     }
      
                //     80% {
                //       transform: rotateZ(90deg);
                //     }
      
                //     100% {
                //       transform: rotateZ(0);
                //     }
                //   }
      
                //   @keyframes toggle {
                //     0% {
                //       transform: translate(-50%, -50%);
                //     }
      
                //     100% {
                //       transform: translate(-50%, -50%) rotateZ(-90deg);
                //     }
                    
                //     // 100% {
                //     //   transform: translate(-50%, -50%) rotateZ(45deg);
                //     // }
                //   }
                  
                //   @keyframes deactivateToggle {
                //     0% {
                //       transform: translate(-50%, -50%) rotateZ(-90deg);
                //     }
      
                //     100% {
                //       transform: translate(-50%, -50%);
                //     }
                    
                //     // 100% {
                //     //   transform: translate(-50%, -50%) rotateZ(45deg);
                //     // }
                //   }
      
                //   .toggle-bar-2.toggle-active {
                //     animation-name: toggle2;
                //     animation-duration: 1s;
                //     animation-fill-mode: forwards;
                //   }
                  
                //   .toggle-bar-2.toggle-active.deactivate {
                //     animation-name: deactivateToggle2;
                //     animation-duration: 1s;
                //     animation-fill-mode: forwards;
                //     // animation-direction: reverse;
                //   }
      
                //   .toggle-bar-2::after {
                //     width: 100%;
                //     height: 100%;
                //     position: absolute;
                //     left: 50%;
                //     top: 50%;
                //     transform: translate(-50%, -50%);
                //     content: "";
                //   }
                  
                //   .toggle-bar-2.toggle-active::after {
                //     background-color: #fff;
                //     animation-name: toggle;
                //     animation-duration: 1s;
                //     animation-fill-mode: forwards;
                //   }
                  
                //   .toggle-bar-2.toggle-active.deactivate::after {
                //     background-color: none;
                //     animation-name: deactivateToggle;
                //     animation-duration: 1s;
                //     animation-fill-mode: forwards;
                //     // animation-direction: reverse !important;
                //   }

                @media screen and (max-width: 750px) {                  
                    .header nav .nav-items,
                    .header-hidden nav .nav-items {
                      display: none;
                    }
                }

            </style>
                          
            <header class="header-hidden">
                <nav class="nav">
                <div class="nav-img">
                    <a href="index.html"><img src="img/Logo.png" alt="Mercho" /></a>
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
            <div class="nav-hidden">
                <ul>
                <li><a href="works.html" class="nav-hidden-link">Works</a></li>
                <li><a href="about.html" class="nav-hidden-link">About</a></li>
                <li><a href="services.html" class="nav-hidden-link">Services</a></li>
                <li><a href="contact.html" class="nav-hidden-link">Contact</a></li>
                </ul>
            </div>
            `;
  }
}

customElements.define("nav-component", hiddenNav);

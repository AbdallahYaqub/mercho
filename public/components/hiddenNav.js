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
                    height: calc(100vh - 5.5rem);
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

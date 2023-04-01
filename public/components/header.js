const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .header {
            width: 100vw;
            height: 5.5rem;
        }
        .nav {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 1.5rem;
            align-items: center;
            position: relative;
            z-index: 10;
            padding-left: 8rem;
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
            width: 50%;
            padding-right: 7rem;
        }
        
        .nav-items ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
        }
        
        .nav-item {
            display: inline-block;
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
        
        .nav-link:hover {
            color: #084c2e;
            font-weight: 600
        }
        
        .nav-cta a {
            font-family: "Open Sans", sans-serif;
            background-color: #084c2e;
            border-radius: 2rem;
            padding: 1rem;
        }
        
        .nav-cta {
            margin-left: 2rem;
        }
        
        .nav-cta a:hover {
            background-color: #f6f6f6;
            color: #084c2e;
            border: 1px solid #084c2e;
        }
    </style>

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
                    <li class="nav-item nav-cta">
                        <a href="#">Book a session</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>    

`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);

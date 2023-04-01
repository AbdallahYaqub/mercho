class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .footer {
            width: 100vw;
            min-height: 16rem;
            background-color: #022114;
            padding: 3rem 8rem;
        }
          
        .footer-container {
            width: 100%;
            min-height: 16rem;
            display: flex;
            position: relative;
            flex-direction: column;
        }
          
        .footer-content {
            display: flex;
            justify-content: space-between;
            min-height: 16rem;
            position: relative;
            margin-bottom: 1rem;
        }
          
        .footer-content::after {
            width: calc(100vw - 16rem);
            border-bottom: 3px solid #084c2e;
            display: table;
            content: "";
            position: absolute;
            bottom: 0;
        }
          
        .foo .footer-details {
            width: 20%;
            display: flex;
            flex-direction: column;
            min-height: 16rem;
            /* justify-content: space-around; */
        }
          
        .footer-logo {
            width: 10rem;
            margin-bottom: 1.5rem;
        }
          
        .footer-logo img {
            width: 100%;
        }
          
        .footer-address {
            color: #fff;
            font-family: "open sans", sans-serif;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }
          
        .footer-email {
            color: #fff;
            font-family: "open sans", sans-serif;
            font-size: 1rem;
        }
          
        .social-media {
            color: #fff;
            /* background-color: #084c2e; */
            display: flex;
            align-items: flex-end;
            margin-bottom: 1rem;
        }
          
        .social-media ul {
            list-style-type: none;
            display: flex;
        }
          
        .social-media a {
            text-decoration: none;
        }
          
        .social-media-icon {
            font-size: 1.5rem;
            margin-left: 1rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            color: #fff;
            display: flex !important;
            justify-content: center;
            align-items: center;
            transition: all 0.7s;
        }
          
        .social-media-icon:hover {
            background-color: #084c2e;
        }
          
        .fa-facebook-f {
            background-color: #3a5792;
        }
          
        .fa-twitter {
            background-color: #1e96e9;
        }
          
        .fa-instagram {
            background-color: #ee0aca;
        }
          
        .fa-linkedin-in {
            background-color: #0763bc;
        }
          
        .fa-youtube {
            background-color: #f60102;
        }
          
        .footer-other {
            display: flex;
            justify-content: space-between;
        }
          
        .copyright {
            color: #fff;
            font-size: 0.8rem;
            font-family: "open sans", sans-serif;
        }
          
        .footer-other ul {
            list-style-type: none;
            display: flex;
        }
          
        .footer-other a {
            text-decoration: none;
            margin-left: 2.5rem;
            color: #fff;
            font-size: 0.8rem;
            font-family: "open sans", sans-serif;
            /* display: flex; */
            transition: all 0.8s;
        }
          
        .footer-other a:hover {
            color: #084c2e;
        }

        @media screen and (max-width: 1200px) {
          .footer {
            padding: 3rem 5rem;
          }

          .footer-content::after {
            width: calc(100vw - 10rem);
          }

          .footer-address {
            font-size: 1rem;
          }

          .social-media-icon {
            font-size: 1rem;
            width: 2rem;
            height: 2rem;
          }        
        }

        @media screen and (max-width: 750px) {
          .footer {
            padding: 3rem;
          }   
          
          .footer-content::after {
            width: calc(100vw - 6rem);
          }
        }

        @media screen and (max-width: 550px) {
          .footer-content {
            flex-direction: column;
          }

          .footer-details {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-logo {
            width: 12rem;
          }

          .footer-address {
            text-align: center;
            font-size: 0.9rem
          }

          .footer-other {
            flex-direction: column-reverse;
          }

          .footer-other a {
            text-decoration: none;
            margin-left: 2.5rem;
            color: #fff;
            font-size: 0.8rem;
            font-family: "open sans", sans-serif;
            /* display: flex; */
            transition: all 0.8s;
          }


          .footer-other ul {
            margin-bottom: 1rem;
            justify-content: center;
          }

          .copyright {
            text-align: center;
          }

          .social-media {
            justify-content: center;
          }
        }
          
    </style>

    <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-details">
              <div class="footer-logo">
                <img src="img/Logo.png" alt="Mercho" />
              </div>
              <p class="footer-address">
                2 Esomo Close, <br />
                Off Toyin Street, Ikeja.
              </p>
              <p class="footer-email">hello@merchobranding.com</p>
            </div>
            <div class="social-media">
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-facebook-f social-media-icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-twitter social-media-icon"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-instagram social-media-icon"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-linkedin-in social-media-icon"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-youtube social-media-icon"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-other">
            <p class="copyright">
              &copy; 2023 Mercho Branding Limited. All rights reserved.
            </p>
            <ul class="terms">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>    

`;
  }
}

customElements.define("footer-component", Footer);

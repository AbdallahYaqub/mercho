const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
  <h2 class="hero-header">
  Mercho's <br /> <span class="green">Services</span>
  </h2>
`;

const navLinks = document.querySelectorAll(".nav-link");
const hiddenNavLinks = document.querySelectorAll(".nav-hidden-link");

navLinks[2].classList.add("active");

hiddenNavLinks[2].classList.add("active");

// const activeService = document.querySelectorAll(".service-active");

// const activeServiceHeight = activeService.offsetHeight + 60;

// console.log(serviceDetailsHeight);

// const container = document.querySelector(".services-container");

// container.style.paddingBottom = `${activeServiceHeight}px`;

// console.log(activeServiceHeight);

// Mercho
const mercho = document.querySelectorAll(".mercho");
const merchoS = document.getElementById("mercho-s-details");
const merchoX = document.getElementById("mercho-x-details");

// const switchService = (e) => {
//   console.log(e.target);
// };

mercho.forEach((service) =>
  service.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("mercho-s")) {
      if (!merchoS.classList.contains("service-active")) {
        merchoX.classList.remove("service-active");
        merchoX.parentElement.classList.remove("active");
        merchoS.classList.add("service-active");
        merchoS.parentElement.classList.add("active");
      }
    } else if (e.target.parentElement.classList.contains("mercho-x")) {
      if (!merchoX.classList.contains("service-active")) {
        merchoS.classList.remove("service-active");
        merchoS.parentElement.classList.remove("active");
        merchoX.classList.add("service-active");
        merchoX.parentElement.classList.add("active");
      }
    }
  })
);

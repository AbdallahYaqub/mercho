// Insert hero text

const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
    <h2 class="hero-header hero-header-1">
    Unlock <span class="green">the power</span></h2>

    <h4 class = 'hero-header hero-header-2'>of a strong brand</h4>
`;

// Service Toggle
const services = document.querySelectorAll(".service");
const servicesImg = document.querySelectorAll(".services-img");

services.forEach(function (service, i) {
  service.addEventListener("click", (e) => {
    if (!e.target.classList.contains("service-active")) {
      e.target.classList.add("service-active");
      services[Math.abs(i - 1)].classList.remove("service-active");
      servicesImg[i].classList.add("img-active");
      servicesImg[Math.abs(i - 1)].classList.remove("img-active");
    }
  });
});

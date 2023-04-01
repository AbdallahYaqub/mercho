new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  autoScrolling: true,
  scrollHorizontally: true,
  sectionsColor: ["#1a1a1a"],

  afterRender: function () {
    const nav = document.querySelector("header.header");
    const heroContainer = document.querySelector(".hero-container");

    const navHeight = nav.getBoundingClientRect().height;
    // console.log(navHeight);

    const obsCallback = function (entries) {
      const [entry] = entries;
      // console.log(entry);
      if (!entry.isIntersecting) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    };

    const obsOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const navObserver = new IntersectionObserver(obsCallback, obsOptions);
    navObserver.observe(heroContainer);
  },
});

const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
  <div>
    <h2 class="hero-header hero-header-1">
    Unlock <span class="green">the power</span></h2>

    <h4 class = 'hero-header hero-header-2'>of a strong brand</h4>
  </div>

  <div class="text-container" id="text-container"></div>
`;

// Typing text effect
const texts = [
  "Don’t get branded out",
  "Stay ahead of your competition",
  "Create product awareness",
  "Attract customers with market insights",
];

let index = 0;
let isDeleting = false;
let text = "";

function type() {
  const currentText = texts[index];

  if (isDeleting) {
    text = currentText.substring(0, text.length - 1);
  } else {
    text = currentText.substring(0, text.length + 1);
  }

  document.getElementById("text-container").innerHTML =
    text + '<span class="cursor"></span>';

  let typingSpeed = 150;

  if (!isDeleting && text === currentText) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && text === "") {
    isDeleting = false;
    index = (index + 1) % texts.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

type();

// Services
const services = document.querySelectorAll(".service");

const service1 = document.getElementById("service-1");
const service2 = document.getElementById("service-2");

const serviceImg1 = document.getElementById("services-img-1");
const serviceImg2 = document.getElementById("services-img-2");

const switchService = (e) => {
  if (e.target === service1) {
    service2.classList.remove("service-active");
    service1.classList.add("service-active");

    serviceImg2.classList.remove("img-active");
    serviceImg1.classList.add("img-active");
  } else {
    service1.classList.remove("service-active");
    service2.classList.add("service-active");

    serviceImg1.classList.remove("img-active");
    serviceImg2.classList.add("img-active");
  }
};

services.forEach((service) => {
  service.addEventListener("click", switchService);
});

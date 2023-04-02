new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  autoScrolling: true,
  scrollHorizontally: true,
  sectionsColor: ["#1a1a1a"],

  afterLoad: function (origin, destination, direction, trigger) {
    const nav = document.querySelector("header.header-hidden");
    if (destination.index !== 0) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }

    // const navHidden = document.querySelector(".nav-hidden");

    // const toggleBar = document.querySelector(".nav-toggle");
    // const toggleBar1 = document.querySelector(".toggle-bar-1");
    // const toggleBar2 = document.querySelector(".toggle-bar-2");
    // const toggleBar3 = document.querySelector(".toggle-bar-3");

    // let active = 0;
    // console.log(active);

    // toggleBar.addEventListener("click", () => {
    //   if (active === 0) {
    //     console.log("Sharp");
    //     toggleBar2.classList.remove("toggle-active");
    //     toggleBar2.classList.remove("deactivate");

    //     toggleBar1.style.transform = "translateX(25px)";
    //     toggleBar1.style.opacity = "0";
    //     console.log(toggleBar1);

    //     toggleBar3.style.transform = "translateX(-25px)";
    //     toggleBar3.style.opacity = "0";

    //     // toggleBar2.style.transform = "rotateZ(90deg)";
    //     toggleBar2.classList.add("toggle-active");

    //     navHidden.classList.add("show");
    //     // navHidden.style.transform = "translateY(0)";
    //     nav.style.backgroundColor = "#1a1a1a";

    //     navHidden.style.opacity = "1";

    //     active = 1;
    //   } else {
    //     toggleBar1.style.transform = "translateX(0)";
    //     toggleBar1.style.opacity = "1";

    //     toggleBar3.style.transform = "translateX(0)";
    //     toggleBar3.style.opacity = "1";

    //     // toggleBar2.style.animationName = "toggle2";
    //     // toggleBar2.style.animationDirection = "reverse";
    //     // toggleBar2.style.animationDuration = "1s";
    //     toggleBar2.classList.add("deactivate");

    //     nav.style.backgroundColor = "transparent";
    //     navHidden.classList.remove("show");
    //     // navHidden.style.display = "none";
    //     active = 0;
    //   }
    // });
  },

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

`;

// Typing text effect
// const texts = [
//   "Don’t get branded out",
//   "Stay ahead of your competition",
//   "Create product awareness",
//   "Attract customers with market insights",
// ];

// let index = 0;
// let isDeleting = false;
// let text = "";

// function type() {
//   const currentText = texts[index];

//   if (isDeleting) {
//     text = currentText.substring(0, text.length - 1);
//   } else {
//     text = currentText.substring(0, text.length + 1);
//   }

//   document.getElementById("text-container").innerHTML =
//     text + '<span class="cursor"></span>';

//   let typingSpeed = 150;

//   if (!isDeleting && text === currentText) {
//     typingSpeed = 2000;
//     isDeleting = true;
//   } else if (isDeleting && text === "") {
//     isDeleting = false;
//     index = (index + 1) % texts.length;
//     typingSpeed = 500;
//   }

//   setTimeout(type, typingSpeed);
// }

// type();

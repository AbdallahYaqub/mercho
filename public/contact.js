// import axios from "axios";

const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
  <h2 class="hero-header">
  Contact <br /> <span class="green">Mercho</span>
  </h2>
`;

const navLinks = document.querySelectorAll(".nav-link");
const hiddenNavLinks = document.querySelectorAll(".nav-hidden-link");

navLinks[3].classList.add("active");
hiddenNavLinks[3].classList.add("active");

// Form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("Nice");

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const company = document.getElementById("company").value.trim();
  const message = document.getElementById("message").value.trim();

  const submitSuccess = document.querySelector(".form-confirmation");
  const formErrors = document.querySelectorAll(".form-error");

  const data = {
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
  };

  formErrors.forEach((error) => {
    error.innerHTML = ``;
  });

  // console.log(data);

  axios
    .post("/contact", data)
    .then((res) => {
      // console.log(res);
      submitSuccess.style.display = "flex";
    })
    .catch((err) => {
      if (err.response.data.data.errors["firstName"])
        formErrors[0].innerHTML += `${err.response.data.data.errors["firstName"][0]} <br>`;
      if (err.response.data.data.errors["lastName"])
        formErrors[1].innerHTML += `${err.response.data.data.errors["lastName"][0]} <br>`;
      if (err.response.data.data.errors["email"])
        formErrors[2].innerHTML += `${err.response.data.data.errors["email"][0]} <br>`;
      if (err.response.data.data.errors["phone"])
        formErrors[3].innerHTML += `${err.response.data.data.errors["phone"][0]} <br>`;
      if (err.response.data.data.errors["message"])
        formErrors[5].innerHTML += `${err.response.data.data.errors["message"][0]} <br>`;
    });
});

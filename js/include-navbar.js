document.addEventListener("DOMContentLoaded", function () {
  // Create a placeholder element for the navbar
  const navbarPlaceholder = document.createElement("div");
  navbarPlaceholder.id = "navbar-placeholder";
  document.body.prepend(navbarPlaceholder); // Insert at the top of the body

  // Fetch the navbar HTML
  fetch("/components/navbar.html") // Use relative path
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the navbar HTML into the placeholder
      navbarPlaceholder.innerHTML = data;

      // Inject the logo and text into the navbar
      const logoContainer = document.createElement("a");
      logoContainer.href = "/index.html";
      logoContainer.classList.add("logo-container");

      const logoImg = document.createElement("img");
      logoImg.src = "/images/DU_Logo.png";
      logoImg.alt = "UCA Logo";
      logoImg.classList.add("logo-img");

      const logoText = document.createElement("div");
      logoText.classList.add("logo-text");

      const logoTextMain = document.createElement("span");
      logoTextMain.classList.add("logo-text-main");
      logoTextMain.textContent = "UCA";

      const logoTextSub = document.createElement("span");
      logoTextSub.classList.add("logo-text-sub");
      logoTextSub.textContent = "United Club Association";

      // Append elements to the logo container
      logoText.appendChild(logoTextMain);
      logoText.appendChild(logoTextSub);
      logoContainer.appendChild(logoImg);
      logoContainer.appendChild(logoText);

      // Insert the logo container into the navbar
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.prepend(logoContainer);
      }

      // Re-attach event listeners for the hamburger menu and dropdowns
      const burger = document.querySelector(".navbar__toggle");
      const navLinks = document.querySelector(".navbar__menu");
      if (burger && navLinks) {
        burger.addEventListener("click", function () {
          navLinks.classList.toggle("active");
        });
      }

      // Close menu when clicking outside
      document.addEventListener("click", function (event) {
        if (
          !burger.contains(event.target) &&
          !navLinks.contains(event.target)
        ) {
          navLinks.classList.remove("active");
        }
      });

      // Initialize Feather Icons
      if (window.feather) {
        feather.replace();
      }
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
});

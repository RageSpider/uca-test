// include-navbar.js
document.addEventListener("DOMContentLoaded", function () {
  // Create a placeholder element for the navbar
  const navbarPlaceholder = document.createElement("div");
  navbarPlaceholder.id = "navbar-placeholder";
  document.body.prepend(navbarPlaceholder); // Insert at the top of the body

  // Fetch the navbar HTML
  fetch("./navbar.html") // Use correct relative path
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the navbar HTML into the placeholder
      navbarPlaceholder.innerHTML = data;

      // Re-attach event listeners for the hamburger menu
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

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger input");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("change", function () {
    navLinks.classList.toggle("active");
  });

  // Handle dropdown menus
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });
});

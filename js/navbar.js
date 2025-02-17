document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbarMenu = document.querySelector(".navbar__menu");

  // Toggle menu visibility
  navbarToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !navbarToggle.contains(event.target) &&
      !navbarMenu.contains(event.target)
    ) {
      navbarMenu.classList.remove("active");
    }
  });
});

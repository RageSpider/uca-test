document.addEventListener("DOMContentLoaded", function () {
  // Create a placeholder element for the footer
  const footerPlaceholder = document.createElement("div");
  footerPlaceholder.id = "footer-placeholder";
  document.body.appendChild(footerPlaceholder); // Insert at the bottom of the body

  // Fetch the footer HTML
  fetch("/components/footer.html") // Use relative path
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the footer HTML into the placeholder
      footerPlaceholder.innerHTML = data;

      // Dynamically load and execute footer.js
      const script = document.createElement("script");
      script.src = "/js/footer.js";
      script.onload = () => console.log("footer.js loaded successfully.");
      script.onerror = () => console.error("Error loading footer.js.");
      document.head.appendChild(script); // Add to head instead of body
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
});

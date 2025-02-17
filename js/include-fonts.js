// include-fonts.js
document.addEventListener("DOMContentLoaded", function () {
  // Create a placeholder element for the fonts
  const fontPlaceholder = document.createElement("div");
  fontPlaceholder.id = "font-placeholder";
  document.head.appendChild(fontPlaceholder); // Insert into the <head>

  // Fetch the font HTML
  fetch("/components/font.html") // Use relative path
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the font HTML into the placeholder
      fontPlaceholder.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading fonts:", error);
    });
});

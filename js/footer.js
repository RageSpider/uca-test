// List of all 9 clubs
const allClubs = [
  { name: "Debate Club", link: "/clubs/debate-club.html" },
  { name: "Photography Club", link: "/clubs/photography-club.html" },
  { name: "Sports Club", link: "/clubs/sports-club.html" },
  { name: "Quiz Club", link: "/clubs/quiz-club.html" },
  { name: "Science Club", link: "/clubs/science-club.html" },
  { name: "Language Club", link: "/clubs/language-club.html" },
  { name: "ICT Club", link: "/clubs/ict-club.html" },
  { name: "Literature Club", link: "/clubs/literature-club.html" },
  { name: "Cultural Club", link: "/clubs/cultural-club.html" },
];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to display 6 random clubs
function displayRandomClubs() {
  const clubsList = document.getElementById("clubs-list");
  if (!clubsList) return;

  // Check if we already have stored clubs and they're not expired
  const storedData = JSON.parse(localStorage.getItem("randomClubs") || "{}");
  const now = new Date().getTime();

  let shuffledClubs;
  if (storedData.clubs && storedData.expiry > now) {
    // Use stored clubs if they're not expired
    shuffledClubs = storedData.clubs;
  } else {
    // Generate new random clubs and store them
    shuffledClubs = shuffleArray([...allClubs]).slice(0, 6);
    // Store with 24-hour expiry
    localStorage.setItem(
      "randomClubs",
      JSON.stringify({
        clubs: shuffledClubs,
        expiry: now + 24 * 60 * 60 * 1000, // 24 hours
      })
    );
  }

  clubsList.innerHTML = ""; // Clear the list

  shuffledClubs.forEach((club) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = club.link;
    link.textContent = club.name;
    listItem.appendChild(link);
    clubsList.appendChild(listItem);
  });
}

// Call the function when the page loads
window.onload = displayRandomClubs;

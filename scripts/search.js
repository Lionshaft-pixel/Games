const games = [
  { title: "Grand Theft Auto V", img: "https://logos-world.net/wp-content/uploads/2021/02/Grand-Theft-Auto-V-GTA-5-Logo.png", link: "gta-5.html" },
  { title: "Cyberpunk 2077", img: "https://via.placeholder.com/40?text=CP", link: "cyberpunk.html" },
  { title: "Far Cry 3", img: "https://via.placeholder.com/40?text=FC3", link: "far-cry-3.html" },
  { title: "Call of Duty", img: "https://via.placeholder.com/40?text=COD", link: "call-of-duty.html" },
  { title: "Red Desert Redemption 2", img: "https://via.placeholder.com/40?text=RDR2", link: "rdr2.html" },
  { title: "Watch Dogs", img: "https://via.placeholder.com/40?text=WD", link: "watchdogs.html" },
  { title: "Assassin’s Creed", img: "https://via.placeholder.com/40?text=AC", link: "assassins-creed.html" }
];

const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("searchSuggestions");

// Typing shows suggestions
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (query.length === 0) {
    suggestionBox.classList.add("hidden");
    return;
  }

  const matches = games.filter(game =>
    game.title.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    suggestionBox.classList.add("hidden");
    return;
  }

  matches.forEach(game => {
    const li = document.createElement("li");
    const regex = new RegExp(`(${query})`, "gi");
    const highlighted = game.title.replace(regex, "<span class='highlight'>$1</span>");
    li.innerHTML = `
      <img src="${game.img}" alt="${game.title}" />
      <span class="game-title">${highlighted}</span>
    `;
    suggestionBox.appendChild(li);

    li.addEventListener("click", () => {
      window.location.href = game.link;
    });
  });

  suggestionBox.classList.remove("hidden");
});

// Hide on blur
searchInput.addEventListener("blur", () => {
  setTimeout(() => suggestionBox.classList.add("hidden"), 150);
});

// Show on focus
searchInput.addEventListener("focus", () => {
  if (searchInput.value.length > 0) {
    suggestionBox.classList.remove("hidden");
  }
});

// Handle Enter key
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    const match = games.find(game =>
      game.title.toLowerCase().includes(query)
    );
    if (match) {
      window.location.href = match.link;
    }
  }
});
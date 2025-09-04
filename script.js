    // Search functionality
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('searchInput');
      const suggestionsBox = document.getElementById('searchSuggestions');
      
      const games = [
        'Grand Theft Auto V',
        'Cyberpunk 2077',
        'Red Dead Redemption 2',
        'Call of Duty: Modern Warfare 2',
        'Watch Dogs',
        'Elden Ring',
        'Hogwarts Legacy',
        'Spider-Man: Miles Morales',
        'The Witcher 3',
        'Minecraft',
        'Fortnite',
        'Valorant',
        'League of Legends',
        'Counter-Strike 2',
        'Battlefield 2042'
      ];
      
      searchInput.addEventListener('focus', function() {
        if (this.value.length > 0) {
          suggestionsBox.style.display = 'block';
        }
      });
      
      searchInput.addEventListener('blur', function() {
        setTimeout(() => {
          suggestionsBox.style.display = 'none';
        }, 200);
      });
      
      searchInput.addEventListener('input', function() {
        const input = this.value.toLowerCase();
        suggestionsBox.innerHTML = '';
        
        if (input.length === 0) {
          suggestionsBox.style.display = 'none';
          return;
        }
        
        const filteredGames = games.filter(game => 
          game.toLowerCase().includes(input)
        );
        
        if (filteredGames.length > 0) {
          suggestionsBox.style.display = 'block';
          filteredGames.forEach(game => {
            const li = document.createElement('li');
            li.textContent = game;
            li.addEventListener('mousedown', () => {
              searchInput.value = game;
              suggestionsBox.style.display = 'none';
              // Here you would normally redirect to the game page
            });
            suggestionsBox.appendChild(li);
          });
        } else {
          suggestionsBox.style.display = 'none';
        }
      });
      
      // Animation for elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.game-card, .download-btn, .system-req li').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
      });
    });
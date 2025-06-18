<marquee behavior="scroll" direction="left">🔥 Welcome to Juice Geo’s Universe! Explore the vibes! 🔥</marquee>
<script>
  window.onload = function() {
    alert("Welcome to Juice Geo’s World! 🚀🔥");
  };
</script>
<style>
  .fade-in { opacity: 0; transition: opacity 1s ease-in; }
</style>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".fade-in").style.opacity = 1;
  });
</script>
<script>
  const messages = ["Welcome to Juice Geo’s world! 🚀", "Enjoy the vibes! 🔥", "Discover something new today! 😊"];
  document.addEventListener("DOMContentLoaded", function() {
    alert(messages[Math.floor(Math.random() * messages.length)]);
  });
</script>
<button onclick="toggleDarkMode()" style="background: black; color: white; padding: 10px; border: none;">
    Toggle Dark Mode 🌙
</button>
<script>
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
</script>
<style>
  .dark-mode { background: black; color: white; }
</style>
<p>What's your favorite Juice Geo feature?</p>
<button onclick="alert('You voted for Design! 🚀')">Design 🎨</button>
<button onclick="alert('You voted for Navigation! 🔥')">Navigation 🗺️</button>
<button onclick="alert('You voted for Interactive Elements! 😊')">Interactions ✨</button>
<button onclick="window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})" 
        style="background: pink; color: white; padding: 12px 20px; border: none; border-radius: 5px;">
    Scroll Down 🔽
</button>

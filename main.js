// Load saved theme on page load
window.onload = function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};

// Theme buttons
const lightBtn = document.getElementById('light-mode-btn');
const darkBtn = document.getElementById('dark-mode-btn');
const copyBtn = document.getElementById('copy-link-btn');

// Light mode
lightBtn?.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem("darkMode", "disabled");
});

// Dark mode
darkBtn?.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem("darkMode", "enabled");
});

// Copy link
copyBtn?.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied to clipboard!");
});

// Smooth scroll to .start-reading section
document.getElementById('scrollToStart')?.addEventListener('click', function () {
  document.querySelector('.start-reading')?.scrollIntoView({ behavior: 'smooth' });
});

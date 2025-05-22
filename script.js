// Simple animation effect for input field on focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
  searchInput.style.boxShadow = '0 0 10px #ff80b3';
});

searchInput.addEventListener('blur', () => {
  searchInput.style.boxShadow = 'none';
});

// Optionally animate logo on load
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo img');
  logo.style.transition = 'transform 0.6s ease-in-out';
  logo.style.transform = 'scale(1.1)';
  setTimeout(() => {
    logo.style.transform = 'scale(1)';
  }, 600);
});

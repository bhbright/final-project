// Select the hamburger button and the nav menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event listener
navToggle.addEventListener('click', function() {
  // Toggle the 'active' class
  navLinks.classList.toggle('active');
});

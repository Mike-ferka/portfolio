// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Download Resume Button
  document.getElementById('download-resume').addEventListener('click', function () {
    window.location.href = 'https://drive.google.com/file/d/1iH0LRlLhdcAV69VC-wnHRM-TtxoJULR1/view?usp=sharing'; // Replace with the path to your resume
  });
// Get elements
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const navLinks = document.getElementById('nav-links');

// Show menu
menuOpen.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuOpen.style.display = 'none'; // Hide menu icon when menu is open
  menuClose.style.display = 'block'; // Show the close icon
});

// Hide menu
menuClose.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuOpen.style.display = 'block'; // Show menu icon when menu is closed
  menuClose.style.display = 'none'; // Hide the close icon
});

// Get all navbar links
const navLinks = document.querySelectorAll('.navbar a[data-target]');
// Get all sections
const sections = document.querySelectorAll('.section');

// Function to show a section
function showSection(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}

// Default: show Home section
showSection('home');

// Add click events to navbar links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    showSection(target);
  });
});

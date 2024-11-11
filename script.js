// Smooth scroll for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle dark mode
  const toggleSwitch = document.createElement('button');
  toggleSwitch.textContent = 'Dark Mode';
  toggleSwitch.className = 'btn';
  document.querySelector('header').appendChild(toggleSwitch);
  
  toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Adding dark-mode styling
  document.head.insertAdjacentHTML('beforeend', `
  <style>
    .dark-mode {
      background-color: #121212;
      color: #ffffff;
    }
    .dark-mode .navbar a {
      color: #ffffff;
    }
  </style>
  `);
  
  
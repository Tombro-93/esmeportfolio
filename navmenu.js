// Get the menu button and navigation menu
var menuButton = document.querySelector('.menu-button');
var navigationMenu = document.querySelector('nav ul');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function() {
  // Toggle the "active" class on both the menu button and navigation menu
  menuButton.classList.toggle('active');
  navigationMenu.classList.toggle('active');
});

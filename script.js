// Start at 48:42 time stamp from https://www.youtube.com/watch?v=ldwlOzRvYOU

function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
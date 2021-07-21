const toggleButton = document.getElementsByClassName("toggle-buttons")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
const bar = document.getElementsByClassName("bar")[1];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    bar.classList.toggle('active');
    console.log(navbarLinks)
})


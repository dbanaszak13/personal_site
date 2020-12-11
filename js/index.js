const navToggle = document.querySelector('.nav-toggle');
const darkTheme = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

darkTheme.addEventListener('click', () => {
    document.body.classList.toggle('logo-click');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

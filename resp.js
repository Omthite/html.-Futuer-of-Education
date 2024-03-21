const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-classresp');
    navList.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');
});

// Code to toggle the visibility of the elements in the mobile menu.
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', ()=>{
    // I don't really know this function, but it seems to toggle the 
    // class that's in the parameter.
    navbarMenu.classList.toggle("is-active");
});
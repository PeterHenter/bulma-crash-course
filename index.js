// Code to toggle the visibility of the elements in the mobile menu.
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    // I don't really know this function, but it seems to toggle the 
    // class that's in the parameter.
    navbarMenu.classList.toggle("is-active");
    burgerIcon.classList.toggle('is-a(ctive');
});

// Code to toggle the appearance of tab bars, and display the tab content of 
// the active tab only.
const tabBars = document.querySelectorAll('div.tabs.is-boxed > ul > li');
const tabContents = document.querySelectorAll('#tab-content > div');

tabBars.forEach((tabBar) => {
    tabBar.addEventListener('click', () => {
        tabBars.forEach(tabBar => tabBar.classList.toggle('is-active'));
        tabContents.forEach(tabContent => tabContent.classList.toggle('is-hidden'));
    })
});

// Alternatively we can use data tag attributes in the involved elements 
// to create the same effect:
// const tabs = document.querySelectorAll('.tabs li');
// const tabContentBoxes = document.querySelectorAll('#tab-content > div');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         tabs.forEach(item => item.classList.toggle('is-active'));
//         tab.classList.add('is-active');

//         const target = tab.dataset.target;
//         tabContentBoxes.forEach(box => {
//             if (box.getAttribute('id') === target) {
//                 box.classList.remove('is-hidden');
//             } else {
//                 box.classList.add('is-hidden');
//             }
//         })
//     });
// });

// Code to display the modal form, when the user clicks the 'Sign up' button. 
const signUpBtn = document.querySelector('#sign-up-button');
const modalForm = document.querySelector('.modal');


signUpBtn.addEventListener('click', () => modalForm.classList.add('is-active'));
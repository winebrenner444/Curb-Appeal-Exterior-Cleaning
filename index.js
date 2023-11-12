let hamburgerMenu = document.querySelector(".hamburger-menu")
let hamburgerIcon = document.querySelector('.hamburger-icon');
let navList = document.querySelector('.nav-list');
var navItems = document.querySelectorAll('.nav-item');
let resizeTimer;
let currentSlide = 0;


function toggleNavList() {
   if(!hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.add('active');
   } else if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.remove('active')
   }
}

function toggleRotation() {
    if(!hamburgerIcon.classList.contains('rotate')) {
        hamburgerIcon.classList.add('rotate');
       } else if (hamburgerIcon.classList.contains('rotate')) {
        hamburgerIcon.classList.remove('rotate')
       }
}

function removeRotation() {
    hamburgerIcon.classList.remove('rotate');
}

function toggleHamburgerMenu() {
    toggleNavList();
    toggleRotation();
}

function updateIcon() {
    if (window.innerWidth <= 700 && !hamburgerMenu.classList.contains('active')) {
        hamburgerIcon.classList.remove('rotate')
    } else if(window.innerWidth <= 700 && hamburgerMenu.classList.contains('active')){
        hamburgerIcon.classList.add('rotate')
    }
}

function updateNavDisplay() {
    if (window.innerWidth <= 700 && !hamburgerMenu.classList.contains('active')) {
        navList.style.display = 'none';
    } else if(window.innerWidth <= 700 && hamburgerMenu.classList.contains('active')){
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'flex';
    }
}




hamburgerMenu.addEventListener('click', () => {
    toggleHamburgerMenu();
    updateNavDisplay();
});

document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        updateNavDisplay();
    }
});

window.addEventListener('load', updateNavDisplay);

window.addEventListener('resize', () => {
    updateNavDisplay();
    updateIcon();
});


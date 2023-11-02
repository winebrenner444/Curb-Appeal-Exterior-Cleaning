let hamburgerMenu = document.querySelector('.hamburger-menu');
let navList = document.querySelector('.nav-list');




function toggleNavList() {
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
}


function toggleRotation() {
    hamburgerMenu.classList.toggle('rotate');
}

function removeRotation() {
    hamburgerMenu.classList.remove('rotate');
}

function updateNavDisplay() {
    if (window.innerWidth <= 700) {
        navList.style.display = 'none';
        hamburgerMenu.addEventListener('click', function() {
            toggleNavList();
            toggleRotation();
        });
    } else {
        navList.style.display = 'flex';
        hamburgerMenu.removeEventListener('click', toggleNavList);
    }
}
//updateNavDisplay();


window.addEventListener('load', updateNavDisplay);

visualViewport.onresize = updateNavDisplay;

hamburgerMenu.addEventListener('blur', function() {
    navList.style.display = 'none';
    removeRotation();
});


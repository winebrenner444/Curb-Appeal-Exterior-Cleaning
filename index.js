let hamburgerMenu = document.querySelector('.hamburger-menu');
let navList = document.querySelector('.nav-list');
var navItems = document.querySelectorAll('.nav-item');



function toggleNavList() {
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'flex';
        navList.style.width = "100vw";
        navList.style.height = "100vh";
        navList.style.right = "-20px";
        navList.style.top = "-20px";
        navList.style.alignItems = "center";
        navList.style.justifyContent = "center";  
        navList.style.fontSize = "5vw"; 
        
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].style.margin = "3vh 0";
                navItems[i].style.width = "50vw";
            }

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


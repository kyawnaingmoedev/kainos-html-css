
const navLinks = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('section');

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

// Function to close the menu
function closeMenu() {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

function changeNavLinksColor() {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === `#${sectionId}` && scrollPosition < sectionTop + sectionHeight - 60) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', function () {

    changeNavLinksColor();

    if (window.scrollY > 50) {
        document.querySelector('.nav-container').classList.add('white-nav-top');
    } else {
        document.querySelector('.nav-container').classList.remove('white-nav-top');
    }
});

/* Scroll Effect */
var smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
    
    for (var i = 0; i < smoothScrollLinks.length; i++) {
        smoothScrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            var select_id = this.getAttribute('href');
            var targetElement = document.querySelector(select_id);
            var targetOffset = targetElement.offsetTop - 50;
            
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        new WOW().init();
      });

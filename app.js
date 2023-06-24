
const navLinks = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('section');

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

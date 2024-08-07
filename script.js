document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinksContainer = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('header a');
    const sections = document.querySelectorAll('section');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navLinksContainer.classList.toggle('show');
    };

    window.onscroll = () => {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header a[href*=${id}]`).classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove active classes when scrolling
        menuIcon.classList.remove('bx-x');
        navLinksContainer.classList.remove('show');
    };
});


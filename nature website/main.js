// let menu = document.querySelector('.fa-bars');
// let navbar = document.querySelector('.navbar');

// menu.addEventListener('click',function(){
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('nav-toggle');
// });

// window.addEventListener('scroll', () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('nav-toggle');
// });
// Navigation toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            smoothScroll(targetSection);
        });
    });

    // Smooth scroll function
    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
    }

    // Easing function for smooth scroll
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    // Animate elements on scroll
    const sections = document.querySelectorAll('section');

    function animateOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});

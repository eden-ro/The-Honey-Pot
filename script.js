// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal Code (Assuming this is part of your JavaScript)
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Sticky Navbar
window.onscroll = function () {
    myFunction()
};

const navbar = document.querySelector("header");
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Dropdown Menu
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('show');
        });

        dropdown.addEventListener('mouseleave', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });
});

// Set padding-top for body based on header height
document.addEventListener('DOMContentLoaded', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
});

// Additional JavaScript for handling other interactions
document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown menu on click
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close dropdown menu when clicking outside
    window.addEventListener('click', function (e) {
        if (!e.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});


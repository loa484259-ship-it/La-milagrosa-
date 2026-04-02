// script_new.js

// Form Validation
function validateForm() {
    const form = document.querySelector("form");
    form.addEventListener('submit', function(event) {
        let isValid = true;
        // Add your validation logic here
        // Example: Check if a required field is empty
        const inputFields = document.querySelectorAll('input[required]');
        inputFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error'); // Just an example class to indicate an error
            }
        });
        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            alert('Please fill in all required fields.');
        }
    });
}

// WhatsApp Integration
function whatsappShare(message) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth Scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if(element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-active');
    });
}

// Product Filtering
function filterProducts() {
    const filterInput = document.querySelector('#filter-input');
    const productContainer = document.querySelector('.product-container');
    const products = productContainer.children;

    filterInput.addEventListener('keyup', function() {
        const filterValue = this.value.toLowerCase();
        Array.from(products).forEach(product => {
            const text = product.textContent.toLowerCase();
            product.style.display = text.includes(filterValue) ? '' : 'none';
        });
    });
}

// Initialize all functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    validateForm();
    toggleMobileMenu();
    filterProducts();
});
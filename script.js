// Toggle 'Read More' content on index page
document.addEventListener('DOMContentLoaded', () => {
    // Handle all read more buttons
    const readMoreButtons = document.querySelectorAll('.readMoreBtn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const extraContent = button.nextElementSibling;
            if (extraContent.style.display === 'none' || extraContent.style.display === '') {
                extraContent.style.display = 'block';
                button.textContent = 'Read Less ⬅️';
            } else {
                extraContent.style.display = 'none';
                button.textContent = 'Read More ➡️';
            }
        });
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');

            if(name && email && message) {
                formMessage.style.color = 'green';
                formMessage.textContent = `Thank you, ${name}! Your message has been sent. 📬`;
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Please fill in all fields before submitting.';
                formMessage.style.display = 'block';
            }
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', event => {
            event.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const messageElem = document.getElementById('newsletterMessage');
            const email = emailInput.value.trim();
            if (email && validateEmail(email)) {
                messageElem.style.color = 'lightgreen';
                messageElem.textContent = `Thanks for subscribing! 📬 We’ll keep you updated.`;
                messageElem.style.display = 'block';
                newsletterForm.reset();
            } else {
                messageElem.style.color = 'orange';
                messageElem.textContent = 'Please enter a valid email address.';
                messageElem.style.display = 'block';
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

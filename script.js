// Function for smooth scrolling a fixed header and nav
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToElement(targetId);
    });
});

// Dark mode toggle function

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}



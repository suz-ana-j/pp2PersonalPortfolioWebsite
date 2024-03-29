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


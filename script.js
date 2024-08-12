document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    // Add click event listeners to toggle section visibility
    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
    });
});
function setTheme(theme) {
    document.body.className = theme;
}

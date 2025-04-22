document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        });
    });
});
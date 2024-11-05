// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.group-button');
    const carousel = document.querySelector('#groupCarousel .carousel-inner');
    const allItems = document.querySelectorAll('.carousel-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const group = button.getAttribute('data-group');
            filterItems(group);
        });
    });

    function filterItems(group) {
        // Hide all items first
        allItems.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('active');
        });

        // Show items of the selected group
        const groupItems = document.querySelectorAll(`.carousel-item.${group}`);
        groupItems.forEach((item, index) => {
            item.style.display = 'block';
            if (index === 0) {
                item.classList.add('active');
            }
        });
    }

    // Initialize the carousel with the first group
    filterItems('group1');
});

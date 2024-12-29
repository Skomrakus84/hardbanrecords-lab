// scripts.js

// Przykład prostego efektu po najechaniu myszką na książkę
const bookItems = document.querySelectorAll('.book-item');

bookItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

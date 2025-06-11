
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const title = item.querySelector('.accordion-title');

    title.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        items.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });


});



const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('nav ul li');

items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const index = item.getAttribute('data-index');  
        const itemHeight = item.offsetHeight;  
        const gap = 23;  

 
        const offset = (index - 1) * (itemHeight + gap);

        indicator.style.transform = `translateY(${Math.max(0, offset)}px)`;
    });
});

 

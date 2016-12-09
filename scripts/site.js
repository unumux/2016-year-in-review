let lastScrollPosition = 0;
let ticking = false;

function update(scrollPosition) {
    
}

window.addEventListener('scroll', (e) => {
    lastScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            update(lastScrollPosition);
            ticking = false;
        });
    }

    ticking = true;
});
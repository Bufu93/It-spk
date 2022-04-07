function navBar() {
    const body = document.querySelector('body');
    const menu = document.getElementById('menu');
    const buttonOpen = document.getElementById('menu-open');
    const buttonClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    buttonOpen.addEventListener('click', () => {
        menu.classList.remove('hidden');
        body.classList.add('overflow-hidden');
    })
    buttonClose.addEventListener('click', () => {
        menu.classList.add('hidden');
        body.classList.remove('overflow-hidden');
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.add('hidden');
        }
    }) 
    for(item of menuLinks) {
    item.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
} 
};

navBar()

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});



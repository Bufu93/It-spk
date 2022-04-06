function navBar() {
    const menu = document.getElementById('menu');
    const buttonOpen = document.getElementById('menu-open');
    const buttonClose = document.getElementById('menu-close');
    
    buttonOpen.addEventListener('click', () => {
        menu.classList.remove('hidden');
    })
    buttonClose.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.add('hidden');
        }
    }) 
    const menuLinks = document.querySelectorAll('.menu-link');
    for(item of menuLinks) {
    item.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
} 
};

navBar()



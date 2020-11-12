const header = document.querySelector('.bl_headerUtils');
const btn = document.querySelector('.bl_mobileNav_open');
const logo = document.querySelector('.bl_headerUtils_logo');

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        header.classList.add('__scroll');
        btn.classList.add('__scroll');
        logo.classList.add('__scroll');
    }
})
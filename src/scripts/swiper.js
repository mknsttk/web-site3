import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

let mySwiper;
let swiperBool = false

const createSwiper = () => {
    mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
            },
    });
}

document.addEventListener('load', () => {
    if (window.innerWidth > 960) {
        createSwiper()
        swiperBool = true
    }
});

document.addEventListener('resize', () => {
    if (window.innerWidth < 960 && swiperBool) {
        mySwiper.destroy();
        swiperBool = false
    } else {
        createSwiper();
        swiperBool = true
    }
})




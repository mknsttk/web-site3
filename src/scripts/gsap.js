import { gsap } from 'gsap';

gsap.from('.bl_hero_title',{
    delay:.6,
    duration:1,
    opacity:0
});

gsap.from('.bl_hero_text',{
    delay:.8,
    duration:1,
    opacity:0
});

gsap.from(".bl_hero", {
    delay: .3,
    duration: 1.5,
    opacity: 0,
    ease: "power2.out",
});



import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap
    .timeline({
        defaults: { ease: "power2.out", duration: 1 },
        scrollTrigger: {
            trigger: ".bl_mediaUnit",
        },
    })
    .from(".bl_media", {
        opacity: 0,
        y: -10,
        stagger: .2
    });

    gsap
        .timeline({
            defaults: { ease: "power2.out", duration: 1 },
            scrollTrigger: {
                trigger: ".bl_cardUnit",
            },
    })
    .from('.bl_card', {
        opacity: 0,
        y: -10,
        stagger: .2
    })
    


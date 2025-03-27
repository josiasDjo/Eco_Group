const logo_nav = document.getElementsByClassName('logo_nav');
const text_navbar_annim = document.getElementsByClassName('text_navbar_annim');
const text_heroHeader = document.getElementsByClassName('text_heroHeader');
const btn_HeroHeader = document.getElementsByClassName('btn_HeroHeader');
const svg_inProgress = document.getElementsByClassName('svg_inProgress');
const spinner_svg = document.getElementsByClassName('spinner_svg');
const svg_bounce = document.getElementsByClassName('svg_bounce');


if (logo_nav && text_navbar_annim && text_heroHeader && btn_HeroHeader) {
    gsap.from(['.logo_nav','.text_navbar_annim', '.text_heroHeader', '.btn_HeroHeader'], { 
        duration: 0.6, delay: 0.2, opacity: 0, stagger: 0.2
    });
}

if (svg_inProgress) {
    gsap.from('.svg_inProgress', { opacity:0, duration: 0.8, delay: 1.5, x:'-100%'});
}

if (spinner_svg) {
    gsap.to(".spinner_svg", {
        rotation: "+=360",duration: 2, ease: "none", repeat: -1, repeatDelay: 0.02  
    });
}
if (svg_bounce) {
    gsap.to('.svg_bounce', { duration: 0.6, y:-20, ease:"bounce.out", yoyo: true, repeat: -1});
}

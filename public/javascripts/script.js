
gsap.from(['.logo_nav','.text_navbar_annim', '.text_heroHeader', '.btn_HeroHeader'], { 
    duration: 0.6, delay: 0.2, opacity: 0, stagger: 0.2
});
gsap.from('.svg_inProgress', { duration: 0.8, delay: 1.5, x:'-100%'});

gsap.to(".spinner_svg", {
    rotation: "+=360",duration: 2, ease: "none", repeat: -1, repeatDelay: 0.02  
});

gsap.to('svg_bounce', {});
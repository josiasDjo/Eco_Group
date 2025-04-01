
const logo_nav = document.getElementsByClassName('logo_nav');
const text_navbar_annim = document.getElementsByClassName('text_navbar_annim');
const text_heroHeader = document.getElementsByClassName('text_heroHeader');
const btn_HeroHeader = document.getElementsByClassName('btn_HeroHeader');
const svg_inProgress = document.getElementsByClassName('svg_inProgress');
const spinner_svg = document.getElementsByClassName('spinner_svg');
const svg_bounce = document.getElementsByClassName('svg_bounce');

const main_conn_page = document.getElementsByClassName('main_conn_page');
const conn_page_logo = document.getElementsByClassName('conn_page_logo');
const conn_page_title = document.getElementsByClassName('conn_page_title');
const conn_page_email = document.getElementsByClassName('conn_page_email');
const conn_page_pwd = document.getElementsByClassName('conn_page_pwd');
const conn_page_mdp = document.getElementsByClassName('conn_page_mdp');
const conn_page_btn = document.getElementsByClassName('conn_page_btn');
const part2_conn_page = document.getElementsByClassName('part2_conn_page');

gsap.from('animable', { 
    duration: 0.6, delay: 0.4, opacity: 0, stagger: 0.2
});

if (logo_nav && text_navbar_annim && text_heroHeader && btn_HeroHeader) {
    gsap.from(['.logo_nav','.text_navbar_annim', '.text_heroHeader', '.btn_HeroHeader'], { 
        duration: 0.6, delay: 0.4, opacity: 0, stagger: 0.2
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
if (main_conn_page && conn_page_logo && conn_page_title && conn_page_email && conn_page_pwd && conn_page_mdp && conn_page_btn && part2_conn_page) {
    gsap.from('.main_conn_page', { duration: 0.2, delay: 0.4, opacity: 0 });
    gsap.from(['.container_form_sign','.conn_page_logo','.part2_conn_page','.conn_page_title','.conn_page_email','.conn_page_pwd','.conn_page_mdp','.conn_page_btn'], {
        duration: 0.6, delay: 0.7, opacity: 0, stagger: 0.3
    })
}



// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from('.animable', {
//         scrollTrigger: {
//             trigger: '.animable',
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//         },
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         stagger: 0.3,
//     });
// });
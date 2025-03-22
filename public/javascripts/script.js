import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from('text_navbar_annim', { duration: 3, y: '-100%', ease: 'bounce', opacity: 0});
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from('text_navbar_annim', { duration: 3, delay: 1, ease: 'bounce', opacity: 0, stagger: 5});
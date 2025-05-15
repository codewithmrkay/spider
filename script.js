document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable, ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
    });
    gsap.registerPlugin(ScrollTrigger) 
    gsap.to('.box', {
        x: 500,
        scrollTrigger: {
            trigger: ".box",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true
        }
    });
});
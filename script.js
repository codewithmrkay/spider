document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable,ScrollTrigger,ScrollSmoother)
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
   });
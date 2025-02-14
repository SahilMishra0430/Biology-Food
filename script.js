Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});

Shery.makeMagnet(".leafimg1, .leafimg2, .leafimg3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});




var tl = gsap.timeline();

tl.from(".herotext > *", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.8,
  stagger: 0.2,
});

gsap.from(".hero-image>*", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.8,
  stagger: 0.3,
});

gsap.from(".team >*", {
  opacity: 0,
  y: 200,
  duration: 1,
  stagger: 0.5,
  duration: 1,
  // delay: 1,
  scrollTrigger: {
    trigger: ".team",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 15%",
    scrub: true,
  },
});
gsap.from(".team-members >*", {
  opacity: 0,
  y: 200,
  duration: 1,
  stagger: 0.5,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".team-members",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 45%",
    scrub: true,
  },
});

gsap.from(".r1 .feature", {
  opacity: 0,
  x: 200,
  duration: 1,
  stagger: 0.5,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".r1 .feature",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".r2 .feature", {
  opacity: 0,
  x: -200,
  duration: 1,
  stagger: 0.5,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".r2",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".r3 .feature", {
  opacity: 0,
  x: 200,
  duration: 1,
  stagger: 0.5,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".r3 .feature",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".features h2", {
  opacity: 0,
  x: -200,
  duration: 1,
  stagger: 0.5,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".features h2",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 40%",
    scrub: true,
  },
});


gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia(); // Create matchMedia instance

mm.add("(min-width: 600px)", () => {
    // 🖥️ Animations for screens 768px and above (Desktop & Tablets)
    gsap.to(".r1 feature", {
        x: 500, // Move right
        duration: 2,
        scrollTrigger: {
            trigger: "",
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    });

    return () => {
        // Clean-up function if needed when viewport changes
    };
});

mm.add("(max-width: 767px)", () => {
    // 📱 Animations for screens below 768px (Mobile)
    gsap.to(".box", {
        x: 200, // Move a shorter distance on mobile
        duration: 1.5,
        scrollTrigger: {
            trigger: ".box",
            start: "top 90%",
            end: "top 50%",
            scrub: true
        }
    });

    return () => {
        // Clean-up function if needed
    };
});
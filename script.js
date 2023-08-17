// gsap.to("#one", {
//   width: "100%",
//   ease: Expo.easeInOut,
//   duration: 2,
// });

// document.querySelectorAll(".imagecontainer").forEach(function (elem) {
//   gsap.to(elem, {
//     ease: Expo.easeInOut,
//     width: "100%",
//     duration: 2,
//     stagger: 2,
//   });
// });

let tl = gsap.timeline({
  repeat: -1,
});

tl.to(
  ".imagecontainer",
  {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 2,
  },
  "a"
);

tl.to(
  ".text h1",
  {
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0,
  },
  "a"
);

tl.to(
  ".text h1",
  {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
  },
  "a"
);

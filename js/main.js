
const mainText = document.querySelector('.main_text');
mainText.style.opacity = 1;


gsap.registerPlugin(ScrollTrigger);
/* profile 섹션 고정 되게 */






/* skill 섹션 */
let sections = gsap.utils.toArray('.skill_container');

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".skill",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top-=120 top",
        end: () => "+=" + document.querySelector(".skill").offsetWidth
    }
});


gsap.to(".project_title", {
    scrollTrigger: {
      trigger: ".project",
      start: "top-=120 top",
      pin: true,
      end: () => "+=" + document.querySelector(".project").offsetHeight,
    }
});


/* project 섹션 (gpt 참고 해서 잘 안됨 수정 필요함) */
let sections2 = gsap.utils.toArray('.project_container');

sections2.forEach((section) => {
  gsap.to(section, {
    opacity: 1,
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(section, { opacity: 1 });
      },
      onLeave: () => {
        gsap.to(section, { opacity: 0 });
      },
      onEnterBack: () => {
        gsap.to(section, { opacity: 1 });
      },
      onLeaveBack: () => {
        gsap.to(section, { opacity: 0 });
      }
    }
  });
});




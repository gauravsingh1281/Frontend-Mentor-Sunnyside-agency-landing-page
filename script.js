const showMobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav-links");
const logo = document.getElementById("logo");
const desktopNavLink = document.querySelectorAll("#desktop-nav-links a");
const mobileNavLink = document.querySelectorAll("#mobile-nav-links a");
const mainHeading = document.getElementById("main-heading");
const headerArrow = document.getElementById("header-arrow");

showMobileNavBtn.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hidden");
  tl1.from(mobileNavLink, {
    opacity: 0,
    duration: 0.4,
    y: -30,
    stagger: 0.5,
  });
});

const tl1 = gsap.timeline();
const tl2 = gsap.timeline();
tl1.from(logo, {
  opacity: 0,
  duration: 0.7,
  delay: 0.6,
  y: -30,
});

tl1.from(showMobileNavBtn, {
  opacity: 0,
  y: -30,
  duration: 0.7,
});

tl1.from(desktopNavLink, {
  opacity: 0,
  duration: 0.6,
  y: -30,
  stagger: 0.5,
});

tl2.from(mainHeading, {
  opacity: 0,
  scale: 0.7,
  duration: 0.68,
  delay: 2,
});
tl2.from(headerArrow, {
  opacity: 0,
  scale: 0.7,

  duration: 0.68,
});

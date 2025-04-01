const showMobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav-links");
const logo = document.getElementById("logo");
const desktopNavLink = document.querySelectorAll("#desktop-nav-links a");
const mobileNavLink = document.querySelectorAll("#mobile-nav-links a");

showMobileNavBtn.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hidden");
});

const tl = gsap.timeline();
tl.from(logo, {
  opacity: 0,
  duration: 0.7,
  delay: 0.6,
  y: -30,
});

tl.from(showMobileNavBtn, {
  opacity: 0,
  y: -30,
  duration: 0.7,
});

tl.from(desktopNavLink, {
  opacity: 0,
  duration: 0.6,
  y: -30,
  stagger: 0.5,
});
tl.from(mobileNavLink, {
  opacity: 0,
  duration: 0.4,
  y: -30,
  stagger: 0.5,
});

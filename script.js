const showMobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav-links");

showMobileNavBtn.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hidden");
});

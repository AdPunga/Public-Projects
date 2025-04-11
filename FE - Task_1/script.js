document.addEventListener("DOMContentLoaded", function () {
  const regularNav = document.querySelector(".regular-nav");
  const scrollNav = document.querySelector(".scroll-nav");

  function toggleScrollNav() {
    const showScrollNav = window.scrollY > 120;

    scrollNav.classList.toggle("visible", showScrollNav);
    scrollNav.classList.toggle("hidden", !showScrollNav);

    regularNav.classList.toggle("visible", !showScrollNav);
    regularNav.classList.toggle("hidden", showScrollNav);
  }

  window.addEventListener("scroll", toggleScrollNav);
});

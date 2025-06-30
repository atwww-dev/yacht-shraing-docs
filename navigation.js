// Global Navigation System for Yacht Sharing Workspace
// Include this file in all documents for consistent navigation

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navOverlay = document.getElementById("navOverlay");

  if (hamburgerMenu && navMenu && closeMenu && navOverlay) {
    function openNav() {
      navMenu.classList.add("open");
      navOverlay.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      navMenu.classList.remove("open");
      navOverlay.classList.remove("show");
      document.body.style.overflow = "auto";
    }

    hamburgerMenu.addEventListener("click", openNav);
    closeMenu.addEventListener("click", closeNav);
    navOverlay.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeNav();
      }
    });
  }

  const currentPagePath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    // Remove trailing 'index.html' from paths for comparison
    const cleanCurrentPath = currentPagePath.replace(/index\.html$/, "");
    const cleanLinkPath = linkPath.replace(/index\.html$/, "");

    // Check if the cleaned current path matches the cleaned link path
    if (cleanCurrentPath === cleanLinkPath) {
      link.classList.add("current-page");
    } else {
      link.classList.remove("current-page");
    }
  });
});

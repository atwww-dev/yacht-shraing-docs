// Dynamically load shared navigation into each page
(function () {
  const NAV_PATH = "../navigation.html"; // Adjust automatically if at root
  document.addEventListener("DOMContentLoaded", () => {
    // Determine relative path depth and fix NAV_PATH if needed
    const depth = location.pathname.split("/").filter(Boolean).length;
    const pathPrefix = "../".repeat(depth);
    fetch(pathPrefix + "navigation.html")
      .then((r) => r.text())
      .then((html) => {
        document.body.insertAdjacentHTML("afterbegin", html);
        attachNavBehaviour();
      })
      .catch((err) => console.error("Navigation load failed", err));
  });

  function attachNavBehaviour() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");
    const closeMenu = document.getElementById("closeMenu");
    const navOverlay = document.getElementById("navOverlay");
    if (!hamburgerMenu) return; // already present
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
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) closeNav();
    });
  }
})();

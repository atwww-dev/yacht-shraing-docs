// Shared Language Toggle
(function () {
  const FALLBACK = "en";
  let current = localStorage.getItem("preferredLanguage") || FALLBACK;

  function setActiveButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    // Update all elements with data attributes
    document.querySelectorAll("[data-en]").forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        // Check if the element is an input/textarea or a regular element
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          if (el.placeholder) {
            el.placeholder = text;
          }
        } else {
          el.innerHTML = text; // Use innerHTML to render HTML tags
        }
      }
    });

    localStorage.setItem("preferredLanguage", lang);
    // use page-specific languageManager if available
    if (window.languageManager && window.languageManager.switchLanguage) {
      window.languageManager.switchLanguage(lang);
    }
    setActiveButtons(lang);
    document.dispatchEvent(
      new CustomEvent("language:changed", { detail: lang })
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    // wire buttons (works for markup added later too)
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (btn) setLanguage(btn.dataset.lang);
    });
    // set initial state
    setActiveButtons(current);
    setLanguage(current);
  });

  window.sharedLang = { get: () => current, switch: setLanguage };
})();

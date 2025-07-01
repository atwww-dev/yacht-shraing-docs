// Shared Language Toggle
(function () {
  const FALLBACK = "en";
  let current = localStorage.getItem("preferredLanguage") || FALLBACK;

  function setActiveButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function switchLanguage(lang) {
    current = lang;
    localStorage.setItem("preferredLanguage", lang);
    // use page-specific languageManager if available
    if (window.languageManager && window.languageManager.switchLanguage) {
      window.languageManager.switchLanguage(lang);
    } else {
      // generic fallback: swap data attributes
      document.querySelectorAll("[data-en]").forEach((el) => {
        const txt = el.dataset[lang];
        if (txt) el.textContent = txt;
      });
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
      if (btn) switchLanguage(btn.dataset.lang);
    });
    // set initial state
    setActiveButtons(current);
    switchLanguage(current);
  });

  window.sharedLang = { get: () => current, switch: switchLanguage };
})();

document.addEventListener("DOMContentLoaded", function () {
  // Language switcher logic
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });

  function switchLanguage(lang) {
    // Set active button
    langButtons.forEach((button) => {
      button.classList.remove("active");
      if (button.getAttribute("data-lang") === lang) {
        button.classList.add("active");
      }
    });

    // Update HTML lang attribute for proper hyphenation
    const htmlElement = document.getElementById("htmlElement") || document.documentElement;
    htmlElement.setAttribute("lang", lang);

    // Translate elements
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach((el) => {
      const translation = el.getAttribute(`data-${lang}`);
      if (translation) {
        el.innerHTML = translation;
      }
    });
  }

  // Global Nav (only if loaded)
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navOverlay = document.getElementById("navOverlay");

  if (hamburgerMenu && navMenu && closeMenu && navOverlay) {
    function openNav() {
      navMenu.classList.add("open");
      navOverlay.classList.add("show");
    }
    function closeNav() {
      navMenu.classList.remove("open");
      navOverlay.classList.remove("show");
    }
    hamburgerMenu.addEventListener("click", openNav);
    closeMenu.addEventListener("click", closeNav);
    navOverlay.addEventListener("click", closeNav);
  }

  // Swiper
  const swiper = new Swiper(".swiper-container", {
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,
    on: {
      init: function () {
        updatePagination(this);
        adjustSlideAlignment(this);
      },
      slideChange: function () {
        updatePagination(this);
        adjustSlideAlignment(this);
      },
    },
  });

  function updatePagination(swiper) {
    const totalSlides = swiper.slides.length;
    const currentSlide = swiper.realIndex + 1;

    document.getElementById("currentSlide").textContent = currentSlide;
    document.getElementById("totalSlides").textContent = totalSlides;

    const slideDots = document.getElementById("slideDots");
    slideDots.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("slide-dot");
      if (i === swiper.realIndex) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        swiper.slideTo(i);
      });
      slideDots.appendChild(dot);
    }
  }

  // TOC Navigation
  const tocItems = document.querySelectorAll(".toc-item");
  tocItems.forEach((item) => {
    item.addEventListener("click", () => {
      const slideIndex = parseInt(item.getAttribute("data-slide"));
      swiper.slideTo(slideIndex);
    });
  });

  // Dynamic slide alignment: center short slides
  function adjustSlideAlignment(swiperInstance) {
    const viewportHeight = window.innerHeight;
    swiperInstance.slides.forEach((slide) => {
      const content = slide.querySelector(".slide-content");
      if (!content) return;
      const contentHeight = content.scrollHeight;
      if (contentHeight < viewportHeight - 80) {
        // 80px buffer for padding
        slide.classList.add("center-content");
      } else {
        slide.classList.remove("center-content");
      }
    });
  }

  // Re-check on window resize
  window.addEventListener("resize", () => adjustSlideAlignment(swiper));
});

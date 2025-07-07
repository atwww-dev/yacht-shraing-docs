document.addEventListener("DOMContentLoaded", function () {
  // Debug mobile issues
  console.log("Presentation loading...");
  console.log("Viewport:", window.innerWidth, "x", window.innerHeight);
  console.log("User Agent:", navigator.userAgent.substring(0, 100));

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
    const htmlElement =
      document.getElementById("htmlElement") || document.documentElement;
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
    slidesPerView: 1,
    spaceBetween: 0,
    touchRatio: 1,
    simulateTouch: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,
    watchOverflow: true,
    preventInteractionOnTransition: false,
    on: {
      init: function () {
        updatePagination(this);
        adjustSlideAlignment(this);
        console.log(`Swiper initialized with ${this.slides.length} slides`);
      },
      slideChange: function () {
        updatePagination(this);
        adjustSlideAlignment(this);
        console.log(`Slide changed to: ${this.realIndex + 1}`);
      },
    },
  });

  function updatePagination(swiper) {
    const totalSlides = swiper.slides.length;
    const currentSlide = swiper.realIndex + 1;

    const currentSlideEl = document.getElementById("currentSlide");
    const totalSlidesEl = document.getElementById("totalSlides");

    if (currentSlideEl) currentSlideEl.textContent = currentSlide;
    if (totalSlidesEl) totalSlidesEl.textContent = totalSlides;

    const slideDots = document.getElementById("slideDots");
    if (slideDots) {
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

    // Debug for mobile
    console.log(`Pagination updated: slide ${currentSlide} of ${totalSlides}`);
  }

  // TOC Navigation
  const tocLinks = document.querySelectorAll(".toc-link");
  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const slideIndex = parseInt(link.getAttribute("data-slide"));
      swiper.slideTo(slideIndex);
    });
  });

  // Dynamic slide alignment: center short slides
  function adjustSlideAlignment(swiperInstance) {
    const viewportHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 768;

    swiperInstance.slides.forEach((slide, index) => {
      const content = slide.querySelector(".slide-content");
      if (!content) return;

      const contentHeight = content.scrollHeight;
      const buffer = isMobile ? 40 : 80; // Smaller buffer on mobile

      if (contentHeight < viewportHeight - buffer && !isMobile) {
        // Only center on desktop - mobile slides always start from top
        slide.classList.add("center-content");
      } else {
        slide.classList.remove("center-content");
      }

      // Ensure slide is visible (debug mobile issues)
      slide.style.display = "flex";
      slide.style.visibility = "visible";
    });

    // Log for mobile debugging
    if (isMobile) {
      console.log(
        `Mobile detected - ${swiperInstance.slides.length} slides processed`
      );
    }
  }

  // Re-check on window resize and orientation change
  window.addEventListener("resize", () => {
    setTimeout(() => {
      adjustSlideAlignment(swiper);
      swiper.update();
    }, 100);
  });

  // Handle orientation change on mobile
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      adjustSlideAlignment(swiper);
      swiper.update();
    }, 300);
  });
});

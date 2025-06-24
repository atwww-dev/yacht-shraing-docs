// Global Navigation System for Yacht Sharing Workspace
// Include this file in all documents for consistent navigation

function createGlobalNavigation() {
  // Navigation HTML structure
  const navHTML = `
        <nav class="global-nav">
            <div class="hamburger-menu" id="hamburgerMenu">
                <div class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div class="nav-menu" id="navMenu">
                <div class="nav-header">
                    <h3 data-en="YACHT SHARING WORKSPACE" data-de="YACHT-SHARING-ARBEITSBEREICH">YACHT SHARING WORKSPACE</h3>
                    <button class="close-menu" id="closeMenu">&times;</button>
                </div>
                
                <div class="nav-section">
                    <h4 data-en="Main Dashboard" data-de="Haupt-Dashboard">Main Dashboard</h4>
                    <ul>
                        <li><a href="/" data-en="■ Project Overview" data-de="■ Projektübersicht">■ Project Overview</a></li>
                    </ul>
                </div>
                
                <div class="nav-section">
                    <h4 data-en="Research Documents" data-de="Forschungsdokumente">Research Documents</h4>
                    <ul>
                        <li><a href="/boat-rental-markeplace/" data-en="European Boat Rental Marketplace Analysis" data-de="Europäische Bootsverleih-Marktplatz-Analyse">European Boat Rental Marketplace Analysis</a></li>
                        <li><a href="/private-renters-experience-owners/" data-en="Private Boat Owners & Renters Study" data-de="Private Bootseigner & Mieter-Studie">Private Boat Owners & Renters Study</a></li>
                    </ul>
                </div>
                
                <div class="nav-section">
                    <h4 data-en="Development Phases" data-de="Entwicklungsphasen">Development Phases</h4>
                    <ul>
                        <li><span class="phase-current" data-en="Discovery (Current)" data-de="Discovery (Aktuell)">Discovery (Current)</span></li>
                        <li><span class="phase-upcoming" data-en="Product (TBD)" data-de="Produkt (TBD)">Product (TBD)</span></li>
                        <li><span class="phase-upcoming" data-en="Design (TBD)" data-de="Design (TBD)">Design (TBD)</span></li>
                        <li><span class="phase-upcoming" data-en="Development (TBD)" data-de="Entwicklung (TBD)">Development (TBD)</span></li>
                    </ul>
                </div>
            </div>
            
            <div class="nav-overlay" id="navOverlay"></div>
        </nav>
    `;

  // Navigation CSS
  const navCSS = `
        .global-nav {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2000;
        }

        .hamburger-menu {
            position: fixed;
            top: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            background: #ffffff;
            border: 2px solid #000000;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .hamburger-menu:hover {
            background: #000000;
        }

        .hamburger-icon {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .hamburger-icon span {
            width: 20px;
            height: 2px;
            background: #000000;
            transition: all 0.3s ease;
        }

        .hamburger-menu:hover .hamburger-icon span {
            background: #ffffff;
        }

        .nav-menu {
            position: fixed;
            top: 0;
            left: -350px;
            width: 350px;
            height: 100vh;
            background: #ffffff;
            border-right: 3px solid #000000;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            transition: left 0.3s ease;
            overflow-y: auto;
            padding: 0;
            z-index: 2001;
        }

        .nav-menu.open {
            left: 0;
        }

        .nav-header {
            background: #000000;
            color: #ffffff;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #cccccc;
        }

        .nav-header h3 {
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
        }

        .close-menu {
            background: none;
            border: none;
            color: #ffffff;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-menu:hover {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }

        .nav-section {
            padding: 1.5rem;
            border-bottom: 1px solid #cccccc;
        }

        .nav-section:last-child {
            border-bottom: none;
        }

        .nav-section h4 {
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #333333;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #cccccc;
        }

        .nav-section ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nav-section li {
            margin-bottom: 0.8rem;
        }

        .nav-section a {
            color: #000000;
            text-decoration: none;
            font-weight: 500;
            display: block;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .nav-section a:hover {
            color: #000000;
            font-weight: 600;
            padding-left: 10px;
        }

        .nav-section a.current-page {
            color: #000000;
            font-weight: 700;
            background: #f5f5f5;
            padding: 0.5rem;
            border-radius: 4px;
            border-left: 3px solid #000000;
        }

        .phase-current {
            color: #000000;
            font-weight: 600;
            display: block;
            padding: 0.5rem 0;
            font-size: 0.95rem;
        }

        .phase-upcoming {
            color: #666666;
            font-weight: 400;
            display: block;
            padding: 0.5rem 0;
            font-size: 0.95rem;
        }

        .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 2000;
        }

        .nav-overlay.show {
            opacity: 1;
            visibility: visible;
        }
    `;

  // Insert CSS
  const style = document.createElement("style");
  style.textContent = navCSS;
  document.head.appendChild(style);

  // Insert HTML
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // Set up functionality
  setupNavigation();

  // Mark current page
  markCurrentPage();
}

function setupNavigation() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navOverlay = document.getElementById("navOverlay");

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

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      closeNav();
    }
  });
}

function markCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-section a");

  navLinks.forEach((link) => {
    link.classList.remove("current-page");
    const linkPath = new URL(link.href).pathname;

    if (
      currentPath === linkPath ||
      (currentPath === "/" && linkPath === "/") ||
      (currentPath.includes("boat-rental-markeplace") &&
        linkPath.includes("boat-rental-markeplace")) ||
      (currentPath.includes("private-renters-experience-owners") &&
        linkPath.includes("private-renters-experience-owners"))
    ) {
      link.classList.add("current-page");
    }
  });
}

// Auto-initialize when script loads
document.addEventListener("DOMContentLoaded", function () {
  createGlobalNavigation();
});

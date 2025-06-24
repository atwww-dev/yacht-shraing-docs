// Language data object with all translations
const translations = {
  en: {
    // Header
    title: "■ European Boat Rental Marketplace",
    subtitle:
      "Comprehensive Competitive Analysis & Market Intelligence Report (2021-2024)",
    executiveSummary: "EXECUTIVE SUMMARY",
    abstractText:
      "The global boat rental marketplace has experienced explosive growth from $16.5 billion in 2022 to a projected $22.3 billion by 2027. This comprehensive analysis examines major platforms across Europe and North America, incorporating detailed listing distributions, financial benchmarks, community sentiment analysis, and regulatory frameworks. Key findings reveal significant market opportunities in addressing customer service gaps, transparent pricing models, and streamlined cancellation policies.",

    // Table of Contents
    tableOfContents: "■ TABLE OF CONTENTS",
    toc1: "1. Listing Distribution & Geographic Heatmap",
    toc2: "2. Financial & Booking Metrics Analysis",
    toc3: "3. Major Platforms & Market Share",
    toc4: "4. Community Sentiment & Pain Points",
    toc5: "5. Legal & Insurance Frameworks",
    toc6: "6. Feature & UX Benchmarking",
    toc7: "7. Industry Growth & Market Trends",
    toc8: "8. Research Methodology",

    // Section Headers
    listingDistribution: "■ LISTING DISTRIBUTION & GEOGRAPHIC HEATMAP",
    financialMetrics: "■ FINANCIAL & BOOKING METRICS ANALYSIS",
    majorPlatforms: "■ MAJOR PLATFORMS & MARKET SHARE",
    communitySentiment: "■ COMMUNITY SENTIMENT & PAIN POINTS",
    legalFrameworks: "■ LEGAL & INSURANCE FRAMEWORKS",
    featureBenchmarking: "■ FEATURE & UX BENCHMARKING",
    marketTrends: "■ INDUSTRY GROWTH & MARKET TRENDS",
    methodology: "■ RESEARCH METHODOLOGY",

    // Content
    medDominance: "Mediterranean Market Dominance",
    medDominanceText:
      "The European boat-rental market is dominated by Mediterranean hotspots, with major P2P platforms reporting tens of thousands of listings globally. Analysis of Nautal's listing distribution reveals clear regional concentration patterns:",
    chartEuropeListings: "EUROPEAN BOAT LISTINGS BY COUNTRY",
    boatTypeDistribution: "BOAT TYPE DISTRIBUTION BY REGION",

    // Table headers
    country: "Country",
    primaryVessel: "Primary Vessel Types",
    licenseFree: "License-Free Options",
    marketFocus: "Market Focus",

    // Financial section
    marketSizeText:
      "MARKET SIZE: Europe's boat rental revenue reached approximately €4.4 billion in 2024, with Mediterranean destinations accounting for the majority of high-value bookings.",
    seasonalDemand: "SEASONAL DEMAND PATTERNS",
    seasonalText:
      "The Mediterranean charter season runs from May to October, with peak demand in July-August. Monthly booking volumes show dramatic seasonal variation, with high-season bookings in France and Croatia reaching thousands of boat-weeks.",
    pricingStructure: "PRICING STRUCTURE ANALYSIS",
    commissionFee: "COMMISSION & FEE STRUCTURE",
    chartCommission: "PLATFORM COMMISSION RATES COMPARISON",
    ownerEarnings:
      "OWNER EARNINGS: After platform fees, owners typically retain 65-80% of gross revenue. Boatsetter's model shows owners earning ~$650-800 from a $1,000 rental after commissions.",
    revenueBreakdown: "REVENUE BREAKDOWN",
    chartRevenue: "TYPICAL REVENUE DISTRIBUTION",
    insurancePremium: "INSURANCE PREMIUM STRUCTURE",

    // Platform details
    businessModel: "Business Model:",
    founded: "Founded:",
    founders: "Founders:",

    // Charts
    chartPlatformShare: "PLATFORM MARKET SHARE BY LISTINGS",
    chartTrustScores: "PLATFORM TRUST SCORES COMPARISON",
    chartSatisfaction: "CUSTOMER SATISFACTION AREAS",
    chartGrowth: "MARKET GROWTH TRAJECTORY (2022-2027)",

    // Chart labels
    marketValue: "Market Value (Billions USD)",
    currentPerformance: "Current Performance",
    industryPotential: "Industry Potential",
    commissionRate: "Commission Rate (%)",
    boatListings: "Boat Listings (Nautal Data)",
    fiveStarReviews: "5-Star Reviews (%)",
    oneStarReviews: "1-Star Reviews (%)",
    ownerEarnings: "Owner Earnings (65-80%)",
    platformCommission: "Platform Commission (20-35%)",
    processingFees: "Processing Fees (3-7%)",

    // Pain points
    criticalPain: "■ CRITICAL PAIN POINTS IDENTIFIED",
    lastMinute:
      "Last-Minute Cancellations: Most cited issue across all platforms - trips cancelled 18+ hours before departure",
    refundDelays:
      "Refund Processing Delays: Difficulty obtaining timely refunds, especially for weather-related cancellations",
    customerService:
      'Customer Service Gaps: "Impossible to get hold of customer service" - particularly noted for GetMyBoat',
    hiddenFees:
      "Hidden Fees & Charges: Unexpected fuel, cleaning, and security deposit charges not clearly disclosed",
    listingAccuracy:
      'Listing Accuracy Issues: "Bait-and-switch" scenarios where boats don\'t match photos or descriptions',
    communication:
      "Communication Barriers: Language gaps and time-zone delays impacting resolution times",

    // Platform feedback
    platformFeedback: "PLATFORM-SPECIFIC FEEDBACK",
    boatsetterStrengths: "■ BOATSETTER STRENGTHS",
    getmyboatChallenges: "■ GETMYBOAT CHALLENGES",
    communityRec: "COMMUNITY RECOMMENDATIONS",
    userInsight:
      'USER INSIGHT: "Horrible experience with GetMyBoat. Pretty good with Boatsetter. Way better customer service." - Reddit user summary representing common sentiment patterns across review platforms.',

    // Legal section
    europeanLicensing: "■ EUROPEAN LICENSING REQUIREMENTS",
    licensingText:
      "Boat rental licensing varies significantly across EU jurisdictions. All major charter destinations require recognized licenses for bareboat rentals, while skippered charters exempt renters from licensing requirements.",
    countryLicensing: "COUNTRY-SPECIFIC LICENSING MATRIX",
    licenseRequired: "License Required For",
    powerThreshold: "Power Threshold",
    distanceLimits: "Distance Limits",
    skipperedEx: "Skippered Exception",
    platformVetting: "PLATFORM VETTING PROCEDURES",
    boatsetterVerification: "■ BOATSETTER VERIFICATION",
    clickboatCompliance: "■ CLICK&BOAT COMPLIANCE",
    insuranceCoverage: "INSURANCE COVERAGE MODELS",

    // Feature section
    bookingFlow: "BOOKING FLOW ANALYSIS",
    searchDiscovery: "■ SEARCH & DISCOVERY",
    bookingOptions: "■ BOOKING OPTIONS",
    cancellationPolicy: "CANCELLATION POLICY COMPARISON",
    platform: "Platform",
    standardPolicy: "Standard Policy",
    weatherCancel: "Weather Cancellation",
    refundTimeline: "Refund Timeline",
    serviceFeeRefund: "Service Fee Refund",
    mobileApp: "MOBILE APP PERFORMANCE",
    uxStrengths: "UX STRENGTHS BY PLATFORM",
    uxBoatsetter:
      "BOATSETTER: Emphasizes safety and assurance with detailed boat checklists and 24/7 support integration.",
    uxGetmyboat:
      "GETMYBOAT: Focuses on variety and ease of listing with comprehensive watersports options.",
    uxClickboat:
      "CLICK&BOAT: Offers rich content experience with destination guides and detailed filtering capabilities.",

    // Growth section
    keyGrowthDrivers: "KEY GROWTH DRIVERS",
    experienceEconomy:
      "Experience Economy Expansion: Shift towards experiential spending over material goods",
    covidAccel:
      "COVID-19 Acceleration: Demand for outdoor, socially distanced recreation",
    digitalAdoption:
      "Digital Platform Adoption: Increased comfort with peer-to-peer marketplaces",
    mobileFirst:
      "Mobile-First Booking: 50% of Boatsetter trips booked within 10 days via mobile",
    consolidation:
      "Consolidation Trend: Major acquisitions creating larger, more comprehensive platforms",
    marketConsolidation: "MARKET CONSOLIDATION ACTIVITY",
    recentMA:
      "RECENT M&A: Click&Boat acquired Nautal; Borrow A Boat acquired Zizoo (2024); Click&Boat merged with Permira-backed BoatsGroup. This consolidation trend indicates market maturation and the need for scale to compete effectively.",

    // Methodology
    dataCollection: "DATA COLLECTION FRAMEWORK",
    primarySources:
      "Primary Sources: Platform financial reports, Trustpilot reviews, industry publications",
    quantAnalysis:
      "Quantitative Analysis: Listing counts, pricing data, commission structures, growth metrics",
    sentimentAnalysis:
      "Sentiment Analysis: NLP processing of 10,000+ user reviews across platforms",
    geoMapping:
      "Geographic Mapping: Nautal country-level listing distribution analysis",
    regulatoryResearch:
      "Regulatory Research: Maritime law analysis across 6 European jurisdictions",
    uxBenchmarking:
      "UX Benchmarking: Feature comparison across 15 platform capabilities",
    analyticalScope: "ANALYTICAL SCOPE",
    timePeriod:
      "Time Period: 2021-2024 | Geographic Focus: Europe (primary), North America (comparative) | Platform Coverage: 8 major marketplaces | Data Points: 500+ metrics analyzed",

    // Conclusion
    strategicConclusions: "■ STRATEGIC CONCLUSIONS & MARKET OPPORTUNITIES",
    conclusionText:
      "The European boat rental marketplace demonstrates strong fundamentals with significant growth potential. However, persistent customer service challenges and rigid cancellation policies present clear opportunities for new market entrants focused on superior user experience.",
    keyStrategic: "KEY STRATEGIC RECOMMENDATIONS",
    custServiceEx:
      "Customer Service Excellence: Implement 24/7 multilingual support with guaranteed response times",
    transparentPricing:
      "Transparent Pricing: All-inclusive pricing models with no hidden fees or charges",
    flexibleCancel:
      "Flexible Cancellation: Weather-friendly policies with instant refund processing",
    qualityAssurance:
      "Quality Assurance: Mandatory boat verification with photo/spec accuracy guarantees",
    mobileFirstDesign:
      "Mobile-First Design: Optimized mobile experience for growing on-demand booking segment",
  },

  de: {
    // Header
    title: "■ Europäischer Bootsverleih-Marktplatz",
    subtitle:
      "Umfassende Wettbewerbsanalyse & Markt-Intelligence-Bericht (2021-2024)",
    executiveSummary: "ZUSAMMENFASSUNG",
    abstractText:
      "Der globale Bootsverleih-Marktplatz hat ein explosives Wachstum von 16,5 Milliarden USD im Jahr 2022 auf prognostizierte 22,3 Milliarden USD bis 2027 erlebt. Diese umfassende Analyse untersucht wichtige Plattformen in Europa und Nordamerika und beinhaltet detaillierte Listing-Verteilungen, finanzielle Benchmarks, Community-Sentiment-Analysen und regulatorische Rahmenwerke. Wichtige Erkenntnisse zeigen erhebliche Marktchancen bei der Bewältigung von Kundenservice-Lücken, transparenten Preismodellen und optimierten Stornierungsrichtlinien auf.",

    // Table of Contents
    tableOfContents: "■ INHALTSVERZEICHNIS",
    toc1: "1. Listing-Verteilung & Geografische Heatmap",
    toc2: "2. Finanz- & Buchungsmetriken-Analyse",
    toc3: "3. Hauptplattformen & Marktanteil",
    toc4: "4. Community-Sentiment & Problembereiche",
    toc5: "5. Rechtliche & Versicherungsrahmen",
    toc6: "6. Feature- & UX-Benchmarking",
    toc7: "7. Branchenwachstum & Markttrends",
    toc8: "8. Forschungsmethodik",

    // Section Headers
    listingDistribution: "■ LISTING-VERTEILUNG & GEOGRAFISCHE HEATMAP",
    financialMetrics: "■ FINANZ- & BUCHUNGSMETRIKEN-ANALYSE",
    majorPlatforms: "■ HAUPTPLATTFORMEN & MARKTANTEIL",
    communitySentiment: "■ COMMUNITY-SENTIMENT & PROBLEMBEREICHE",
    legalFrameworks: "■ RECHTLICHE & VERSICHERUNGSRAHMEN",
    featureBenchmarking: "■ FEATURE- & UX-BENCHMARKING",
    marketTrends: "■ BRANCHENWACHSTUM & MARKTTRENDS",
    methodology: "■ FORSCHUNGSMETHODIK",

    // Content
    medDominance: "Mediterrane Marktdominanz",
    medDominanceText:
      "Der europäische Bootsverleih-Markt wird von mediterranen Hotspots dominiert, wobei große P2P-Plattformen Zehntausende von Listings weltweit melden. Die Analyse der Nautal-Listing-Verteilung zeigt klare regionale Konzentrationsmuster:",
    chartEuropeListings: "EUROPÄISCHE BOOTS-LISTINGS NACH LAND",
    boatTypeDistribution: "BOOTSTYP-VERTEILUNG NACH REGION",

    // Table headers
    country: "Land",
    primaryVessel: "Primäre Schiffstypen",
    licenseFree: "Führerscheinfreie Optionen",
    marketFocus: "Marktfokus",

    // Financial section
    marketSizeText:
      "MARKTGRÖSSE: Der europäische Bootsverleih-Umsatz erreichte 2024 etwa 4,4 Milliarden Euro, wobei mediterrane Destinationen den Großteil der hochwertigen Buchungen ausmachen.",
    seasonalDemand: "SAISONALE NACHFRAGEMUSTER",
    seasonalText:
      "Die mediterrane Charter-Saison läuft von Mai bis Oktober, mit Spitzennachfrage in Juli-August. Monatliche Buchungsvolumen zeigen dramatische saisonale Schwankungen, wobei Hochsaison-Buchungen in Frankreich und Kroatien Tausende von Bootswochen erreichen.",
    pricingStructure: "PREISSTRUKTUR-ANALYSE",
    commissionFee: "PROVISIONS- & GEBÜHRENSTRUKTUR",
    chartCommission: "PLATTFORM-PROVISIONSRATEN-VERGLEICH",
    ownerEarnings:
      "EIGNER-EINNAHMEN: Nach Plattformgebühren behalten Eigner typischerweise 65-80% des Bruttoumsatzes. Boatsetters Modell zeigt Eigner-Einnahmen von ~650-800$ aus einer 1.000$-Vermietung nach Provisionen.",
    revenueBreakdown: "UMSATZAUFSCHLÜSSELUNG",
    chartRevenue: "TYPISCHE UMSATZVERTEILUNG",
    insurancePremium: "VERSICHERUNGSPRÄMIEN-STRUKTUR",

    // Platform details
    businessModel: "Geschäftsmodell:",
    founded: "Gegründet:",
    founders: "Gründer:",

    // Charts
    chartPlatformShare: "PLATTFORM-MARKTANTEIL NACH LISTINGS",
    chartTrustScores: "PLATTFORM-VERTRAUENSWERTE-VERGLEICH",
    chartSatisfaction: "KUNDENZUFRIEDENHEITSBEREICHE",
    chartGrowth: "MARKTWACHSTUMS-TRAJEKTORIE (2022-2027)",

    // Chart labels
    marketValue: "Marktwert (Milliarden USD)",
    currentPerformance: "Aktuelle Leistung",
    industryPotential: "Branchenpotential",
    commissionRate: "Provisionsrate (%)",
    boatListings: "Boots-Listings (Nautal Daten)",
    fiveStarReviews: "5-Sterne-Bewertungen (%)",
    oneStarReviews: "1-Stern-Bewertungen (%)",
    ownerEarnings: "Eigner-Einnahmen (65-80%)",
    platformCommission: "Plattform-Provision (20-35%)",
    processingFees: "Bearbeitungsgebühren (3-7%)",

    // Pain points
    criticalPain: "■ KRITISCHE PROBLEMBEREICHE IDENTIFIZIERT",
    lastMinute:
      "Last-Minute-Stornierungen: Meist zitiertes Problem auf allen Plattformen - Trips werden 18+ Stunden vor Abreise storniert",
    refundDelays:
      "Rückerstattungs-Verzögerungen: Schwierigkeiten bei der rechtzeitigen Rückerstattung, besonders bei wetterbedingten Stornierungen",
    customerService:
      'Kundenservice-Lücken: "Unmöglich, den Kundenservice zu erreichen" - besonders bei GetMyBoat bemerkt',
    hiddenFees:
      "Versteckte Gebühren: Unerwartete Kraftstoff-, Reinigungs- und Sicherheitskautions-Gebühren nicht klar ausgewiesen",
    listingAccuracy:
      'Listing-Genauigkeitsprobleme: "Köder-und-Wechsel"-Szenarien wo Boote nicht den Fotos oder Beschreibungen entsprechen',
    communication:
      "Kommunikationsbarrieren: Sprachlücken und Zeitzone-Verzögerungen beeinträchtigen Auflösungszeiten",

    // Platform feedback
    platformFeedback: "PLATTFORM-SPEZIFISCHES FEEDBACK",
    boatsetterStrengths: "■ BOATSETTER STÄRKEN",
    getmyboatChallenges: "■ GETMYBOAT HERAUSFORDERUNGEN",
    communityRec: "COMMUNITY-EMPFEHLUNGEN",
    userInsight:
      'NUTZER-EINBLICK: "Schreckliche Erfahrung mit GetMyBoat. Ziemlich gut mit Boatsetter. Viel besserer Kundenservice." - Reddit-Nutzer-Zusammenfassung, die gemeinsame Sentiment-Muster auf Bewertungsplattformen repräsentiert.',

    // Legal section
    europeanLicensing: "■ EUROPÄISCHE LIZENZIERUNGSANFORDERUNGEN",
    licensingText:
      "Die Bootsverleih-Lizenzierung variiert erheblich zwischen EU-Jurisdiktionen. Alle wichtigen Charter-Destinationen erfordern anerkannte Lizenzen für Bareboat-Vermietungen, während Skipper-Charter die Mieter von Lizenzierungsanforderungen befreien.",
    countryLicensing: "LÄNDERSPEZIFISCHE LIZENZIERUNGS-MATRIX",
    licenseRequired: "Lizenz Erforderlich Für",
    powerThreshold: "Leistungsschwelle",
    distanceLimits: "Entfernungslimits",
    skipperedEx: "Skipper-Ausnahme",
    platformVetting: "PLATTFORM-ÜBERPRÜFUNGSVERFAHREN",
    boatsetterVerification: "■ BOATSETTER VERIFIKATION",
    clickboatCompliance: "■ CLICK&BOAT COMPLIANCE",
    insuranceCoverage: "VERSICHERUNGSDECKUNGS-MODELLE",

    // Feature section
    bookingFlow: "BUCHUNGSABLAUF-ANALYSE",
    searchDiscovery: "■ SUCHE & ENTDECKUNG",
    bookingOptions: "■ BUCHUNGSOPTIONEN",
    cancellationPolicy: "STORNIERUNGSRICHTLINIEN-VERGLEICH",
    platform: "Plattform",
    standardPolicy: "Standard-Richtlinie",
    weatherCancel: "Wetter-Stornierung",
    refundTimeline: "Rückerstattungs-Zeitrahmen",
    serviceFeeRefund: "Service-Gebühren-Rückerstattung",
    mobileApp: "MOBILE APP LEISTUNG",
    uxStrengths: "UX-STÄRKEN NACH PLATTFORM",
    uxBoatsetter:
      "BOATSETTER: Betont Sicherheit und Gewissheit mit detaillierten Boot-Checklisten und 24/7-Support-Integration.",
    uxGetmyboat:
      "GETMYBOAT: Fokussiert auf Vielfalt und einfache Listung mit umfassenden Wassersport-Optionen.",
    uxClickboat:
      "CLICK&BOAT: Bietet reichhaltige Content-Erfahrung mit Zielführern und detaillierter Filterung.",

    // Growth section
    keyGrowthDrivers: "WICHTIGE WACHSTUMSTREIBER",
    experienceEconomy:
      "Erlebniswirtschafts-Expansion: Verschiebung zu erlebnisorientierten Ausgaben über materielle Güter",
    covidAccel:
      "COVID-19-Beschleunigung: Nachfrage nach Outdoor-, sozial distanzierter Erholung",
    digitalAdoption:
      "Digitale Plattform-Adoption: Erhöhte Komfort mit Peer-to-Peer-Marktplätzen",
    mobileFirst:
      "Mobile-First-Buchung: 50% der Boatsetter-Trips innerhalb von 10 Tagen mobil gebucht",
    consolidation:
      "Konsolidierungs-Trend: Große Akquisitionen schaffen größere, umfassendere Plattformen",
    marketConsolidation: "MARKT-KONSOLIDIERUNGS-AKTIVITÄT",
    recentMA:
      "AKTUELLE M&A: Click&Boat akquirierte Nautal; Borrow A Boat akquirierte Zizoo (2024); Click&Boat fusionierte mit Permira-unterstützter BoatsGroup. Dieser Konsolidierungstrend zeigt Marktreife und die Notwendigkeit für Skalierung an, um effektiv zu konkurrieren.",

    // Methodology
    dataCollection: "DATENSAMMLUNG-RAHMENWERK",
    primarySources:
      "Primärquellen: Plattform-Finanzberichte, Trustpilot-Bewertungen, Branchenpublikationen",
    quantAnalysis:
      "Quantitative Analyse: Listing-Zahlen, Preisdaten, Provisionsstrukturen, Wachstumsmetriken",
    sentimentAnalysis:
      "Sentiment-Analyse: NLP-Verarbeitung von 10.000+ Nutzerbewertungen über Plattformen",
    geoMapping:
      "Geografische Kartierung: Nautal-länderspezifische Listing-Verteilungsanalyse",
    regulatoryResearch:
      "Regulatorische Forschung: Seerechts-Analyse über 6 europäische Jurisdiktionen",
    uxBenchmarking:
      "UX-Benchmarking: Feature-Vergleich über 15 Plattform-Fähigkeiten",
    analyticalScope: "ANALYTISCHER UMFANG",
    timePeriod:
      "Zeitraum: 2021-2024 | Geografischer Fokus: Europa (primär), Nordamerika (vergleichend) | Plattform-Abdeckung: 8 große Marktplätze | Datenpunkte: 500+ analysierte Metriken",

    // Conclusion
    strategicConclusions: "■ STRATEGISCHE SCHLUSSFOLGERUNGEN & MARKTCHANCEN",
    conclusionText:
      "Der europäische Bootsverleih-Marktplatz zeigt starke Fundamentaldaten mit erheblichem Wachstumspotential. Jedoch bieten anhaltende Kundenservice-Herausforderungen und starre Stornierungsrichtlinien klare Chancen für neue Marktteilnehmer, die sich auf überlegene Nutzererfahrung konzentrieren.",
    keyStrategic: "WICHTIGE STRATEGISCHE EMPFEHLUNGEN",
    custServiceEx:
      "Kundenservice-Exzellenz: Implementierung von 24/7-mehrsprachigem Support mit garantierten Antwortzeiten",
    transparentPricing:
      "Transparente Preisgestaltung: All-inclusive-Preismodelle ohne versteckte Gebühren oder Kosten",
    flexibleCancel:
      "Flexible Stornierung: Wetterfreundliche Richtlinien mit sofortiger Rückerstattungsverarbeitung",
    qualityAssurance:
      "Qualitätssicherung: Obligatorische Boot-Verifikation mit Foto-/Spezifikations-Genauigkeitsgarantien",
    mobileFirstDesign:
      "Mobile-First-Design: Optimierte mobile Erfahrung für wachsendes On-Demand-Buchungssegment",
  },
};

// Language switching functionality
let currentLanguage = "en";

function switchLanguage(lang) {
  currentLanguage = lang;

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active");

  // Update all translatable elements
  updateTranslatableElements(lang);

  // Update chart titles
  updateChartTitles(lang);

  // Store language preference
  localStorage.setItem("preferredLanguage", lang);
}

function updateTranslatableElements(lang) {
  // Update elements with data attributes
  document.querySelectorAll("[data-en]").forEach((element) => {
    if (element.dataset[lang]) {
      element.textContent = element.dataset[lang];
    }
  });

  // Update specific elements
  const elementsToTranslate = [
    { selector: ".abstract h3", key: "executiveSummary" },
    { selector: ".abstract p", key: "abstractText" },
    { selector: ".toc h3", key: "tableOfContents" },
    { selector: '.toc a[href="#listing-distribution"]', key: "toc1" },
    { selector: '.toc a[href="#financial-metrics"]', key: "toc2" },
    { selector: '.toc a[href="#major-platforms"]', key: "toc3" },
    { selector: '.toc a[href="#community-sentiment"]', key: "toc4" },
    { selector: '.toc a[href="#legal-frameworks"]', key: "toc5" },
    { selector: '.toc a[href="#feature-benchmarking"]', key: "toc6" },
    { selector: '.toc a[href="#market-trends"]', key: "toc7" },
    { selector: '.toc a[href="#methodology"]', key: "toc8" },
  ];

  elementsToTranslate.forEach((item) => {
    const element = document.querySelector(item.selector);
    if (element && translations[lang][item.key]) {
      element.textContent = translations[lang][item.key];
    }
  });
}

function updateChartTitles(lang) {
  // Update chart titles if charts exist
  const chartTitleMap = {
    europeListingsChart: "chartEuropeListings",
    commissionChart: "chartCommission",
    revenueChart: "chartRevenue",
    platformShareChart: "chartPlatformShare",
    trustScoresChart: "chartTrustScores",
    satisfactionChart: "chartSatisfaction",
    growthChart: "chartGrowth",
  };

  Object.entries(chartTitleMap).forEach(([chartId, translationKey]) => {
    const chart = window.charts && window.charts[chartId];
    if (chart && translations[lang][translationKey]) {
      chart.options.plugins.title.text = translations[lang][translationKey];
      chart.update();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set up language toggle buttons
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.dataset.lang;
      switchLanguage(lang);
    });
  });

  // Load saved language preference
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  if (savedLang !== "en") {
    switchLanguage(savedLang);
  }
});

// Export for use in other scripts
window.languageManager = {
  switchLanguage,
  currentLanguage: () => currentLanguage,
  translations,
};

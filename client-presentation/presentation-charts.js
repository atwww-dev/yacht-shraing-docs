// A dedicated charts file for the presentation
document.addEventListener("DOMContentLoaded", function () {
  // Common Chart Options
  const isMobile = window.innerWidth <= 768;
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: {
          size: isMobile ? 10 : 12,
        },
        bodyFont: {
          size: isMobile ? 9 : 11,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: isMobile ? 8 : 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: isMobile ? 8 : 10,
          },
        },
      },
    },
  };

  const vibrantPalette = [
    "#2563eb",
    "#059669",
    "#dc2626",
    "#ea580c",
    "#7c3aed",
    "#0891b2",
    "#65a30d",
    "#be185d",
  ];

  // Slide 1: Platform Market Share (Pie Chart)
  const platformCtx = document
    .getElementById("platformChart")
    ?.getContext("2d");
  if (platformCtx) {
    new Chart(platformCtx, {
      type: "pie",
      data: {
        labels: ["GetMyBoat", "Boatsetter", "Click&Boat", "Others"],
        datasets: [
          {
            label: "Platform Market Share by Listings",
            data: [180, 50, 50, 60],
            backgroundColor: vibrantPalette,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: isMobile ? 10 : 12,
                weight: "bold",
              },
              color: "#000000",
              padding: isMobile ? 8 : 15,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label + ": " + context.parsed + "K boats";
              },
            },
          },
        },
      },
    });
  }

  // Slide 2: Market Growth Chart
  const growthCtx = document.getElementById("growthChart")?.getContext("2d");
  if (growthCtx) {
    new Chart(growthCtx, {
      type: "line",
      data: {
        labels: ["2022", "2023", "2024", "2025", "2026", "2027"],
        datasets: [
          {
            label: "Market Value ($B)",
            data: [16.5, 17.8, 19.2, 20.1, 21.2, 22.3],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              font: {
                size: isMobile ? 11 : 14,
                weight: "bold",
              },
              color: "#000000",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: isMobile ? 9 : 12,
                weight: "bold",
              },
              color: "#4a4a4a",
            },
            grid: {
              color: "#e0e0e0",
            },
          },
          y: {
            beginAtZero: false,
            ticks: {
              font: {
                size: isMobile ? 9 : 12,
                weight: "bold",
              },
              color: "#4a4a4a",
              callback: function (value) {
                return "$" + value + "B";
              },
            },
            grid: {
              color: "#e0e0e0",
            },
          },
        },
      },
    });
  }

  // Slide 3: Commission Chart (Bar Chart)
  const commissionCtx = document
    .getElementById("commissionChart")
    ?.getContext("2d");
  if (commissionCtx) {
    new Chart(commissionCtx, {
      type: "bar",
      data: {
        labels: ["Boatsetter", "Click&Boat", "GetMyBoat", "Our Platform"],
        datasets: [
          {
            label: "Platform Commission Rate (%)",
            data: [35, 20, 11.5, 8],
            backgroundColor: ["#dc2626", "#ea580c", "#7c3aed", "#059669"],
            borderRadius: 6,
            borderWidth: 2,
            borderColor: "#ffffff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label + ": " + context.parsed + "%";
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: isMobile ? 9 : 12,
                weight: "bold",
              },
              color: "#000000",
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 40,
            ticks: {
              font: {
                size: isMobile ? 9 : 12,
                weight: "bold",
              },
              color: "#4a4a4a",
              callback: function (value) {
                return value + "%";
              },
            },
            grid: {
              color: "#e0e0e0",
            },
          },
        },
      },
    });
  }
});

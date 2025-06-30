// A dedicated charts file for the presentation
document.addEventListener("DOMContentLoaded", function () {
  // Common Chart Options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const vibrantPalette = [
    "#0074D9",
    "#2ECC40",
    "#FF4136",
    "#FF851B",
    "#B10DC9",
    "#FFDC00",
    "#39CCCC",
    "#85144b",
  ];

  // Slide 1: Platform Market Share
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
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "top",
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
            borderColor: "#0074D9",
            backgroundColor: "rgba(0, 116, 217, 0.1)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (value) {
                return "$" + value + "B";
              },
            },
          },
        },
      },
    });
  }

  // Slide 3: Commission Chart
  const commissionCtx = document
    .getElementById("commissionChart")
    ?.getContext("2d");
  if (commissionCtx) {
    new Chart(commissionCtx, {
      type: "bar",
      data: {
        labels: ["Boatsetter", "GetMyBoat", "Click&Boat"],
        datasets: [
          {
            label: "Platform Commission Rate (%)",
            data: [35, 11.5, 20], // Example data
            backgroundColor: vibrantPalette.slice(0, 3),
            borderRadius: 4,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: 40,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
      },
    });
  }
});

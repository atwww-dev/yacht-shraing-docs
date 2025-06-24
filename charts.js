// Global charts object for language switching
window.charts = {};

// Geographic Distribution Chart
const geographicCtx = document
  .getElementById("geographicChart")
  .getContext("2d");
window.charts.geographicChart = new Chart(geographicCtx, {
  type: "doughnut",
  data: {
    labels: ["France", "Italy", "Croatia", "Greece", "Spain", "Others"],
    datasets: [
      {
        data: [10372, 7978, 6555, 5888, 5702, 12000],
        backgroundColor: [
          "#000000",
          "#1a1a1a",
          "#333333",
          "#4d4d4d",
          "#666666",
          "#999999",
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "MEDITERRANEAN BOAT LISTINGS DISTRIBUTION",
        color: "#000000",
        font: {
          size: 14,
          weight: "bold",
          family: "'Arial', sans-serif",
        },
        padding: 20,
      },
      legend: {
        position: "bottom",
        labels: {
          color: "#000000",
          font: {
            weight: "bold",
          },
          usePointStyle: true,
          padding: 15,
        },
      },
    },
  },
});

// Platform Performance Chart
const platformCtx = document.getElementById("platformChart").getContext("2d");
window.charts.platformChart = new Chart(platformCtx, {
  type: "bar",
  data: {
    labels: ["Boatsetter", "Click&Boat", "GetMyBoat"],
    datasets: [
      {
        label: "5-Star Reviews (%)",
        data: [87, 72, 70],
        backgroundColor: "#059669",
        borderColor: "#ffffff",
        borderWidth: 2,
      },
      {
        label: "1-Star Reviews (%)",
        data: [4, 10, 25],
        backgroundColor: "#dc2626",
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "#cccccc",
        },
        ticks: {
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
      },
      x: {
        grid: {
          color: "#cccccc",
        },
        ticks: {
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "PLATFORM TRUST SCORES COMPARISON",
        color: "#000000",
        font: {
          size: 14,
          weight: "bold",
          family: "'Arial', sans-serif",
        },
        padding: 20,
      },
      legend: {
        labels: {
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
      },
    },
  },
});

// Owner Economics Chart
const economicsCtx = document.getElementById("economicsChart").getContext("2d");
window.charts.economicsChart = new Chart(economicsCtx, {
  type: "bar",
  data: {
    labels: ["Marina Fees", "Insurance", "Maintenance", "Depreciation"],
    datasets: [
      {
        label: "Annual Costs (€)",
        data: [5500, 2200, 3000, 4500],
        backgroundColor: "#dc2626",
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#cccccc",
        },
        ticks: {
          color: "#000000",
          font: {
            weight: "bold",
          },
          callback: function (value) {
            return "€" + value;
          },
        },
      },
      x: {
        grid: {
          color: "#cccccc",
        },
        ticks: {
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "ANNUAL BOAT OWNERSHIP COSTS",
        color: "#000000",
        font: {
          size: 14,
          weight: "bold",
          family: "'Arial', sans-serif",
        },
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  },
});

// Update chart titles when language changes
function updateChartTitles(lang) {
  const titleTranslations = {
    en: {
      geographic: "MEDITERRANEAN BOAT LISTINGS DISTRIBUTION",
      platform: "PLATFORM TRUST SCORES COMPARISON",
      economics: "ANNUAL BOAT OWNERSHIP COSTS",
    },
    de: {
      geographic: "MEDITERRANE BOOTS-LISTINGS-VERTEILUNG",
      platform: "PLATTFORM-VERTRAUENSWERTE-VERGLEICH",
      economics: "JÄHRLICHE BOOTSEIGENTUMS-KOSTEN",
    },
  };

  if (window.charts.geographicChart) {
    window.charts.geographicChart.options.plugins.title.text =
      titleTranslations[lang].geographic;
    window.charts.geographicChart.update();
  }

  if (window.charts.platformChart) {
    window.charts.platformChart.options.plugins.title.text =
      titleTranslations[lang].platform;
    window.charts.platformChart.update();
  }

  if (window.charts.economicsChart) {
    window.charts.economicsChart.options.plugins.title.text =
      titleTranslations[lang].economics;
    window.charts.economicsChart.update();
  }
}

// Export for language switching
window.updateChartTitles = updateChartTitles;

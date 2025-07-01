// Global charts object for language switching
window.charts = {};

// Shared vibrant palette for consistency with other reports
const vibrantPalette = [
  "#0074D9", // blue
  "#2ECC40", // green
  "#FF4136", // red
  "#FF851B", // orange
  "#B10DC9", // purple
  "#FFDC00", // yellow
  "#39CCCC", // teal
  "#85144b", // maroon
  "#3D9970", // olive
  "#F012BE", // magenta
];

// Market Growth Chart
const growthCtx = document.getElementById("growthChart").getContext("2d");
window.charts.growthChart = new Chart(growthCtx, {
  type: "line",
  data: {
    labels: ["2022", "2023", "2024", "2025", "2026", "2027"],
    datasets: [
      {
        label: "Market Value (Billions USD)",
        data: [16.5, 17.5, 18.6, 19.7, 21.0, 22.3],
        borderColor: vibrantPalette[0],
        backgroundColor: "rgba(0, 116, 217, 0.1)",
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#000000",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        min: 15,
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
        text: "MARKET GROWTH TRAJECTORY (2022-2027)",
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

// Platform Market Share Chart
const platformCtx = document.getElementById("platformChart").getContext("2d");
window.charts.platformShareChart = new Chart(platformCtx, {
  type: "doughnut",
  data: {
    labels: [
      "GetMyBoat",
      "Borrow A Boat/Zizoo",
      "Click&Boat",
      "Boatsetter",
      "Others",
    ],
    datasets: [
      {
        data: [180000, 60000, 50000, 50000, 40000],
        backgroundColor: vibrantPalette.slice(0, 5),
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
        text: "PLATFORM MARKET SHARE BY LISTINGS",
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
        },
      },
    },
  },
});

// Commission Rates Chart
const commissionCtx = document
  .getElementById("commissionChart")
  .getContext("2d");
window.charts.commissionChart = new Chart(commissionCtx, {
  type: "bar",
  data: {
    labels: ["GetMyBoat", "Boatsetter", "Click&Boat", "Industry Avg"],
    datasets: [
      {
        label: "Commission Rate (%)",
        data: [11.5, 20, 15, 15.5],
        backgroundColor: [
          vibrantPalette[0],
          vibrantPalette[1],
          vibrantPalette[2],
          vibrantPalette[3],
        ],
        borderColor: vibrantPalette[0],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 25,
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
        text: "PLATFORM COMMISSION RATES COMPARISON",
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

// Customer Satisfaction Chart
const satisfactionCtx = document
  .getElementById("satisfactionChart")
  .getContext("2d");
window.charts.satisfactionChart = new Chart(satisfactionCtx, {
  type: "radar",
  data: {
    labels: [
      "Booking Process",
      "Platform Features",
      "Customer Service",
      "Cancellation Policy",
      "Fee Transparency",
      "Overall Experience",
    ],
    datasets: [
      {
        label: "Current Performance",
        data: [8, 7, 4, 3, 4, 6],
        borderColor: vibrantPalette[0],
        backgroundColor: "rgba(0, 116, 217, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "#000000",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
      {
        label: "Industry Potential",
        data: [9, 8, 8, 8, 8, 8],
        borderColor: vibrantPalette[2],
        backgroundColor: "rgba(255, 65, 54, 0.1)",
        borderWidth: 3,
        borderDash: [5, 5],
        pointBackgroundColor: "#dc2626",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        grid: {
          color: "#cccccc",
        },
        angleLines: {
          color: "#cccccc",
        },
        pointLabels: {
          color: "#000000",
          font: {
            weight: "bold",
          },
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
        text: "CUSTOMER SATISFACTION AREAS",
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

// European Listings Heatmap Chart
const heatmapCtx = document.getElementById("heatmapChart").getContext("2d");
window.charts.europeListingsChart = new Chart(heatmapCtx, {
  type: "bar",
  data: {
    labels: [
      "France",
      "Italy",
      "Croatia",
      "Greece",
      "Spain",
      "Turkey",
      "Others",
    ],
    datasets: [
      {
        label: "Boat Listings (Nautal Data)",
        data: [10372, 7978, 6555, 5888, 5702, 3500, 8000],
        backgroundColor: vibrantPalette.slice(0, 7),
        borderColor: vibrantPalette[0],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
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
      y: {
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
        text: "EUROPEAN BOAT LISTINGS BY COUNTRY",
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

// Platform Trust Scores Chart
const trustCtx = document.getElementById("trustChart").getContext("2d");
window.charts.trustScoresChart = new Chart(trustCtx, {
  type: "bar",
  data: {
    labels: ["Boatsetter", "Click&Boat", "GetMyBoat"],
    datasets: [
      {
        label: "5-Star Reviews (%)",
        data: [87, 72, 70],
        backgroundColor: vibrantPalette[0],
        borderColor: vibrantPalette[0],
        borderWidth: 2,
      },
      {
        label: "1-Star Reviews (%)",
        data: [4, 10, 25],
        backgroundColor: vibrantPalette[2],
        borderColor: vibrantPalette[2],
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

// Revenue Model Comparison Chart
const revenueCtx = document.getElementById("revenueChart").getContext("2d");
window.charts.revenueChart = new Chart(revenueCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Owner Earnings (65-80%)",
      "Platform Commission (20-35%)",
      "Processing Fees (3-7%)",
    ],
    datasets: [
      {
        data: [72.5, 22.5, 5],
        backgroundColor: [
          vibrantPalette[0],
          vibrantPalette[3],
          vibrantPalette[5],
        ],
        borderColor: vibrantPalette[0],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "TYPICAL REVENUE DISTRIBUTION",
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
        },
      },
    },
  },
});

// Global charts object for language switching
window.charts = {};

// Example color palette for charts
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

// Owner Costs Analysis Chart
const ownerCostsCtx = document
  .getElementById("ownerCostsChart")
  .getContext("2d");
window.charts.ownerCostsChart = new Chart(ownerCostsCtx, {
  type: "bar",
  data: {
    labels: ["Marina Fees", "Insurance", "Maintenance", "Depreciation"],
    datasets: [
      {
        label: "Annual Costs (€)",
        data: [5500, 2200, 3000, 4500],
        backgroundColor: vibrantPalette,
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

// Owner Risk Concerns Chart
const ownerConcernsCtx = document
  .getElementById("ownerConcernsChart")
  .getContext("2d");
window.charts.ownerConcernsChart = new Chart(ownerConcernsCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Damage to Vessel",
      "Insurance Gaps",
      "Liability Issues",
      "Maintenance Wear",
      "Legal/Tax Exposure",
    ],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: vibrantPalette,
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
        text: "OWNER RISK CONCERNS DISTRIBUTION",
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

// Renter Demographics Chart
const renterDemographicsCtx = document
  .getElementById("renterDemographicsChart")
  .getContext("2d");
window.charts.renterDemographicsChart = new Chart(renterDemographicsCtx, {
  type: "bar",
  data: {
    labels: ["25-35", "36-45", "46-55", "56-65", "65+"],
    datasets: [
      {
        label: "Percentage of Renters",
        data: [15, 28, 35, 18, 4],
        backgroundColor: vibrantPalette,
        borderColor: "#ffffff",
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
        max: 40,
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
        text: "RENTER DEMOGRAPHICS BY AGE GROUP",
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

// Value Proposition Comparison Chart
const valuePropositionCtx = document
  .getElementById("valuePropositionChart")
  .getContext("2d");
window.charts.valuePropositionChart = new Chart(valuePropositionCtx, {
  type: "radar",
  data: {
    labels: [
      "Cost Effectiveness",
      "Fleet Variety",
      "Booking Flexibility",
      "Service Quality",
      "Trust & Safety",
      "User Experience",
    ],
    datasets: [
      {
        label: "Traditional Charter",
        data: [6, 5, 4, 8, 9, 7],
        borderColor: vibrantPalette[0],
        backgroundColor: "rgba(102, 102, 102, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: vibrantPalette[0],
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
      {
        label: "P2P Platform",
        data: [9, 8, 9, 6, 6, 7],
        borderColor: vibrantPalette[1],
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: vibrantPalette[1],
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
        text: "VALUE PROPOSITION COMPARISON",
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

// European VAT Rates Chart
const vatRatesCtx = document.getElementById("vatRatesChart").getContext("2d");
window.charts.vatRatesChart = new Chart(vatRatesCtx, {
  type: "bar",
  data: {
    labels: ["Croatia", "Greece", "Italy", "France", "Spain", "Portugal"],
    datasets: [
      {
        label: "VAT Rate (%)",
        data: [25, 24, 22, 20, 21, 23],
        backgroundColor: vibrantPalette,
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
        max: 30,
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
        text: "EUROPEAN VAT RATES ON CHARTER SERVICES",
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

// Trust Framework Components Chart
const trustFrameworkCtx = document
  .getElementById("trustFrameworkChart")
  .getContext("2d");
window.charts.trustFrameworkChart = new Chart(trustFrameworkCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Identity Verification",
      "License Authentication",
      "Insurance Coverage",
      "Payment Security",
      "Review System",
    ],
    datasets: [
      {
        data: [25, 20, 25, 15, 15],
        backgroundColor: vibrantPalette,
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
        text: "TRUST FRAMEWORK COMPONENTS",
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

// Insurance Coverage Distribution Chart
const insuranceModelCtx = document
  .getElementById("insuranceModelChart")
  .getContext("2d");
window.charts.insuranceModelChart = new Chart(insuranceModelCtx, {
  type: "bar",
  data: {
    labels: ["Hull Damage", "Liability", "Personal Accident", "Equipment"],
    datasets: [
      {
        label: "Coverage Limits (€)",
        data: [275000, 1500000, 100000, 7500],
        backgroundColor: vibrantPalette,
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
            return "€" + value / 1000 + "K";
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
        text: "INSURANCE COVERAGE DISTRIBUTION",
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

// Competitive Matrix Chart
const competitiveMatrixCtx = document
  .getElementById("competitiveMatrix")
  .getContext("2d");
window.charts.competitiveMatrix = new Chart(competitiveMatrixCtx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Traditional Charter",
        data: [
          { x: 7, y: 6 },
          { x: 8, y: 5 },
          { x: 6, y: 7 },
        ],
        backgroundColor: vibrantPalette[0],
        borderColor: vibrantPalette[0],
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: "Existing P2P",
        data: [
          { x: 5, y: 8 },
          { x: 6, y: 7 },
          { x: 4, y: 9 },
        ],
        backgroundColor: vibrantPalette[1],
        borderColor: vibrantPalette[1],
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: "Market Opportunity",
        data: [{ x: 9, y: 9 }],
        backgroundColor: vibrantPalette[2],
        borderColor: vibrantPalette[2],
        borderWidth: 2,
        pointRadius: 12,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0,
        max: 10,
        title: {
          display: true,
          text: "Trust & Safety",
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
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
        min: 0,
        max: 10,
        title: {
          display: true,
          text: "Cost Effectiveness",
          color: "#000000",
          font: {
            weight: "bold",
          },
        },
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
        text: "PLATFORM COMPETITIVE POSITIONING",
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

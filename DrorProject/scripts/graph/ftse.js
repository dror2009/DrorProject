// Mock data for FTSE 100 Index
const ftseMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [7500, 7520, 7510, 7535, 7525, 7540]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [7400, 7450, 7480, 7500, 7540]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [7300, 7350, 7450, 7540]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [7200, 7250, 7350, 7400, 7500, 7600, 7550, 7570, 7600, 7650, 7700, 7750]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [6000, 6200, 6400, 6600, 7000, 7200, 7400, 7500, 7600, 7700]
    }
};

// Chart instance variable
let ftseChart;

// Initialize the FTSE 100 chart with default data (e.g., YTD)
const initFTSEChart = () => {
    const ctx = document.getElementById('ftseChart').getContext('2d');
    ftseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ftseMockData.YTD.labels,
            datasets: [{
                label: 'FTSE 100 Index',
                data: ftseMockData.YTD.data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time',
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Index Value',
                    },
                    beginAtZero: false
                }
            }
        }
    });
};

// Update the FTSE 100 chart with new data
const updateFTSEChart = (timeframe) => {
    const { labels, data } = ftseMockData[timeframe];
    ftseChart.data.labels = labels;
    ftseChart.data.datasets[0].data = data;
    ftseChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initFTSEChart);
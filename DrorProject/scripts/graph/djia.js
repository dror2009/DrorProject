// Mock data for DJIA Index
const djiaMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [34000, 34100, 34050, 34200, 34150, 34250]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [33800, 33900, 34050, 34150, 34250]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [33000, 33500, 34000, 34250]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [32000, 32500, 33000, 33500, 34000, 34500, 34250, 34300, 34400, 34500, 34600, 34700]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [18000, 19000, 20000, 21000, 23000, 25000, 27000, 29000, 32000, 34000]
    }
};

// Chart instance variable
let djiaChart;

// Initialize the DJIA chart with default data (e.g., YTD)
const initDJIAChart = () => {
    const ctx = document.getElementById('djiaChart').getContext('2d');
    djiaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: djiaMockData.YTD.labels,
            datasets: [{
                label: 'Dow Jones Industrial Average',
                data: djiaMockData.YTD.data,
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

// Update the DJIA chart with new data
const updateDJIAChart = (timeframe) => {
    const { labels, data } = djiaMockData[timeframe];
    djiaChart.data.labels = labels;
    djiaChart.data.datasets[0].data = data;
    djiaChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initDJIAChart);

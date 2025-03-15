// Mock data for CAC 40 Index
const cacMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [7000, 7020, 7010, 7035, 7025, 7040]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [6900, 6950, 6980, 7000, 7040]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [6800, 6850, 6950, 7040]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [6700, 6750, 6850, 6900, 7000, 7100, 7050, 7070, 7100, 7150, 7200, 7250]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [5000, 5200, 5400, 5600, 6000, 6400, 6700, 6900, 7100, 7250]
    }
};

// Chart instance variable
let cacChart;

// Initialize the CAC 40 chart with default data (e.g., YTD)
const initCACChart = () => {
    const ctx = document.getElementById('cacChart').getContext('2d');
    cacChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cacMockData.YTD.labels,
            datasets: [{
                label: 'CAC 40 Index',
                data: cacMockData.YTD.data,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
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

// Update the CAC 40 chart with new data
const updateCACChart = (timeframe) => {
    const { labels, data } = cacMockData[timeframe];
    cacChart.data.labels = labels;
    cacChart.data.datasets[0].data = data;
    cacChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCACChart);

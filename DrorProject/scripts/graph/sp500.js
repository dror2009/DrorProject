// Mock data for S&P 500 Index
const sp500MockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [4300, 4310, 4305, 4320, 4315, 4325]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [4280, 4290, 4300, 4310, 4325]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [4200, 4250, 4300, 4325]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [4100, 4150, 4200, 4250, 4300, 4350, 4325, 4330, 4340, 4350, 4360, 4370]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 4300]
    }
};

// Chart instance variable
let sp500Chart;

// Initialize the S&P 500 chart with default data (e.g., YTD)
const initSP500Chart = () => {
    const ctx = document.getElementById('sp500Chart').getContext('2d');
    sp500Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sp500MockData.YTD.labels,
            datasets: [{
                label: 'S&P 500 Index',
                data: sp500MockData.YTD.data,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
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

// Update the S&P 500 chart with new data
const updateSP500Chart = (timeframe) => {
    const { labels, data } = sp500MockData[timeframe];
    sp500Chart.data.labels = labels;
    sp500Chart.data.datasets[0].data = data;
    sp500Chart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initSP500Chart);

const ta125MockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [1750, 1760, 1755, 1770, 1765, 1780]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [1720, 1730, 1745, 1765, 1780]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [1680, 1700, 1725, 1780]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [1600, 1620, 1640, 1680, 1720, 1760, 1780, 1785, 1790, 1800, 1810, 1820]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [1200, 1300, 1400, 1500, 1600, 1700, 1750, 1770, 1780, 1800]
    }
};

// Chart instance variable
let ta125Chart;

// Initialize the TA-125 chart with default data (e.g., YTD)
const initTA125Chart = () => {
    const ctx = document.getElementById('ta125Chart').getContext('2d');
    ta125Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ta125MockData.YTD.labels,
            datasets: [{
                label: 'TA-125 Index',
                data: ta125MockData.YTD.data,
                borderColor: 'rgba(75, 75, 192, 1)',
                backgroundColor: 'rgba(75, 75, 192, 0.2)',
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

// Update the TA-125 chart with new data
const updateTA125Chart = (timeframe) => {
    const { labels, data } = ta125MockData[timeframe];
    ta125Chart.data.labels = labels;
    ta125Chart.data.datasets[0].data = data;
    ta125Chart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTA125Chart);

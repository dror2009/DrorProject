const ta35MockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [1600, 1610, 1605, 1620, 1615, 1630]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [1580, 1590, 1605, 1615, 1630]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [1550, 1575, 1600, 1630]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [1500, 1520, 1540, 1570, 1600, 1620, 1630, 1640, 1650, 1660, 1670, 1680]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [1200, 1300, 1400, 1450, 1500, 1550, 1580, 1600, 1620, 1630]
    }
};

// Chart instance variable
let ta35Chart;

// Initialize the TA-35 chart with default data (e.g., YTD)
const initTA35Chart = () => {
    const ctx = document.getElementById('ta35Chart').getContext('2d');
    ta35Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ta35MockData.YTD.labels,
            datasets: [{
                label: 'TA-35 Index',
                data: ta35MockData.YTD.data,
                borderColor: 'rgba(192, 75, 75, 1)',
                backgroundColor: 'rgba(192, 75, 75, 0.2)',
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

// Update the TA-35 chart with new data
const updateTA35Chart = (timeframe) => {
    const { labels, data } = ta35MockData[timeframe];
    ta35Chart.data.labels = labels;
    ta35Chart.data.datasets[0].data = data;
    ta35Chart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTA35Chart);

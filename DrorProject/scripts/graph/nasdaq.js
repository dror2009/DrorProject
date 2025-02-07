// Mock data for Nasdaq Composite Index
const mockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [13000, 13100, 13050, 13200, 13150, 13250]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [12900, 13000, 13150, 13200, 13250]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [12800, 12900, 13100, 13250]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [12500, 12650, 12800, 12950, 13100, 13200, 13250, 13300, 13350, 13400, 13500, 13600]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [5000, 5500, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000]
    }
};

// Chart instance variable
let chart;

// Initialize the chart with default data (e.g., YTD)
const initChart = () => {
    const ctx = document.getElementById('nasdaqChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.YTD.labels,
            datasets: [{
                label: 'Nasdaq Composite Index',
                data: mockData.YTD.data,
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

// Update the chart with new data
const updateChart = (timeframe) => {
    const { labels, data } = mockData[timeframe];
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initChart);

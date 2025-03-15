// Mock data for Euro Stoxx 50 Index
const euroStoxxMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [4300, 4320, 4310, 4335, 4325, 4340]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [4250, 4280, 4290, 4300, 4340]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [4200, 4250, 4290, 4340]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [4100, 4150, 4200, 4250, 4300, 4400, 4375, 4385, 4400, 4450, 4500, 4550]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [3000, 3200, 3400, 3600, 3800, 4000, 4200, 4300, 4400, 4550]
    }
};

// Chart instance variable
let euroStoxxChart;

// Initialize the Euro Stoxx 50 chart with default data (e.g., YTD)
const initEuroStoxxChart = () => {
    const ctx = document.getElementById('euroStoxxChart').getContext('2d');
    euroStoxxChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: euroStoxxMockData.YTD.labels,
            datasets: [{
                label: 'Euro Stoxx 50 Index',
                data: euroStoxxMockData.YTD.data,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
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

// Update the Euro Stoxx 50 chart with new data
const updateEuroStoxxChart = (timeframe) => {
    const { labels, data } = euroStoxxMockData[timeframe];
    euroStoxxChart.data.labels = labels;
    euroStoxxChart.data.datasets[0].data = data;
    euroStoxxChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initEuroStoxxChart);

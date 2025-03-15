// Mock data for DAX Index
const daxMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [15800, 15850, 15820, 15900, 15860, 15920]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [15600, 15700, 15780, 15850, 15920]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [15400, 15550, 15700, 15920]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [15000, 15150, 15300, 15500, 15700, 16000, 15950, 16020, 16100, 16200, 16300, 16400]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [11000, 12000, 13000, 14000, 14500, 15000, 15500, 15700, 16000, 16200]
    }
};

// Chart instance variable
let daxChart;

// Initialize the DAX chart with default data (e.g., YTD)
const initDAXChart = () => {
    const ctx = document.getElementById('daxChart').getContext('2d');
    daxChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: daxMockData.YTD.labels,
            datasets: [{
                label: 'DAX Index',
                data: daxMockData.YTD.data,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
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

// Update the DAX chart with new data
const updateDAXChart = (timeframe) => {
    const { labels, data } = daxMockData[timeframe];
    daxChart.data.labels = labels;
    daxChart.data.datasets[0].data = data;
    daxChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initDAXChart);

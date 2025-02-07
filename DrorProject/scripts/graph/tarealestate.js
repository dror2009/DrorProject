const tarealestateMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [2200, 2210, 2205, 2220, 2215, 2230]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [2180, 2190, 2205, 2215, 2230]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [2150, 2175, 2200, 2230]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [2100, 2120, 2140, 2170, 2200, 2220, 2230, 2240, 2250, 2260, 2270, 2280]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2150, 2200, 2230]
    }
};

// Chart instance variable
let tarealestateChart;

// Initialize the TA-Real Estate chart with default data (e.g., YTD)
const initTARealEstateChart = () => {
    const ctx = document.getElementById('tarealestateChart').getContext('2d');
    tarealestateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tarealestateMockData.YTD.labels,
            datasets: [{
                label: 'TA-Real Estate Index',
                data: tarealestateMockData.YTD.data,
                borderColor: 'rgba(192, 192, 75, 1)',
                backgroundColor: 'rgba(192, 192, 75, 0.2)',
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

// Update the TA-Real Estate chart with new data
const updateTARealEstateChart = (timeframe) => {
    const { labels, data } = tarealestateMockData[timeframe];
    tarealestateChart.data.labels = labels;
    tarealestateChart.data.datasets[0].data = data;
    tarealestateChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTARealEstateChart);

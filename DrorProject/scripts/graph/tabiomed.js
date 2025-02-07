const tabiomedMockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [900, 905, 910, 915, 920, 925]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [880, 890, 900, 910, 925]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [850, 870, 890, 925]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [800, 810, 820, 850, 870, 890, 925, 930, 935, 940, 950, 960]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [700, 720, 740, 760, 800, 850, 880, 900, 920, 925]
    }
};

// Chart instance variable
let tabiomedChart;

// Initialize the TA-Biomed chart with default data (e.g., YTD)
const initTABiomedChart = () => {
    const ctx = document.getElementById('tabiomedChart').getContext('2d');
    tabiomedChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tabiomedMockData.YTD.labels,
            datasets: [{
                label: 'TA-Biomed Index',
                data: tabiomedMockData.YTD.data,
                borderColor: 'rgba(75, 192, 75, 1)',
                backgroundColor: 'rgba(75, 192, 75, 0.2)',
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

// Update the TA-Biomed chart with new data
const updateTABiomedChart = (timeframe) => {
    const { labels, data } = tabiomedMockData[timeframe];
    tabiomedChart.data.labels = labels;
    tabiomedChart.data.datasets[0].data = data;
    tabiomedChart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTABiomedChart);

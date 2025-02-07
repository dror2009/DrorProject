const russell2000MockData = {
    "1D": {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        data: [1800, 1820, 1810, 1830, 1825, 1840]
    },
    "5D": {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        data: [1750, 1760, 1775, 1800, 1840]
    },
    "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [1700, 1725, 1750, 1840]
    },
    "YTD": {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [1600, 1650, 1700, 1750, 1800, 1850, 1840, 1855, 1860, 1870, 1880, 1900]
    },
    "ALL": {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1840]
    }
};

// Chart instance variable
let russell2000Chart;

// Initialize the Russell 2000 chart with default data (e.g., YTD)
const initRussell2000Chart = () => {
    const ctx = document.getElementById('russell2000Chart').getContext('2d');
    russell2000Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: russell2000MockData.YTD.labels,
            datasets: [{
                label: 'Russell 2000 Index',
                data: russell2000MockData.YTD.data,
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

// Update the Russell 2000 chart with new data
const updateRussell2000Chart = (timeframe) => {
    const { labels, data } = russell2000MockData[timeframe];
    russell2000Chart.data.labels = labels;
    russell2000Chart.data.datasets[0].data = data;
    russell2000Chart.update();
};

// Initialize the chart when the DOM is loaded
document.addEventListener('DOMContentLoaded', initRussell2000Chart);

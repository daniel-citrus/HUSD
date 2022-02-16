let colors1 = [
    '#47ACB1',
    '#C9222B',
    '#96247A',
    '#FFCD33',
    '#286C4F',
    '#472DEE',
    '#F26522',
    '#542923',
    '#676766'
]

let labels1 = [
    'Hispanic or Latino of Any Race',
    'Asian, Not Hispanic',
    'African American, Not Hispanic',
    'Filipino, Not Hispanic',
    'White, not Hispanic',
    'Pacific Islander, Not Hispanic',
    'American Indian or Alaska Native, Not Hispanic',
    'Two or More Races, Not Hispanic',
    'Not Reported'
];

let data1 = [
    11889,
    1558,
    1370,
    1242,
    609,
    603,
    32,
    731,
    41
];

let myChart = document.getElementById('myChart').getContext('2d');

let chart = new Chart(myChart, {
    type: 'pie',
    data: {
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }],
        labels: labels1
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Student Population and Demographics',

                font: {
                    size: 24
                },

                color: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',

                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                },

                onHover: handleHover,
                onLeave: handleLeave
            }
        }
    }
});

// Append '4d' to the colors (alpha channel), except for the hovered index
function handleHover(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
    });
    legend.chart.update();
}

// Removes the alpha channel from background colors
function handleLeave(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    legend.chart.update();
}
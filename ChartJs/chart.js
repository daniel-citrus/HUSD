let colors1 = [
    '#47ACB1',
    '#96247A',
    '#C9222B',
    '#FFCD33',
    '#286C4F',
    '#542923',
    '#472DEE',
    '#F26522',
    '#676766'
]

let labels1 = ['Hispanic or Latino of Any Race',
    'African American, Not Hispanic',
    'Asian, Not Hispanic',
    'Filipino, Not Hispanic',
    'White, not Hispanic',
    'Two or More Races, Not Hispanic',
    'Pacific Islander, Not Hispanic',
    'American Indian or Alaska Native, Not Hispanic',
    'Not Reported'
];

let data1 = [
    12858,
    1671,
    1650,
    1378,
    757,
    751,
    669,
    43,
    25
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
                }
            },
            legend: {
                display: true,
                position: 'left',

                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        }
    }
});
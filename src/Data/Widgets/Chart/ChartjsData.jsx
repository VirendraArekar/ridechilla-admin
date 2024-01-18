import ConfigDB from '../../../Config/ThemeConfig';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    Filler,
    ArcElement,
    RadialLinearScale
} from 'chart.js';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarController,
    BarElement,
    ArcElement,
    RadialLinearScale
);
export const barChartData = {
    labels: ['Janyuary', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: primary,
            backgroundColor: 'rgb(178,191,235,0.6)',
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: secondary,
            backgroundColor: 'rgb(255,235,153,0.6)',
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
export const barChartOptions = {
    maintainAspectRatio: true,
    plugins: {
        datalabels: {
            display: false,
        },
        legend: {
            display: false,
        }
    }
};

export const lineChartData = {
    labels: ['Mon','Tue','Wen','Thus','Fri','Sat','Sun' ],
    datasets: [
        {
            fill:true,
            label: 'Data2',
            data: [28,48,40,19,86,27,90],
            borderColor: secondary,
            backgroundColor: 'rgb(255,235,153,0.6)',
            borderWidth: 2
        },
        {
            fill:true,
            data: [10,59,80,81,56,55,40],
            label: 'Data1',
            borderColor: primary,
            backgroundColor: 'rgb(178,191,235,0.6)', 
            borderWidth: 2
        },
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
export const lineChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: {
            stacked: false,
        },
        yAxes: {
            stacked: false,
        }
    },
    plugins: {
        datalabels: {
            display: false,
        },
        legend: {
            display: false,
        }
    }
};
export const doughnutData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [primary, secondary, '#51bb25']
    }]
};
export const doughnutOption = {
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        },
        legend: {
            display: false,
        }
    }
};
export const polarData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [
        {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [primary, '#f8d62b', '#51bb25', '#a927f9', secondary]
        },

    ],
};

export const polarOption = {    
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        },
        legend: {
            display: false,
        }
    }
};

export const RadarChartData = {
    labels: ['Ford', 'Chevy', 'Toyota', 'Honda', 'Mazda'],
    datasets: [{
        label: 'My First Dataset',
        data: [12, 3, 5, 18, 7],
        fill: true,
        backgroundColor: 'rgba(99, 98, 231, 0.4)',
        borderColor: primary,
        borderWidth: 1,
    }],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 2
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                display: false,
            }
        }
    }
};
export const lineChart2Data = {
    labels: ['', '10', '20', '30', '40', '50', '60', '70', '80'],
    datasets: [{
        fill: true,
        backgroundColor: 'rgba(62, 95, 206, 0.2)',
        borderColor: primary,
        pointColor: primary,
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        borderWidth: 2
    },
    {
        fill: true,
        backgroundColor: 'rgba(255, 206, 0, 0.2)',
        pointColor: secondary,
        borderColor: secondary,
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        borderWidth: 2
    },
    {
        fill: true,
        backgroundColor: 'rgba(97, 174, 65, 0.2)',
        borderColor: primary,
        pointColor: primary,
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
        borderWidth: 2
    }
    ]
};
export const lineChart2option = {
    maintainAspectRatio: true,
    animation: {
        duration: 0
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        },
        legend: {
            display: false,
        }
    }
};
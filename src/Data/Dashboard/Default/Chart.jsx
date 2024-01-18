import ConfigDB from '../../../Config/ThemeConfig';
const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;

export const YearlyChart = {
    badge: '50/100',
    series: [{
        name: 'series1',
        data: [20, 20, 50, 90, 70, 80, 30, 45, 35, 95, 70, 45, 90]
    }],
    options: {
        chart: {
            height: 230,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: 'smooth',
            width: [5, 1],
            dashArray: [0, 5]
        },
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 1,
                position: 'back',
                stroke: {
                    color: primary,
                    width: 1,
                    dashArray: 5,
                },
            },
        },
        yaxis: {
            show: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            show: false,
        },
        markers: {
            size: 0,
            strokeColors: [primary],
            strokeWidth: [8, 0],
            strokeOpacity: 0.3,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
                size: 7,
                sizeOffset: 3
            }
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        colors: [primary]
        // fill: {
        //     type: 'gradient',
        //     colors: [primary],
        //     gradient: {
        //         shadeIntensity: 1,
        //         opacityFrom: 0.7,
        //         opacityTo: 0.9,
        //         stops: [0, 90, 100]
        //     }
        // }
    }
};

export const StockChart = {
    series: [{
        name: 'Statistics',
        data: [20, 30, 40, 80, 50]
    },
    {
        name: 'Statistics',
        data: [80, 70, 60, 20, 50]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 100,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                borderRadiusApplication: 'end',
                borderRadius: 6,
                columnWidth: '50px',
                barHeight: '70%',
            }
        },
        grid: {
            padding: {
                top: -20,
                bottom: -20
            },
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        colors: [secondary, '#EADAD3'],
        xaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 120
                    }
                },

            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 150
                    }
                },

            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 120
                    }
                },

            }

        ],
    }
}
export const Stockvaluedata = {
    series: [{
        name: 'Statistics',
        data: [40, 50, 70, 20, 30]
    },
    {
        name: 'Statistics',
        data: [60, 50, 30, 80, 70]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 100,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                borderRadiusApplication: 'end',
                borderRadius: 6,
                columnWidth: '50px',
                barHeight: '70%',
            }
        },
        grid: {
            padding: {
                top: -20,
                bottom: -20
            },
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        colors: [primary, '#b7b1d7'],
        xaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 120
                    }
                },

            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 150
                    }
                },

            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 120
                    }
                },

            }

        ],
    }
}

export const BeyoLineChart = {
    series: [{
        name: 'Net Profit',
        data: [30, 70, 40, 50, 70, 50, 90]
    },
    {
        name: 'Revenue',
        data: [60, 40, 30, 60, 80, 70, 75]
    },
    {
        name: 'Free Cash Flow',
        data: [40, 60, 35, 90, 60, 60, 60]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 270,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 6,
                columnWidth: '55px',
            }
        },

        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        yaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
        },
        colors: ['#B7B1D7', '#B7B1D7', '#FFFFFF']

    }
}
export const InvestmentChart = {
    series: [{
        name: "Desktops",
        data: [5, 20, 5, 50, 25, 50, 20, 60]
    }],
    options: {
        chart: {
            height: 108,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        colors: [primary],
        xaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 1,
                position: 'back',
                stroke: {
                    color: primary,
                    width: 1,
                    dashArray: 5,
                },
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        yaxis: {
            labels: {
                show: false,
            }
        }
    }
}

export const GainChart = {
    series: [{
        name: "Desktops",
        data: [20, 10, 20, 10, 20, 15, 25]
    }],
    options: {
        chart: {
            height: 108,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        colors: ['#fdb08d'],
        xaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 1,
                position: 'back',
                stroke: {
                    color: '#fdb08d',
                    width: 1,
                    dashArray: 5,
                },
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        yaxis: {
            labels: {
                show: false,
            }
        }
    }
}

export const ProfitChart = {
    series: [{
        name: "Desktops",
        data: [20, 15, 20, 15, 18, 20, 20, 15]
    }],
    options: {
        chart: {
            height: 108,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        colors: ['#7bc825'],
        xaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 1,
                position: 'back',
                stroke: {
                    color: '#7bc825',
                    width: 1,
                    dashArray: 5,
                },
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        yaxis: {
            labels: {
                show: false,
            }
        }
    }
}


import ConfigDB from '../../../Config/ThemeConfig';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;

export const CountryChart = {
    series: [{
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    options: {
        chart: {
            height: 335,
            type: 'radar',
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        legend: {
            show: false,
        },
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        grid: {
            borderColor: '#d3dbf4',
        },
        colors: [secondary],
        markers: {
            size: [5, 0],
            colors: ["#00000000"],
            strokeColor: secondary,
            strokeWidth: [3, 0],
            hover: {
                size: 5,
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
        yaxis: {
            tickAmount: 6,
            show: false,
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        height: 320,
                    },
                },
            },
            {
                breakpoint: 420,
                options: {
                    chart: {
                        height: 260,
                    },
                },
            },
        ]
    }
}

export const RecentChart = {
    series: [{
        type: 'line',
        data: [150, 470, 250, 380, 100, 480, 420],
    }, {
        type: 'area',
        data: [220, 160, 230, 150, 220, 130, 200],
    }],
    options: {
        chart: {
            height: 355,
            type: 'area',
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                left: 8,
                blur: 0,
                color: secondary,
                opacity: 0.10
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: [5, 0],
            colors: [secondary, primary],
        },

        grid: {
            borderColor: '#3f3a591a',
        },

        fill: {
            type: 'solid',
            opacity: [1, 0.20],
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
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " k";
                    }
                    return y;
                }
            }
        },
        xaxis: {
            type: "month",
            categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 50,
                position: 'back',
                opacity: 0.2,
                stroke: {
                    color: secondary,
                    width: 0,
                    dashArray: 0,
                },

                fill: {
                    type: 'solid',
                    color: secondary,
                },
            },
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        height: 357,
                    }
                },
            },
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 280,
                    }
                },
            },

            {
                breakpoint: 400,
                options: {
                    chart: {
                        height: 230,
                    }
                },
            },

        ],
        colors: [secondary, primary]
    }
}

export const SalesChart = {
    series: [{
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 20],
    }],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                },
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
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: [primary, "#dad8e0"],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
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
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

export const IncomeChart = {
    series: [{
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 20],
    }],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                },
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
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: [secondary, "#faded1"],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
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
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

export const OrderChart = {
    series: [
        {
            name: "Statistics",
            data: [20, 60, 50, 70, 40, 80, 20],
        },
        {
            name: "Statistics",
            data: [80, 40, 50, 30, 60, 20, 20],
        }],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                },
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
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: [primary, "#dad8e0"],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
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
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

export const VisitorChart = {
    series: [
        {
            name: "Statistics",
            data: [20, 60, 50, 70, 40, 80, 20],
        },
        {
            name: "Statistics",
            data: [80, 40, 50, 30, 60, 20, 20],
        }],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                },
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
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: [secondary, "#faded1"],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
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
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

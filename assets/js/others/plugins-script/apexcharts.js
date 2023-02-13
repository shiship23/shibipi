const productHistoryChartOption = {
	series: [
		{
			name: "series1",
			data: [31, 40, 28, 51, 42, 59, 41, 21, 32, 45, 32, 34],
		},
	],
	colors: ["#764AF1"],
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.3,
			opacityTo: 0.7,
			stops: [0, 100],
		},
	},
	chart: {
		height: 234,
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		colors: ["#764AF1"],
		width: 2,
	},
	grid: {
		show: false,
		padding: {
			top: -20,
			right: 10,
			bottom: -6,
			left: 22,
		},
	},
	legend: {
		show: false,
	},
	xaxis: {
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		labels: {
			show: true,
			style: {
				fontSize: "12px",
				fontWeight: 500,
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		show: false,
	},
};

const productHistoryChart = new ApexCharts(
	document.querySelector("#productHistoryChart"),
	productHistoryChartOption
);
productHistoryChart.render();

// blogContactChart
const blogContactChartOption = {
	series: [
		{
			name: "Inflation",
			data: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21,
				24, 29, 34, 40, 46, 50,
			],
		},
	],
	chart: {
		height: 367,
		type: "bar",
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			borderRadius: 4,
			columnWidth: "65%",
			dataLabels: {
				position: "top", // top, center, bottom
			},
		},
	},
	dataLabels: {
		enabled: false,
		formatter: function (val) {
			return val + "%";
		},
		offsetY: -20,
		style: {
			fontSize: "12px",
			colors: ["#304758"],
		},
	},

	xaxis: {
		categories: [
			"01/2022",
			"02/2022",
			"03/2022",
			"04/2022",
			"05/2022",
			"06/2022",
			"07/2022",
			"08/2022",
			"09/2022",
			"10/2022",
			"11/2022",
			"12/2022",
			"13/2022",
			"14/2022",
			"15/2022",
			"16/2022",
			"17/2022",
			"18/2022",
			"19/2022",
			"20/2022",
			"21/2022",
			"22/2022",
			"23/2022",
			"24/2022",
		],
		position: "bottom",
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		crosshairs: {
			fill: {
				type: "gradient",
				gradient: {
					colorFrom: "#D8E3F0",
					colorTo: "#BED1E6",
					stops: [0, 100],
					opacityFrom: 0.4,
					opacityTo: 0.5,
				},
			},
		},
		tooltip: {
			enabled: true,
		},
	},
	yaxis: {
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		labels: {
			show: true,
			formatter: function (val) {
				return val + "%";
			},
		},
	},
	grid: {
		padding: {
			top: 0,
			right: 20,
			bottom: -26,
			left: 10,
		},
	},
};

const historyChart = new ApexCharts(
	document.querySelector("#blogContactChart"),
	blogContactChartOption
);
historyChart.render();

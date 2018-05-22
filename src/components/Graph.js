import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { red800, blue800, green800, blue400 } from 'material-ui/styles/colors';
const ReactHighcharts = require('react-highcharts');

class Graph extends Component {
	
    render() {
		var temp = [];
		var humid = [];
		var mvmnt = [];

		if (this.props.area.id === "85") {
			for (var i = 0; i < this.props.data._85.temperature.length; i++) {
				temp[i] = Number(this.props.data._85.temperature[i].value);
			}
			for (i = 0; i < this.props.data._85.humidity.length; i++) {
				humid[i] = Number(this.props.data._85.humidity[i].value);
			}
			for (i = 0; i < this.props.data._85.movement.length; i++) {
				mvmnt[i] = Number(this.props.data._85.movement[i].value);
			}
		}
		if (this.props.area.id === "80") {
			for (i = 0; i < this.props.data._80.temperature.length; i++) {
				temp[i] = Number(this.props.data._80.temperature[i].value);
			}
			for (i = 0; i < this.props.data._80.humidity.length; i++) {
				humid[i] = Number(this.props.data._80.humidity[i].value);
			}
			for (i = 0; i < this.props.data._80.movement.length; i++) {
				mvmnt[i] = Number(this.props.data._80.movement[i].value);
			}
		}
		if (this.props.area.id === "75") {
			for (i = 0; i < this.props.data._75.temperature.length; i++) {
				temp[i] = Number(this.props.data._75.temperature[i].value);
			}
			for (i = 0; i < this.props.data._75.humidity.length; i++) {
				humid[i] = Number(this.props.data._75.humidity[i].value);
			}
			for (i = 0; i < this.props.data._75.movement.length; i++) {
				mvmnt[i] = Number(this.props.data._75.movement[i].value);
			}
		}
		if (this.props.area.id === "65") {
			for (i = 0; i < this.props.data._65.temperature.length; i++) {
				temp[i] = Number(this.props.data._65.temperature[i].value);
			}
			for (i = 0; i < this.props.data._65.humidity.length; i++) {
				humid[i] = Number(this.props.data._65.humidity[i].value);
			}
			for (i = 0; i < this.props.data._65.movement.length; i++) {
				mvmnt[i] = Number(this.props.data._65.movement[i].value);
			}
		}
		if (this.props.area.id === "01") {
			for (i = 0; i < this.props.data._01.temperature.length; i++) {
				temp[i] = Number(this.props.data._01.temperature[i].value);
			}
			for (i = 0; i < this.props.data._01.humidity.length; i++) {
				humid[i] = Number(this.props.data._01.humidity[i].value);
			}
			for (i = 0; i < this.props.data._01.movement.length; i++) {
				mvmnt[i] = Number(this.props.data._01.movement[i].value);
			}
		}
		
		console.log(temp)

        var chart = {
			chart: {
				zoomtype: 'xy'
			},

			title: {
				text: 'Temperature, humidity and movement history for room 2.' + this.props.area.id
			},

			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					month: '%e. %b',
					year: '%b'
				},
				title: {
					text: 'Date'
				},
				crosshair: true
			},

			yAxis: [{
				labels: {
					format: '{value}°C',
					style: {
						color: red800
					}
				},
				title: {
					text: 'Temperature',
					style: {
						color: red800
					}
				}
			}, {
				gridLineWidth: 0,
				title: {
					text: 'Humidity',
					style: {
						color: blue800
					}
				},
				labels: {
					format: '{value} %',
					style: {
						color: blue800
					}
				},
				opposite: true
			}, {
				gridLineWidth: 0,
				title: {
					text: 'Movement',
					style: {
						color: green800
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: green800
					}
				},
				opposite: true
			}],

			plotOptions: {
				spline: {
					marker: {
						enabled: true
					}
				}
			},

			tooltip: {
				shared: true
			},

			series: [{
				name: 'Temperature',
				type: 'spline',
				data: temp,
				tooltip: {
					valueSuffix: ' °C'
				},
				color: red800
			}, {
				name: 'Humidity',
				type: 'spline',
				yAxis: 1,
				data: humid,
				tooltip: {
					valueSuffix: ' %'
				},
				color: blue400
			}, {
				name: 'Movement',
				type: 'spline',
				yAxis: 2,
				data: mvmnt,
				tooltip: {
					valueSuffix: ' people in the room'
				},
				color: green800
			}]
		};

        return (
            <div className="chart" id="chart">
                <ReactHighcharts config={ chart }></ReactHighcharts>
            </div>
        )
    }
}

export default Graph
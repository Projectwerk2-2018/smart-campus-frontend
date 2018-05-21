import React, { Component } from 'react';
import Data from '../data/Data'
import Graph from '../components/Graph'
import ImageMapper from 'react-image-mapper';

class Building extends Component {

	constructor(props) {
		super(props); 

		this.state = {
			plan: "",
			MAP: {},
			width: 0,
			data: {
				_01: "",
				_65: "",
				_75: "",
				_80: "",
				_85: ""
			},
			temp_data: [],
			humid_data: [],
			mvmnt_data: [],
			area: {}
		}

		this.updateDimensions = this.updateDimensions.bind(this);
		this.temp_style = this.temp_style.bind(this);
		this.humid_style = this.humid_style.bind(this);
		this.mvmnt_style = this.mvmnt_style.bind(this);
		this.click_handle = this.click_handle.bind(this);
	}

	updateDimensions() {
		var width = window.innerWidth,
			MAP = {
				name: "my-map",
				areas: [
				  { id: "01", shape: "rect", coords: [width*0.583, width*0.097, width*0.696, width*0.239] },
				  { id: "85", shape: "rect", coords: [width*0.059, width*0.116, width*0.123, width*0.239] },
				  { id: "80", shape: "rect", coords: [width*0.126, width*0.116, width*0.210, width*0.239] },
				  { id: "75", shape: "rect", coords: [width*0.213, width*0.116, width*0.287, width*0.239] },
				  { id: "65", shape: "rect", coords: [width*0.289, width*0.116, width*0.364, width*0.239] }
				]
			}
	
		this.setState({width, MAP});
	}

	componentWillMount() {
		this.updateDimensions();
	}

	componentWillUpdate() {
//		window.location.reload();
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		document.getElementById("chrt").style.display = "none";

		var joined_temp;
		var joined_humid;
		var joined_mvmnt;

		Data.getData265().then(result => {
			this.setState({ data: {
				...this.state.data,
				_85: result}
			});
			joined_temp = this.state.temp_data.concat(result.temperature[0]);
			this.setState({ temp_data: joined_temp });
			joined_humid = this.state.humid_data.concat(result.humidity[0]);
			this.setState({ humid_data: joined_humid });
			joined_mvmnt = this.state.mvmnt_data.concat(result.movement[0]);
			this.setState({ mvmnt_data: joined_mvmnt });
		});
		Data.getData265().then(result => {
			this.setState({ data: {
				...this.state.data,
				_80: result}
			});
			joined_temp = this.state.temp_data.concat(result.temperature[0]);
			this.setState({ temp_data: joined_temp });
			joined_humid = this.state.humid_data.concat(result.humidity[0]);
			this.setState({ humid_data: joined_humid });
			joined_mvmnt = this.state.mvmnt_data.concat(result.movement[0]);
			this.setState({ mvmnt_data: joined_mvmnt });
		});
		Data.getData265().then(result => {
			this.setState({ data: {
				...this.state.data,
				_75: result}
			});
			joined_temp = this.state.temp_data.concat(result.temperature[0]);
			this.setState({ temp_data: joined_temp });
			joined_humid = this.state.humid_data.concat(result.humidity[0]);
			this.setState({ humid_data: joined_humid });
			joined_mvmnt = this.state.mvmnt_data.concat(result.movement[0]);
			this.setState({ mvmnt_data: joined_mvmnt });
		});
		Data.getData265().then(result => {
			this.setState({ data: {
				...this.state.data,
				_65: result}
			});
			joined_temp = this.state.temp_data.concat(result.temperature[0]);
			this.setState({ temp_data: joined_temp });
			joined_humid = this.state.humid_data.concat(result.humidity[0]);
			this.setState({ humid_data: joined_humid });
			joined_mvmnt = this.state.mvmnt_data.concat(result.movement[0]);
			this.setState({ mvmnt_data: joined_mvmnt });
		});
		Data.getData265().then(result => {
			this.setState({ data: {
				...this.state.data,
				_01: result}
			});
			joined_temp = this.state.temp_data.concat(result.temperature[0]);
			this.setState({ temp_data: joined_temp });
			joined_humid = this.state.humid_data.concat(result.humidity[0]);
			this.setState({ humid_data: joined_humid });
			joined_mvmnt = this.state.mvmnt_data.concat(result.movement[0]);
			this.setState({ mvmnt_data: joined_mvmnt });
		});
	}
	
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	temp_style() {
		var temp = [];
		var arr = [];
		var margin = 0.072;

		for (var i = 0; i < 5; i++) {
			temp[i] = { position: 'absolute',
						top: this.state.width*0.15,
						left: this.state.width*margin,
						'fontSize': this.state.width*0.007,
						'fontWeight': 'bold' }
			margin = margin+0.079;
			if (i === 4) {
				temp[i] = { position: 'absolute',
							top: this.state.width*0.13,
							left: this.state.width*0.62,
							'fontSize': this.state.width*0.007,
							'fontWeight': 'bold' }
			}
			if (this.state.temp_data[i] !== undefined) {
				arr[i] = <span style={temp[i]}>TEMP: {this.state.temp_data[i].value + "°C"}</span>
			}
		}
		return arr;
	}

	humid_style() {
		var humid = [];
		var arr = [];
		var margin = 0.071;

		for (var i = 0; i < 5; i++) {
			humid[i] = { position: 'absolute',
						top: this.state.width*0.16,
						left: this.state.width*margin,
						'fontSize': this.state.width*0.007,
						'fontWeight': 'bold' }
			margin = margin+0.079;
			if (i === 4) {
				humid[i] = { position: 'absolute',
							top: this.state.width*0.14,
							left: this.state.width*0.618,
							'fontSize': this.state.width*0.007,
							'fontWeight': 'bold' }
			}
			if (this.state.humid_data[i] !== undefined) {
				arr[i] = <span style={humid[i]}>TEMP: {this.state.humid_data[i].value + "%"}</span>
			}
		}

		return arr;
	}

	mvmnt_style() {
		var mvmnt = [];
		var arr = [];
		var margin = 0.071;

		for (var i = 0; i < 5; i++) {
			mvmnt[i] = { position: 'absolute',
						top: this.state.width*0.17,
						left: this.state.width*margin,
						'fontSize': this.state.width*0.007,
						'fontWeight': 'bold' }
			margin = margin+0.079;
			if (i === 4) {
				mvmnt[i] = { position: 'absolute',
							top: this.state.width*0.15,
							left: this.state.width*0.618,
							'fontSize': this.state.width*0.007,
							'fontWeight': 'bold' }
			}
			if (this.state.mvmnt_data[i] !== undefined) {
				arr[i] = <span style={mvmnt[i]}>MVMNT: {this.state.mvmnt_data[i].value}</span>
			}
		}
		
		return arr;
	}

	click_handle(area) {
		document.getElementById("chrt").style.display = "initial";
		this.setState({ area });
		this.setState(this.state.data);
	}

	//<img src={require("../img/floor.svg")} className="img-fluid floor" alt="Responsive image"></img>
	//<ImageMapper src={require("../img/floor_plan.svg")} map={MAP} width={this.state.width} fillColor={"rgba(141, 128, 229, 0.6)"}/>
	//<Graph area={this.state.area}/>

	render() {
	    return (
			<div className="box">
				<ImageMapper src={require("../img/floor_plan.svg")}
						id="map"
						width={this.state.width*0.7}
						map={this.state.MAP}
						fillColor={"rgba(141, 128, 229, 0.3)"}
						onClick={(this.state.MAP.areas, this.click_handle)}/>
				{this.temp_style()}
				{this.humid_style()}
				{this.mvmnt_style()}
				<div className="chrt" id="chrt">
					<Graph area={this.state.area}
							data={this.state.data}/>
				</div>
			</div>
	    );
	}
}

export default Building;
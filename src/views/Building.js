import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';

class Building extends Component {

	constructor(props) {
		super(props); 

		this.state = {
			MAP: {},
			width: 0,
			height: 0,
			data: "data",
			temp: []
		}
		this.updateDimensions = this.updateDimensions.bind(this);
		this.temp_style = this.temp_style.bind(this);
		this.humid_style = this.humid_style.bind(this);
		this.occup_style = this.occup_style.bind(this);
	}

	updateDimensions() {
		var width = window.innerWidth,
			height = window.innerHeight,
			MAP = {
				name: "my-map",
				areas: [
				  { shape: "rect", coords: [width*0.583, width*0.097, width*0.696, width*0.239] },
				  { shape: "rect", coords: [width*0.059, width*0.116, width*0.123, width*0.239] },
				  { shape: "rect", coords: [width*0.126, width*0.116, width*0.210, width*0.239] },
				  { shape: "rect", coords: [width*0.213, width*0.116, width*0.287, width*0.239] },
				  { shape: "rect", coords: [width*0.289, width*0.116, width*0.364, width*0.239] }
				]
			}
	
		this.setState({width, height, MAP});
	}

	componentWillMount() {
		this.updateDimensions();
	}

	shouldComponentUpdate() {
		window.location.reload()
	}
	
	componentDidMount() {
			window.addEventListener("resize", this.updateDimensions);
			this.temp_style();
	}
	
	componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions);
	}

	temp_style() {
		var temp = [];
		var arr = [];
		var margin = 0.075;

		for (var i = 0; i < 4; i++) {
			temp[i] = { position: 'absolute',
						top: this.state.width*0.15,
						left: this.state.width*margin,
						'font-size': this.state.width*0.007,
						'font-weight': 'bold' }
			margin = margin+0.078;
			arr[i] = <span style={temp[i]}>TEMP: {this.state.data}</span>
		}

		return arr
	}

	humid_style() {
		var humid = [];
		var arr = [];
		var margin = 0.073;

		for (var i = 0; i < 4; i++) {
			humid[i] = { position: 'absolute',
						top: this.state.width*0.16,
						left: this.state.width*margin,
						'font-size': this.state.width*0.007,
						'font-weight': 'bold' }
			margin = margin+0.078;
			arr[i] = <span style={humid[i]}>HUMID: {this.state.data}</span>
		}

		return arr
	}

	occup_style() {
		var occup = [];
		var arr = [];
		var margin = 0.073;

		for (var i = 0; i < 4; i++) {
			occup[i] = { position: 'absolute',
						top: this.state.width*0.17,
						left: this.state.width*margin,
						'font-size': this.state.width*0.007,
						'font-weight': 'bold' }
			margin = margin+0.078;
			arr[i] = <span style={occup[i]}>OCCUP: {this.state.data}</span>
		}
		
		return arr
	}

	//<img src={require("../img/floor.svg")} className="img-fluid floor" alt="Responsive image"></img>
	//<ImageMapper src={require("../img/floor_plan.svg")} map={MAP} width={this.state.width} fillColor={"rgba(141, 128, 229, 0.6)"}/>

	render() {
	    return (
				<div className="box">
					<ImageMapper src={require("../img/floor_plan.svg")} map={this.state.MAP} width={this.state.width*0.7} fillColor={"rgba(141, 128, 229, 0.6)"}/>
					{this.temp_style()}
					{this.humid_style()}
					{this.occup_style()}
				</div>
	    );
	}
}

export default Building;
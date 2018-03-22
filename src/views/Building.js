import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';

class Building extends Component {

	constructor(props) {
		super(props); 

		this.state = {
			MAP: {},
			width: 0,
			height: 0,
			data: "data"
		}
		this.updateDimensions = this.updateDimensions.bind(this)
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
	}
	
	componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions);
	}

	//<img src={require("../img/floor.svg")} className="img-fluid floor" alt="Responsive image"></img>
	//<ImageMapper src={require("../img/floor_plan.svg")} map={MAP} width={this.state.width} fillColor={"rgba(141, 128, 229, 0.6)"}/>

	render() {
		var style = {position: 'absolute', top: this.state.height*0.35, left: this.state.width*0.08}

	    return (
				<div className="box">
					<ImageMapper src={require("../img/floor_plan.svg")} map={this.state.MAP} width={this.state.width*0.7} fillColor={"rgba(141, 128, 229, 0.6)"}/>
					<span style={style}>text: {this.state.data}</span>
				</div>
	    );
	}
}

export default Building;
import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';

class Building extends Component {

	constructor(props) {
		super(props); 

		this.state = {
			MAP: {
				name: "my-map",
				areas: [
				  { shape: "rect", coords: [1249,209,1492,513] },
				  { shape: "rect", coords: [126,250,264,513] },
				  { shape: "rect", coords: [271,250,450,513] },
				  { shape: "rect", coords: [455,250,615,513] },
				  { shape: "rect", coords: [620,250,780,513] }
				]
			},
			width: 0,
			data: "data"
		}
		this.updateDimensions = this.updateDimensions.bind(this)
	}

	updateDimensions() {
		var width = window.innerWidth,
			MAP = {
				name: "my-map",
				areas: [
				  { shape: "rect", coords: [width*0.583, width*0.097, width*0.696, width*0.239] },
				  { shape: "rect", coords: [width*0.059, width*0.116, width*0.123, width*0.239] },
				  { shape: "rect", coords: [width*0.126, width*0.116, width*0.21, width*0.239] },
				  { shape: "rect", coords: [width*0.213, width*0.116, width*0.287, width*0.239] },
				  { shape: "rect", coords: [width*0.289, width*0.116, width*0.364, width*0.239] }
				]
			}
	
		this.setState({width, MAP});
	}

	componentWillMount() {
			this.updateDimensions();
	}
	
	componentDidMount() {
			window.addEventListener("resize", this.updateDimensions);
			this.forceUpdate();
	}
	
	componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions);
	}

	//<img src={require("../img/floor.svg")} className="img-fluid floor" alt="Responsive image"></img>
	//<ImageMapper src={require("../img/floor_plan.svg")} map={MAP} width={this.state.width} fillColor={"rgba(141, 128, 229, 0.6)"}/>
	//[1249, 209, 1492, 513]

	render() {
		console.log(this.state.width)

		var style = {position: 'absolute', top: 600, left: 100}

	    return (
			<div class="row">
				<div class="col-9">
					<div className="container">
						<ImageMapper src={require("../img/floor_plan.svg")} map={this.state.MAP} width={this.state.width*0.7} fillColor={"rgba(141, 128, 229, 0.6)"}/>
						<span style={style}>text: {this.state.data}</span>
					</div>
				</div>
				<div class="col-3">
					
				</div>
			</div>
	    );
	}
}

export default Building;
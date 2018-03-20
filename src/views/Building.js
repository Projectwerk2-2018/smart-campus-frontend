import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';

class Building extends Component {

	constructor(props) {
		super(props); 

		this.state ={
			MAP : {
				name: "my-map",
				areas: [
				  { shape: "rect", coords: [1249,209,1492,513] },
				  { shape: "rect", coords: [126,250,264,513] },
				  { shape: "rect", coords: [271,250,450,513] },
				  { shape: "rect", coords: [455,250,615,513] },
				  { shape: "rect", coords: [620,250,780,513] }
				]
			}
		}
	}

	//<img src={require("../img/floor.svg")} className="img-fluid floor" alt="Responsive image"></img>

	render() {
	      return(
			<div class="row">
				<div class="col-9">
					<ImageMapper src={require("../img/floor_plan.svg")} map={this.state.MAP} width={1500} fillColor={"rgba(141, 128, 229, 0.6)"}/>
				</div>
				<div class="col-3">
				
				</div>
			</div>
	      );
	  }
}

export default Building;
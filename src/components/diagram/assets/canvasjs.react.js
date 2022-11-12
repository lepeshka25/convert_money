import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.stock.react';
// eslint-disable-next-line no-unused-vars
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
	componentDidMount() {
		console.log(this.props.data.slice(this.props.data.length - 15 , this.props.data.length))
		this.dataBase = this.props.data.slice(this.props.data.length - 15 , this.props.data.length)
		console.log(this.dataBase)
	}

	render() {
		const options = {
			animationEnabled: true,
			// exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				// text: "Bounce Rate by Week of Year"
			},
			axisY: {
				// title: "Bounce Rate",
				// suffix: "%"
			},
			axisX: {
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					valueFormatString: "MMM DD"
				},
				// title: "Week of Year",
				interval: 2,
				valueFormatString: "MMM DD"
			},
			data: [{
				type: "line",
				// toolTipContent: "y: <span>{y}</span> , x: <span>{x}</span>",
				toolTipContent: "{x}: {y}",
				dataPoints: this.dataBase && this.dataBase
			}]
		}
		return (
			<div style={{width: '100%' , height: '100%'}}>
				<CanvasJSChart options = {options}/>
			</div>
		);
	}
}

export default LineChart;
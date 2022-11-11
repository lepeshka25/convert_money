import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
	componentDidMount() {
		const data = this.props.data.DOLLAR
		this.dataBase = data?.slice(data.length - 15 , data.length)
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
				dataPoints: this.dataBase
			}]
		}
		return (
			<div>
				<CanvasJSChart options = {options}/>
			</div>
		);
	}
}

export default LineChart;
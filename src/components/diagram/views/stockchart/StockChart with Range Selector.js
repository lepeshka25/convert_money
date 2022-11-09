import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.stock.react';
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
class StockChartWithRangeSelector extends Component {
	constructor(props) {
		super(props);
		this.state = { dataPoints: [], isLoaded: false };
	}
	 
	  componentDidMount() {
			console.log(this.props.props.props[0].valet)
			this.setState({
				isLoaded: true,
				dataPoints: this.props.props.props
	  	});
	  }
	 
	  render() {
		const options = {
			rangeSelector: {
				label: 'Диапазон',
				buttons: [{
					range: 1,
					rangeType: "month",
					label: "Mесяц"
				},{
					range: 2,
					rangeType: "month",
					label: "2 месяца"
				},{
					rangeType: "all",
					label: "Все"
				}],
				inputFields: {
					enabled: false,
					// startValue: new Date('2018, 03, 01'),
					// endValue: new Date('2018, 07, 01')
				}
			},
		  title:{
				text: `Покупка ${this.props.props.props[0].valet}`
		  },
		  theme: "light2",
		  subtitles: [{
			text: this.props.props.props[0].kod
		  }],
		  charts: [{
			axisX: {
			  crosshair: {
				enabled: true,
				snapToDataPoint: true,
				valueFormatString: "MMM DD YYYY"
			  }
			},
			axisY: {
			  title: "",
			  prefix: "",
			  crosshair: {
				enabled: true,
				snapToDataPoint: true,
				valueFormatString: "#,###.##"
			  }
			},
			toolTip: {
			  shared: true
			},
			data: [{
			  name: `Покупка ${this.props.props.props[0].valet}`,
			  type: "splineArea",
			  color: "#3576a8",
			  yValueFormatString: this.props.props.props[0].valet !== 'тенге' ? "#,###.####" : '0.####',
			  xValueFormatString: "MMM DD YYYY",
			  dataPoints : this.state.dataPoints
			}]
		  }],
		  navigator: {
			slider: {
			  minimum: new Date("2015-01-01"),
			  maximum: new Date("2055-01-01")
			}
		  }
		};
		const containerProps = {
		  width: "100%",
		  height: "450px",
		  margin: "auto"
		};
		return (
		  <div> 
			  {
				// Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
				this.state.isLoaded && 
				<CanvasJSStockChart containerProps={containerProps} options = {options}
				  /* onRef = {ref => this.chart = ref} */
				/>
			  }
		  </div>
		);
	  }
  }

export default StockChartWithRangeSelector;


// fetch("https://www.akchabar.kg/media/rates/usd.js", {
// 	method: 'GET',
// })
//   .then(res => res.json())
// 	.then(res => res.data)
//   .then(
// 	(data) => {
//
// 		var dps = data?.map(([dateMilSec , num]) => {
// 			const date = new Date(dateMilSec)
// 			return {
// 				x: date,
// 				y: num
// 			}
// 		})
// 	  this.setState({
// 			isLoaded: true,
// 			dataPoints: dps
// 	  });
// 	}
// 	)
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import NumericAxisStockChart from "./stockchart/StockChart with Range Selector";

class Template extends Component {

	render() {
		return (
			<div style={{width: '100%' , height: '100%'}}>
				<NumericAxisStockChart/>
			</div>
		);
	}
}

export default Template;
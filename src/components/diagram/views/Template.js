import React, {Component} from 'react';

import NumericAxisStockChart from "./stockchart/StockChart with Range Selector";

class Template extends Component {

	render() {
		return (
			<div style={{width: '100%' , height: '100%'}}>
				<NumericAxisStockChart props={this.props}/>
			</div>
		);
	}
}

export default Template;
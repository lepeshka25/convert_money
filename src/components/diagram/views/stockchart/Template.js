import React from 'react';

import NumericAxisStockChart from "./StockChart with Range Selector";
import {store} from "../../../../store";

const Template = () => {
	const [data , setData] = React.useState(null)

	React.useEffect(() => {
		setData(store.getState().diagram)
	}, [])

	store.subscribe(() => {
		setData(store.getState().diagram)
	})

	return (
		<div style={{width: '100%' , height: '100%'}}>
			{data && <NumericAxisStockChart props={data}/>}
		</div>
	)
}

// class Template extends Component {
//
// 	render() {
// 		return (
// 			<div style={{width: '100%' , height: '100%'}}>
// 				<NumericAxisStockChart props={this.props}/>
// 			</div>
// 		);
// 	}
// }

export default Template;
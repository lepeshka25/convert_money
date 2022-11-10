import React from 'react';
import CustomSelect from "../../../../UI/CustomSelect";
import cs from './style.module.scss'

const Calculator = ({title}) => {
	return (
		<div className={cs.calculator}>
			<h1 className={cs.title}>{title}</h1>
			<div className={cs.container_calculator}>
				<CustomSelect/>
			</div>
		</div>
	);
};

export default React.memo(Calculator);
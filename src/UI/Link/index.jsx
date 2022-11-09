import React from 'react';
import {Link} from 'react-router-dom'
import {sideBarList} from '../../utils/sideBarList';

const LinkUI = ({cs}) => {
	return (
		<React.Fragment>
			{
				sideBarList.map(item => (
					<li key={item.id}>
						<Link className={cs.link} to={item.path}>
							{item.title} <br/>
						</Link>
					</li>
				))
			}
		</React.Fragment>
	);
};

export default LinkUI;
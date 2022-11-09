import React from 'react';
import {useMediaQuery} from "react-responsive";
import {GiHamburgerMenu} from "react-icons/gi";
import LinkUI from '../Link'

const SideBar = ({cs}) => {
	const isLaptop = useMediaQuery({ query: '(min-width: 768px)' })
	const [stateSideBar, setStateSideBar] = React.useState(false)

	return (
		<React.Fragment>
			{
				isLaptop && (
					<ul className={cs.list}>
						<LinkUI cs={cs}/>
					</ul>
				)
			}

			{
				!isLaptop && (
					<React.Fragment>
						<div className={cs.burger}>
							<GiHamburgerMenu onClick={() => setStateSideBar(state => !state)} className={cs.icon}/>
						</div>
						<ul style={stateSideBar ? {display: 'block'} : {display: 'none'}} className={cs.sideBar}>
							<LinkUI cs={cs}/>
						</ul>
					</React.Fragment>
				)
			}
		</React.Fragment>
	);
};

export default SideBar;
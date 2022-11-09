import React from 'react';
import {useMediaQuery} from "react-responsive";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import Logo from "../Logo";

const SideBar = ({cs}) => {
	const isLaptop = useMediaQuery({query: 'min-width:768px'})
	const [stateSideBar , setStateSideBar] = React.useState(false)

	return (
		<React.Fragment>
			{
				isLaptop && (
					<div>

					</div>
				)
			}

			{
				!isLaptop && (
					<React.Fragment>
						<div className={cs.burger}>
							<GiHamburgerMenu onClick={() => setStateSideBar(state => !state)} className={cs.icon}/>
						</div>
						<div style={stateSideBar ? {left: '0%'} : {left: '-100%'}} className={cs.sideBar}>
							<div className={cs.sideBar_header}>
								<div className={cs.container_logo}>
									<Logo cs={cs}/>
								</div>
								<div className={cs.container_cross}>
									<ImCross onClick={() => setStateSideBar(state => !state)}/>
								</div>
							</div>
							<div className={cs.sideBar_body}>
								
							</div>
						</div>
					</React.Fragment>
				)
			}
		</React.Fragment>
	);
};

export default SideBar;
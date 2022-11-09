import React from 'react';
import cs from './style.module.scss'
import Logo from "../../UI/Logo";
import SideBar from "../../UI/SideBar";

const Header = () => {
	return (
		<div className={cs.header}>
			<div className={cs.container_logo}>
				<Logo cs={cs}/>
			</div>
			<div className={cs.container_list}>
				<SideBar cs={cs}/>
			</div>
		</div>
	);
};

export default Header;
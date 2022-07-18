import Image from "next/image";
import {MdSpaceDashboard, MdFavorite} from "react-icons/md";
import {FaGripfire, FaPlay, FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";

import classes from "./navBar.module.scss";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
	return (
		<nav className={classes.navBar}>
			<div className={classes["profile-avatar"]}>
				<Image
					src={"https://ui-avatars.com/api/?name=John+Doe"}
					alt='profile avatar'
					layout='fill'
					objectFit='fill'
					className={classes["profile-avatar-img"]}
				/>
			</div>
			<ul>
				<li>
					<NavBarLink title='Feed' to='/feed'>
						<MdSpaceDashboard />
					</NavBarLink>
				</li>
				<li>
					<NavBarLink title='Trending' to='/trending'>
						<FaGripfire />
					</NavBarLink>
				</li>
				<li>
					<NavBarLink title='Player' to='/player'>
						<FaPlay />
					</NavBarLink>
				</li>
				<li>
					<NavBarLink title='Favorites' to='/favorites'>
						<MdFavorite />
					</NavBarLink>
				</li>
				<li>
					<NavBarLink title='Library' to='/'>
						<IoLibrary />
					</NavBarLink>
				</li>
			</ul>
			<NavBarLink title='Sign Out' to=''>
				<FaSignOutAlt />
			</NavBarLink>
		</nav>
	);
};

export default NavBar;

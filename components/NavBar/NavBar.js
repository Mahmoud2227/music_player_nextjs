import {useEffect, useContext, useState} from "react";

import Image from "next/image";
import {MdSpaceDashboard, MdFavorite} from "react-icons/md";
import {FaGripfire, FaPlay, FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";

import classes from "./navBar.module.scss";
import NavBarLink from "./NavBarLink";

import {MusicPlayerContext} from "../../store//context";

const NavBar = (props) => {
	const [image, setImage] = useState("https://ui-avatars.com/api/?name=John+Doe");
	const {token} = useContext(MusicPlayerContext);

	useEffect(() => {
		fetch("https://api.spotify.com/v1/me",{
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json"
			}
		}).then(res => res.json()).then(data => {
			setImage(data.images[0].url);
		})
	},[token]);

	return (
		<nav className={classes.navBar}>
			<div className={classes["profile-avatar"]}>
				<Image
					src={image}
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

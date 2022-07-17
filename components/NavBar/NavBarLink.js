import Link from "next/link";
import {useRouter} from "next/router";
import {IconContext} from "react-icons/lib";

import classes from "./NavBarLink.module.scss";

const NavBarLink = (props) => {
	const router = useRouter();

	const isActive = router.asPath === props.to;
	return (
		<li className={`${classes["navBar__link"]} ${isActive ? classes["active"] : ""}`}>
			<Link href={props.to}>
				<div>
					<IconContext.Provider value={{size:'24px',className:classes['icon']}}>
						{props.children}
						<p>{props.title}</p>
					</IconContext.Provider>
				</div>
			</Link>
		</li>
	);
};

export default NavBarLink;

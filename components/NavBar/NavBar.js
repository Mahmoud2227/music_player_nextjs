import Image from "next/image"
import {MdSpaceDashboard} from "react-icons/md"

import classes from "./navBar.module.scss"
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return <nav className={classes.navBar}>
    <div className={classes['profile-avatar']}>
    <Image src={'https://ui-avatars.com/api/?name=John+Doe'} alt='profile avatar' layout="fill" objectFit="fill" className={classes['profile-avatar-img']} />
    </div>
    <ul>
      <NavBarLink title="link" to='/trend' icon={MdSpaceDashboard} ><MdSpaceDashboard/></NavBarLink>
    </ul>
  </nav>;
}

export default NavBar;
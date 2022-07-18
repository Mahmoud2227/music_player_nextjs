import Image from "next/image";
import Link from "next/link";

import {loginEndpoint} from "../spotify/spotifty";
import classes from "../styles/Login.module.scss";

const LoginPage = () => {
	return (
		<div className={classes['login-page']}>
			<div className={classes['logo']}>
				<Image
					src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
					alt='spotify logo'
					layout='responsive'
          height={328}
          width={1095}
				/>
			</div>
			<Link href={loginEndpoint}>
				<div className={classes['login-btn']}>LOG IN</div>
			</Link>
		</div>
	);
};

export default LoginPage;

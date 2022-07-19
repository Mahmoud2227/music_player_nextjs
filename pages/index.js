import {useContext, useEffect} from "react";
import {useRouter} from "next/router";

import {MusicPlayerContext} from "../store/context";

const HomePage = () => {
	const router = useRouter();
	const context = useContext(MusicPlayerContext);
	const {token, setToken} = context;
	useEffect(() => {
		let timer;
    const hash = window.location.hash;
		window.location.hash = "";
		if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
			localStorage.setItem("token", _token);
			setToken(_token);
		} else if (!token) {
			timer = setTimeout(() => {
				router.replace("/login");
			}, 100);
    }

		return () => clearTimeout(timer); 
	}, [token, setToken, router]);

	return <main>Hello world</main>;
};

export default HomePage;

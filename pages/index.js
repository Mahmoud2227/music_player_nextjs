import {useContext, useEffect} from "react";
import {useRouter} from "next/router";

import {MusicPlayerContext} from "../store/context";

const HomePage = () => {
  const router = useRouter();
	const context = useContext(MusicPlayerContext);
	const {token, setToken} = context;
	useEffect(() => {
    const hash = window.location.hash;
		if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
			localStorage.setItem("token", _token);
			setToken(_token);
		} else if (!token) {
      router.replace("/login");
    }
	}, [token, setToken]);

	return <main>Hello world</main>;
};

export default HomePage;

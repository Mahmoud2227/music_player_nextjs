import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import {AiFillPlayCircle} from "react-icons/ai";
import {IconContext} from "react-icons/lib";

import {MusicPlayerContext} from "../store/context";

import classes from "../styles/Home.module.scss";

const HomePage = () => {
	const router = useRouter();
	const [playlists, setPlaylists] = useState([]);

	const {token, setToken} = useContext(MusicPlayerContext);
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
		} else if (token) {
		}

		return () => clearTimeout(timer);
	}, [token, setToken, router]);

	useEffect(() => {
		const fetchPlaylists = async (token) => {
			const res = await fetch("https://api.spotify.com/v1/me/playlists", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log(data);
			setPlaylists(data.items);
		};
		if (token) {
			fetchPlaylists(token);
		}
	}, [token]);

	return (
		<main className={classes["home"]}>
			{playlists &&
				playlists.map((playlist) => {
					return (
						<Link
							href={{
								pathname: "/player",
								query: {
									id: playlist.id,
								},
							}}
							key={playlist.id}>
							<div className={classes["playlist-card"]}>
								<Image
									className={classes["playlist__cover-image"]}
									src={playlist.images[0].url}
									alt='playlist cover'
									layout='responsive'
									height={100}
									width={100}
								/>
								<p className={classes["playlist__title"]}>{playlist.name}</p>
								<p className={classes["playlist__subtitle"]}>{playlist.tracks.total} Songs</p>
								<span className={classes["playlist__play-button"]}>
									<IconContext.Provider value={{size: "50px", color: "#E99D72"}}>
										<AiFillPlayCircle />
									</IconContext.Provider>
								</span>
							</div>
						</Link>
					);
				})}
		</main>
	);
};

export default HomePage;

import {useEffect, useContext, useState} from "react";
import {useRouter} from "next/router";

import classes from "../styles/Player.module.scss";

import {MusicPlayerContext} from "../store/context";

import TrackCard from "../components/TrackCard/TrackCard";
import Queue from "../components/Queue/Queue";

const PLayerPage = () => {
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const router = useRouter();
	const {id} = router.query;

	const {token} = useContext(MusicPlayerContext);

	useEffect(() => {
		const fetchTracks = async (playlist_id) => {
			const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setTracks(data.items);
			console.log(data.items[0].track);
		};

		if (id) {
			fetchTracks(id);
		}
	}, [id, token]);

	return (
		<main className={classes["body"]}>
			<div className={classes["body-left"]}></div>
			<div className={classes["body-right"]}>
					{tracks[currentIndex] && <TrackCard track={tracks[currentIndex].track} />}
				<Queue />
			</div>
		</main>
	);
};

export default PLayerPage;

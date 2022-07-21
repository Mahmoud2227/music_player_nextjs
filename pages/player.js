import {useEffect, useContext, useState} from "react";
import {useRouter} from "next/router";

import classes from "../styles/Player.module.scss";

import {MusicPlayerContext} from "../store/context";

import TrackCard from "../components/TrackCard/TrackCard";
import Queue from "../components/Queue/Queue";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const PLayerPage = () => {
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState(null);
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
			setCurrentTrack(data.items[0].track);
			// console.log(data.items[0].track.album.images[1]);
		};

		if (id) {
			fetchTracks(id);
		}
	}, [id, token]);

	useEffect(()=> {
		if (tracks[currentIndex]) {
			setCurrentTrack(tracks[currentIndex].track);
		}
	},[currentIndex, tracks]);



	return (
		<main className={classes["body"]}>
			<div className={classes["body-left"]}>
				{currentTrack && <AudioPlayer currentTrack={currentTrack} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} total={tracks} />}
			</div>
			<div className={classes["body-right"]}>
					{tracks[currentIndex] && <TrackCard track={tracks[currentIndex].track} />}
				{tracks && <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />}
			</div>
		</main>
	);
};

export default PLayerPage;

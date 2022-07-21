import {useState} from "react";

import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";

import classes from "./audioPlayer.module.scss";

const AudioPlayer = ({currentTrack,currentIndex,setCurrentIndex,total}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const nextTrackHandler = () => {
		if(currentIndex < total.length - 1){
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	}

	const prevTrackHandler = () => {
		if(currentIndex > 0){
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(total.length - 1);
		}
	}

	const artists = [];
	currentTrack.album.artists.forEach((artist) => {
		artists.push(artist.name);
	});
	return (
		<div className={classes["body"]}>
			<div className={classes["body-left"]}>
				<ProgressCircle
					percentage={75}
					isPlaying={isPlaying}
					image={currentTrack.album.images[1].url}
					size={300}
					color='#C96850'
				/>
			</div>
			<div className={classes["body-right"]}>
				<p className={classes["track-title"]}>{currentTrack.name}</p>
				<p className={classes["track-artists"]}>{artists.join(" | ")}</p>
				<div className={classes["body-right-bottom"]}>
					<div className={classes["track-duration"]}>
						<p>0:01</p>
						<WaveAnimation isPlaying={isPlaying} />
						<p>0:30</p>
					</div>
					<Controls
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						onNext={nextTrackHandler}
						onPrev={prevTrackHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;

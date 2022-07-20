import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";

import classes from "./audioPlayer.module.scss";

const AudioPlayer = ({currentTrack}) => {
	const artists = [];
	currentTrack.album.artists.forEach((artist) => {
		artists.push(artist.name);
	});
	return (
		<div className={classes["body"]}>
			<div className={classes["body-left"]}>
				<ProgressCircle
					percentage={75}
					isPlaying={true}
					image={currentTrack.album.images[1].url}
					size={300}
					color='#C96850'
				/>
			</div>
			<div className={classes["body-right"]}>
				<p className={classes["track-title"]}>{currentTrack.name}</p>
				<p className={classes["track-artists"]}>{artists.join(" | ")}</p>
        <div className={classes['body-right-bottom']}>
          <div className={classes['track-duration']}>
            <p>0:01</p>
            <WaveAnimation isPlaying={true}/>
            <p>0:30</p>
          </div>
        </div>
			</div>
		</div>
	);
};

export default AudioPlayer;

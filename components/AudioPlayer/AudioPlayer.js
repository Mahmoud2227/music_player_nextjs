import classes from "./audioPlayer.module.scss";
import ProgressCircle from "./ProgressCircle";

const AudioPlayer = ({currentTrack}) => {
	return (
		<div className={classes["body"]}>
			<div className={classes["body-left"]}>
				<ProgressCircle
					percentage={75}
					isPlaying={true}
					image={currentTrack.album.images[1].url}
					size= {300}
					color='#C96850'
				/>
			</div>
			<div className={classes["body-right"]}></div>
		</div>
	);
};

export default AudioPlayer;

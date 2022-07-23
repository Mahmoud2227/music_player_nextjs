import {useEffect, useRef, useState} from "react";

import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";

import classes from "./audioPlayer.module.scss";

const AudioPlayer = ({currentTrack, currentIndex, setCurrentIndex, total}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const audioSource = total[currentIndex].track.preview_url;

	const audioRef = useRef(new Audio(audioSource));
	const {duration} = audioRef.current;

	const intervalRef = useRef();

	const isReady = useRef(false);

	const currentPercentage = duration ? (progress / duration) * 100 : 0;

	const startTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				nextTrackHandler();
				// console.log(currentTrack.name);
				// audioRef.current = new Audio(audioSource);
			} else {
				setProgress(audioRef.current.currentTime);
			}
		}, 1000);
	};

	useEffect(() => {
		if (audioRef.current.src) {
			if (isPlaying) {
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		} else {
			if (isPlaying) {
				audioRef.current = new Audio(audioSource);
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(audioSource);
		setProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [currentIndex]);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const nextTrackHandler = () => {
		if (currentIndex < total.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	};

	const prevTrackHandler = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(total.length - 1);
		}
	};

	const addZero = (n) => {
		return n > 9 ? "" + n : "0" + n;
	};

	const artists = [];
	currentTrack.album.artists.forEach((artist) => {
		artists.push(artist.name);
	});
	return (
		<div className={classes["body"]}>
			<div className={classes["body-left"]}>
				<ProgressCircle
					percentage={currentPercentage}
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
						<p>0:{addZero(Math.round(progress))}</p>
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

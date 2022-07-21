import {IconContext} from "react-icons";
import {FaPause} from "react-icons/fa";
import {IoPlaySkipBack, IoPlaySkipForward, IoPlay} from "react-icons/io5";

import classes from "./controls.module.scss";

const Controls = ({isPlaying, setIsPlaying, onNext, onPrev}) => {
	return (
		<IconContext.Provider value={{size: "35px", color: "#C4D0E3"}}>
			<div className={classes["body"]}>
				<div className={classes["action-btn"]} onClick={onPrev}>
					<IoPlaySkipBack />
				</div>
				<div
					className={`${classes["play-pause-btn"]} ${isPlaying ? classes["active"] : ""}`}
					onClick={() => setIsPlaying(prevState => !prevState)}>
					{isPlaying ? <FaPause /> : <IoPlay />}
				</div>
				<div className={classes["action-btn"]} onClick={onNext}>
					<IoPlaySkipForward />
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Controls;

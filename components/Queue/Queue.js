import classes from "./queue.module.scss"

const Queue = ({tracks, setCurrentIndex}) => {
	return (
		<div className={classes["body"]}>
			<p className={classes["upNext"]}>Up Next</p>
			<div className={classes["list"]}>
				{tracks?.map((track, index) => (
					<div
						key={index + "key"}
						className={classes["list-item"]}
						onClick={() => setCurrentIndex(index)}>
						<p className={classes["track-name"]}>{track.track.name}</p>
						<p>0:30</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Queue;
import classes from "./waveAnimation.module.scss"

const WaveAnimation = ({isPlaying}) => {
  return (
		<div className={classes['container']}>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box1']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box2']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box3']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box4']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box5']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box6']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box7']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box2']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box3']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box4']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box5']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box6']}`}></div>
			<div className={`${isPlaying?`${classes['active']}`:""} ${classes['box']} ${classes['box7']}`}></div>
		</div>
	);
}

export default WaveAnimation;
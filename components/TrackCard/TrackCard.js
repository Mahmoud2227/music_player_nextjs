import Image from "next/image";

import classes from "./trackCard.module.scss";

const TrackCard = ({album}) => {
	return (
		<div className={classes["body"]}>
			<div className={classes["album-cover"]}>
				<Image
					src={album.images[0].url}
					alt='album cover'
					width={640}
					height={640}
				/>
				<div className={classes['cover-shadow']}>
					<Image
						src={album.images[0].url}
						alt='cover shadow'
						width={640}
						height={640}
					/>
				</div>
			</div>
		</div>
	);
};

export default TrackCard;

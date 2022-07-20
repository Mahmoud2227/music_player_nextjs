import Image from "next/image";

import classes from "./trackCard.module.scss";

const TrackCard = ({track:{album,name}}) => {
	const artists = [];
	album?.artists?.forEach((element) => {
		artists.push(element.name);
	});

	return (
		<div className={classes["body"]}>
			<div className={classes["album-cover"]}>
				<Image src={album.images[1].url} alt='album cover' width={300} height={300} />
				<div className={classes["cover-shadow"]}>
					<Image src={album.images[1].url} alt='cover shadow' width={300} height={300} />
				</div>
			</div>
			<div className={classes["album-info"]}>
				<div className={classes["album-name"]}>
						<p>{name + " - " + album.name}</p>
						{/* <p>{album.name}</p> */}
				</div>
				<div className={classes["album-desc"]}>
					<p>{`${album.name} is an ${album.album_type} by ${artists?.join(", ")} with ${
						album?.total_tracks
					} track(s)`}</p>
				</div>
				<div className={classes["album-release"]}>
					<p>Release Date: {album.release_date}</p>
				</div>
			</div>
		</div>
	);
};

export default TrackCard;

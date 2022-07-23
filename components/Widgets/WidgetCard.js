import {IconContext} from "react-icons";
import {FiChevronRight} from "react-icons/fi";

import WidgetEntry from "./widgetEntry";

import classes from "./widgetCard.module.scss"

export default function WidgetCard({title, similar, featured, newRelease}) {
	console.log("similar", similar, "featured", featured, "newRelease", newRelease);
	return (
		<div className={classes["body"]}>
			<p className={classes["title"]}>{title}</p>
			{similar
				? similar.map((artist) => (
						<WidgetEntry
							title={artist.name}
							subtitle={artist.followers.total + " Followers"}
							image={artist.images[2].url}
							key={artist.id}
						/>
				  ))
				: featured
				? featured.map((playlist) => (
						<WidgetEntry
							title={playlist.name}
							subtitle={playlist.tracks.total + " Songs"}
							image={playlist.images[0].url}
							key={playlist.id}
						/>
				  ))
				: newRelease
				? newRelease.map((album) => (
						<WidgetEntry
							title={album.name}
							subtitle={album.artists[0].name}
							image={album.images[2].url}
							key={album.id}
						/>
				  ))
				: null}
			<div className={classes["fade"]}>
				<IconContext.Provider value={{size: "24px", color: "#c4d0e3"}}>
					<FiChevronRight />
				</IconContext.Provider>
			</div>
		</div>
	);
}

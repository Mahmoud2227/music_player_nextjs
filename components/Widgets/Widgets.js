import {useState, useEffect, useContext} from "react";

import WidgetCard from "./widgetCard";
import {MusicPlayerContext} from "../../store/context";

import classes from "./widgets.module.scss";

export default function Widgets({artistID}) {
	const [similar, setSimilar] = useState([]);
	const [featured, setFeatured] = useState([]);
	const [newRelease, setNewRelease] = useState([]);

	const {token} = useContext(MusicPlayerContext);

	useEffect(() => {
		const fetchArtists = async () => {
			const res = await fetch(`https://api.spotify.com/v1/artists/${artistID}/related-artists`, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setSimilar(data);
			setSimilar(data.artists.slice(0, 3));
		};

		const fetchFeatured = async () => {
			const res = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setFeatured(data.playlists.items.slice(0, 3));
		};

		const fetchNewRelease = async () => {
			const res = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log(data);
			setNewRelease(data.albums.items.slice(0, 3));
		};

		fetchArtists();
		fetchFeatured();
		fetchNewRelease();
		// if (artistID) {
		// 	apiClient
		// 		.get(`/artists/${artistID}/related-artists`)
		// 		.then((res) => {
		// 			const a = res.data?.artists.slice(0, 3);
		// 			setSimilar(a);
		// 		})
		// 		.catch((err) => console.error(err));

		// 	apiClient
		// 		.get(`/browse/featured-playlists`)
		// 		.then((res) => {
		// 			const a = res.data?.playlists.items.slice(0, 3);
		// 			setFeatured(a);
		// 		})
		// 		.catch((err) => console.error(err));

		// 	apiClient
		// 		.get(`/browse/new-releases`)
		// 		.then((res) => {
		// 			const a = res.data?.albums.items.slice(0, 3);
		// 			setNewRelease(a);
		// 		})
		// 		.catch((err) => console.error(err));
		// }
	}, [artistID]);

	return (
		<div className={classes["body"]}>
			<WidgetCard title='Similar Artists' similar={similar} />
			<WidgetCard title='Made For You' featured={featured} />
			<WidgetCard title='New Releases' newRelease={newRelease} />
		</div>
	);
}

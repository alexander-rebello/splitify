import React, { useEffect, useState } from "react";
import { CurrentTrackHeader } from "./components/CurrentTrackHeader";
import { TrackList } from "./components/TrackList";
import "./css/style.css";
import { NextTrack } from "./types";

// Main App component
const App: React.FC = () => {
	const [nextTracks, setNextTracks] = useState<NextTrack[]>([]);
	const [currentTrack, setCurrentTrack] = useState<any>(null);
	const [visibleTracks, setVisibleTracks] = useState<NextTrack[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Update tracks when queue changes
	useEffect(() => {
		const updateTracks = () => {
			const tracks = Spicetify.Queue.nextTracks || [];
			setNextTracks(tracks);
			// Load first 15 tracks immediately for faster initial render
			setVisibleTracks(tracks.slice(0, 15));
			setCurrentTrack(Spicetify.Player.data?.item);
			setIsLoading(false);

			// Load remaining tracks after a short delay
			if (tracks.length > 15) {
				setTimeout(() => {
					setVisibleTracks(tracks);
				}, 100);
			}
		};

		// Initial load
		updateTracks();

		// Listen for player state changes
		Spicetify.Player.addEventListener("songchange", updateTracks);
		Spicetify.Player.addEventListener("queuechange", updateTracks);

		return () => {
			Spicetify.Player.removeEventListener("songchange", updateTracks);
			Spicetify.Player.removeEventListener("queuechange", updateTracks);
		};
	}, []);

	const handleTrackClick = (trackUri: string, event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();

		console.log("Track clicked:", trackUri);

		// Find the index of the clicked track in the queue
		const targetIndex = nextTracks.findIndex((track) => track.contextTrack.uri === trackUri);

		if (targetIndex !== -1) {
			console.log(`Skipping to track ${targetIndex + 1}: ${trackUri}`);
			// Skip to the target track by calling next() multiple times
			for (let i = 0; i <= targetIndex; i++) {
				Spicetify.Player.next();
			}
		} else {
			console.log("Track not found in queue");
		}
	};

	const handleArtistClick = (artistUri?: string) => {
		if (artistUri) {
			Spicetify.Platform.History.push(`/artist/${artistUri.replace("spotify:artist:", "")}`);
		}
	};

	const handleAlbumClick = (albumUri?: string) => {
		if (albumUri) {
			Spicetify.Platform.History.push(`/album/${albumUri.replace("spotify:album:", "")}`);
		}
	};

	if (isLoading) {
		return <div style={{ padding: "20px", color: "#b3b3b3" }}>Loading queue...</div>;
	}

	return (
		<section role='presentation' data-testid='queue-page' style={{ paddingTop: "0", marginTop: "0" }}>
			<CurrentTrackHeader currentTrack={currentTrack} />
			<TrackList visibleTracks={visibleTracks} onTrackClick={handleTrackClick} onArtistClick={handleArtistClick} onAlbumClick={handleAlbumClick} />
		</section>
	);
};

export default App;

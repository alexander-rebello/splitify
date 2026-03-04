import React, { useEffect, useState } from "react";
import "./css/style.css";

interface TrackMetadata {
	marked_for_download?: string;
	"canvas.id"?: string;
	image_large_url?: string;
	context_uri?: string;
	has_lyrics?: string;
	"collection.in_collection"?: string;
	"collection.can_add"?: string;
	"canvas.entityUri"?: string;
	image_url?: string;
	"canvas.uploadedBy"?: string;
	image_small_url?: string;
	"canvas.fileId"?: string;
	"actions.skipping_next_past_track"?: string;
	video_association_image_xxlarge?: string;
	album_title?: string;
	video_association_image_height_xxlarge?: string;
	"canvas.artist.uri"?: string;
	video_association_image_width_large?: string;
	video_association?: string;
	"collection.is_banned"?: string;
	artist_name?: string;
	"collection.can_ban"?: string;
	video_association_image?: string;
	entity_uri?: string;
	album_artist_name?: string;
	video_association_image_width?: string;
	duration?: string;
	video_association_image_height?: string;
	album_uri?: string;
	video_association_image_large?: string;
	"canvas.artist.name"?: string;
	iteration?: string;
	"canvas.canvasUri"?: string;
	"actions.skipping_prev_past_track"?: string;
	video_association_image_height_large?: string;
	video_association_image_width_xxlarge?: string;
	"canvas.type"?: string;
	"canvas.explicit"?: string;
	image_xlarge_url?: string;
	artist_uri?: string;
	track_player?: string;
	title?: string;
	"canvas.url"?: string;
	"canvas.artist.avatar"?: string;
}

interface ContextTrack {
	uri: string;
	uid: string;
	metadata: TrackMetadata;
}

interface NextTrack {
	contextTrack: ContextTrack;
	removed: any[];
	blocked: any[];
	provider: string;
}

// Utility function to format duration
const formatDuration = (duration?: string): string => {
	if (!duration) return "0:00";
	const seconds = Math.floor(parseInt(duration) / 1000);
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

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
			<div className='main-entityHeader-container main-useDropTarget-base main-useDropTarget-track main-useDropTarget-local main-useDropTarget-episode main-useDropTarget-album JYKKZFIXuf9lIHVeszuS' style={{ marginTop: "0", paddingTop: "64px" }}>
				<div className='main-entityHeader-backgroundColor' style={{ backgroundColor: "rgb(32, 87, 100)" }}></div>
				<div className='main-entityHeader-backgroundColor main-entityHeader-overlay'></div>
				<div className='iWTIFTzhRZT0rCD0_gOK contentSpacing'>
					<div></div>
					<div className='main-entityHeader-imageContainer main-entityHeader-imageContainerNew'>
						<div className='profile-editImage-imageContainer' data-testid='queue-image' draggable='true'>
							<div className='main-entityHeader-image' draggable='false'>
								{currentTrack?.metadata?.image_xlarge_url || currentTrack?.metadata?.image_large_url ? (
									<img
										aria-hidden='false'
										draggable='false'
										loading='eager'
										src={(currentTrack.metadata.image_xlarge_url || currentTrack.metadata.image_large_url)?.replace("spotify:image:", "https://i.scdn.co/image/")}
										alt=''
										className='main-image-image main-entityHeader-image main-entityHeader-shadow main-image-loaded'
										sizes='(min-width: 1280px) 232px, 192px'
									/>
								) : (
									<div
										style={{
											width: "232px",
											height: "232px",
											backgroundColor: "#282828",
											borderRadius: "8px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "48px",
											color: "#b3b3b3",
										}}
									>
										🎵
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='main-entityHeader-headerText'>
						{currentTrack && (
							<>
								<span className='e-91000-text encore-text-body-small main-entityHeader-pretitle' data-encore-id='text'>
									Now Playing
								</span>
								<span dir='auto' className='main-entityHeader-title' draggable='true'>
									<button aria-label={currentTrack.metadata?.title || "Current Track"} className='main-entityHeader-titleButton'>
										<span className='main-entityHeader-titleInner'>
											<h1 className='e-91000-text encore-text-headline-large encore-internal-color-text-base' data-encore-id='text' dir='auto' style={{ visibility: "visible", width: "100%", fontSize: "6rem", whiteSpace: "nowrap" }}>
												{currentTrack.metadata?.title || "Unknown Track"}
											</h1>
										</span>
									</button>
								</span>
								<div className='blfR_YJUsKUvdgTejBSb' style={{ "--text-subdued": "rgba(255, 255, 255, 0.7)" } as React.CSSProperties}>
									<div className='GI8QLntnaSCh2ONX_y2c'>
										<span className='e-91000-text encore-text-body-small encore-internal-color-text-subdued w1TBi3o5CTM7zW1EB3Bm' data-encore-id='text'>
											{currentTrack.metadata?.artist_name || "Unknown Artist"}
										</span>
										{currentTrack.metadata?.album_title && (
											<>
												<span className='e-91000-text encore-text-body-small encore-internal-color-text-subdued ArQQy9kpoXLmafHpoi6u twKbCm9ojEsawfh4KCY8' data-encore-id='text' data-separator='true'>
													•
												</span>
												<span className='e-91000-text encore-text-body-small encore-internal-color-text-subdued w1TBi3o5CTM7zW1EB3Bm' data-encore-id='text'>
													{currentTrack.metadata.album_title}
												</span>
											</>
										)}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='playlist-playlist-playlistContent'>
				<div className='main-actionBarBackground-background' style={{ backgroundColor: "rgb(32, 87, 100)" }}></div>
				<div className='main-useDropTarget-base main-useDropTarget-track main-useDropTarget-local main-useDropTarget-episode main-useDropTarget-album'>
					<div className='contentSpacing'>
						<div className='Xo8dgIGCCWjHXWBoKhaV'>
							<div
								role='grid'
								aria-rowcount={visibleTracks.length + 1}
								aria-colcount={4}
								aria-label='Queue'
								className='main-trackList-trackList main-trackList-indexable'
								tabIndex={0}
								style={{ "--placeholder-image": "url(/images/tracklist-placeholder.webp)", "--placeholder-image-compact": "url(/images/tracklist-placeholder-compact.webp)", "--row-height": "56px" } as React.CSSProperties}
							>
								<div className='main-trackList-trackListHeader main-trackList-trackListHeaderStuck' style={{ top: "64px" }} role='presentation'>
									<div role='presentation'>
										<div className='main-trackList-trackListHeaderRow main-trackList-trackListRowGrid' role='row' aria-rowindex={1}>
											<div className='main-trackList-rowSectionIndex' role='columnheader' aria-colindex={1} aria-sort='none' tabIndex={-1}>
												<div>#</div>
											</div>
											<div className='main-trackList-rowSectionStart' role='columnheader' aria-colindex={2} aria-sort='none' tabIndex={-1}>
												<div>Title</div>
												<div className='I7SbihsVaE4CAUqLMa45'></div>
											</div>
											<div className='main-trackList-rowSectionVariable' role='columnheader' aria-colindex={3} aria-sort='none' tabIndex={-1}>
												<div>Album</div>
												<div className='I7SbihsVaE4CAUqLMa45'></div>
											</div>
											<div className='main-trackList-rowSectionEnd' role='columnheader' aria-colindex={4} aria-sort='none' tabIndex={-1}>
												<div>
													<svg
														data-encore-id='icon'
														role='img'
														aria-hidden='true'
														className='e-91000-icon e-91000-baseline'
														viewBox='0 0 16 16'
														style={{ "--encore-icon-height": "var(--encore-graphic-size-decorative-smaller)", "--encore-icon-width": "var(--encore-graphic-size-decorative-smaller)" } as React.CSSProperties}
													>
														<path d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'></path>
														<path d='M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z'></path>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='main-rootlist-wrapper' role='presentation' style={{ height: `${visibleTracks.length * 56}px` }}>
									<div role='presentation' style={{ transform: "translateY(0px)" }}>
										{visibleTracks.map((track, index) => (
											<div key={track.contextTrack.uid} role='row' aria-rowindex={index + 2} aria-selected='false'>
												<div className='main-trackList-trackListRow main-trackList-trackListRowGrid' draggable='true' role='presentation'>
													<div className='main-trackList-rowSectionIndex' role='gridcell' aria-colindex={1}>
														<div className='main-trackList-rowMarker'>
															<span className='e-91000-text encore-text-body-medium main-trackList-number' data-encore-id='text'>
																{index + 1}
															</span>
															<button className='main-trackList-rowImagePlayButton' aria-label={`Play ${track.contextTrack.metadata.title} by ${track.contextTrack.metadata.artist_name}`} tabIndex={-1} onClick={(e) => handleTrackClick(track.contextTrack.uri, e)}>
																<svg data-encore-id='icon' role='img' aria-hidden='true' className='e-91000-icon e-91000-baseline main-trackList-rowPlayPauseIcon' viewBox='0 0 24 24'>
																	<path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606'></path>
																</svg>
															</button>
														</div>
													</div>
													<div className='main-trackList-rowSectionStart' role='gridcell' aria-colindex={2}>
														<img
															aria-hidden='false'
															draggable='false'
															loading='eager'
															src={track.contextTrack.metadata.image_small_url?.replace("spotify:image:", "https://i.scdn.co/image/")}
															alt=''
															className='main-image-image main-trackList-rowImage main-image-loaded'
															width='40'
															height='40'
															style={{ borderRadius: "4px" }}
														/>
														<div className='main-trackList-rowMainContent' style={{ marginLeft: "16px", minWidth: 0, flex: 1 }}>
															<div className='e-91000-text encore-text-body-medium encore-internal-color-text-base main-trackList-rowTitle standalone-ellipsis-one-line' data-encore-id='text' dir='auto'>
																{track.contextTrack.metadata.title}
															</div>
															<span className='e-91000-text encore-text-body-small encore-internal-color-text-subdued standalone-ellipsis-one-line' data-encore-id='text'>
																<div className='e-91000-text encore-text-body-small' data-encore-id='text'>
																	<span style={{ cursor: "pointer" }} onClick={() => handleArtistClick(track.contextTrack.metadata.artist_uri)}>
																		{track.contextTrack.metadata.artist_name}
																	</span>
																</div>
															</span>
														</div>
													</div>
													<div className='main-trackList-rowSectionVariable' role='gridcell' aria-colindex={3} style={{ minWidth: 0 }}>
														<span className='e-91000-text encore-text-body-small' data-encore-id='text'>
															<span draggable='true' className='standalone-ellipsis-one-line' dir='auto' style={{ cursor: "pointer" }} tabIndex={-1} onClick={() => handleAlbumClick(track.contextTrack.metadata.album_uri)}>
																{track.contextTrack.metadata.album_title}
															</span>
														</span>
													</div>
													<div className='main-trackList-rowSectionEnd' role='gridcell' aria-colindex={4}>
														<div className='e-91000-text encore-text-body-small encore-internal-color-text-subdued main-trackList-rowDuration' data-encore-id='text'>
															{formatDuration(track.contextTrack.metadata.duration)}
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default App;

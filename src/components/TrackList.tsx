import React from "react";
import { NextTrack } from "../types";
import { TrackListHeader } from "./TrackListHeader";
import { TrackListRow } from "./TrackListRow";

interface TrackListProps {
	visibleTracks: NextTrack[];
	onTrackClick: (trackUri: string, event: React.MouseEvent) => void;
	onArtistClick: (artistUri?: string) => void;
	onAlbumClick: (albumUri?: string) => void;
}

export const TrackList: React.FC<TrackListProps> = ({ visibleTracks, onTrackClick, onArtistClick, onAlbumClick }) => {
	return (
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
							<TrackListHeader />
							<div className='main-rootlist-wrapper' role='presentation' style={{ height: `${visibleTracks.length * 56}px` }}>
								<div role='presentation' style={{ transform: "translateY(0px)" }}>
									{visibleTracks.map((track, index) => (
										<TrackListRow key={track.contextTrack.uid} track={track} index={index} onTrackClick={onTrackClick} onArtistClick={onArtistClick} onAlbumClick={onAlbumClick} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

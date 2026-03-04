import React from "react";
import { NextTrack } from "../types";
import { formatDuration } from "../utils/formatDuration";

interface TrackListRowProps {
	track: NextTrack;
	index: number;
	onTrackClick: (trackUri: string, event: React.MouseEvent) => void;
	onArtistClick: (artistUri?: string) => void;
	onAlbumClick: (albumUri?: string) => void;
}

export const TrackListRow: React.FC<TrackListRowProps> = ({ track, index, onTrackClick, onArtistClick, onAlbumClick }) => {
	return (
		<div key={track.contextTrack.uid} role='row' aria-rowindex={index + 2} aria-selected='false'>
			<div className='main-trackList-trackListRow main-trackList-trackListRowGrid' draggable='true' role='presentation'>
				<div className='main-trackList-rowSectionIndex' role='gridcell' aria-colindex={1}>
					<div className='main-trackList-rowMarker'>
						<span className='e-91000-text encore-text-body-medium main-trackList-number' data-encore-id='text'>
							{index + 1}
						</span>
						<button className='main-trackList-rowImagePlayButton' aria-label={`Play ${track.contextTrack.metadata.title} by ${track.contextTrack.metadata.artist_name}`} tabIndex={-1} onClick={(e) => onTrackClick(track.contextTrack.uri, e)}>
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
								<span style={{ cursor: "pointer" }} onClick={() => onArtistClick(track.contextTrack.metadata.artist_uri)}>
									{track.contextTrack.metadata.artist_name}
								</span>
							</div>
						</span>
					</div>
				</div>
				<div className='main-trackList-rowSectionVariable' role='gridcell' aria-colindex={3} style={{ minWidth: 0 }}>
					<span className='e-91000-text encore-text-body-small' data-encore-id='text'>
						<span draggable='true' className='standalone-ellipsis-one-line' dir='auto' style={{ cursor: "pointer" }} tabIndex={-1} onClick={() => onAlbumClick(track.contextTrack.metadata.album_uri)}>
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
	);
};

import React from "react";

interface CurrentTrackHeaderProps {
	currentTrack: any;
}

export const CurrentTrackHeader: React.FC<CurrentTrackHeaderProps> = ({ currentTrack }) => {
	return (
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
	);
};

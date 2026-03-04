import React from "react";

export const TrackListHeader: React.FC = () => {
	return (
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
	);
};

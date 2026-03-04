export interface TrackMetadata {
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

export interface ContextTrack {
	uri: string;
	uid: string;
	metadata: TrackMetadata;
}

export interface NextTrack {
	contextTrack: ContextTrack;
	removed: any[];
	blocked: any[];
	provider: string;
}

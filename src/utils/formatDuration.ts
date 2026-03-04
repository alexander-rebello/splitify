export const formatDuration = (duration?: string): string => {
	if (!duration) return "0:00";
	const seconds = Math.floor(parseInt(duration) / 1000);
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

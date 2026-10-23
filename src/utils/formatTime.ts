export function formatTime(totalSeconds: number, showSeconds: boolean) {
if (!showSeconds) return `${Math.ceil(totalSeconds / 60)} min`;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

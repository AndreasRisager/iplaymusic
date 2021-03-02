export default function TimeCovert(ms) {
	if (Object.prototype.toString.call(ms) !== "[object Number]") {
		throw new Error()
	}
	var minutes = Math.floor(ms / 60000);
	var seconds = ((ms % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

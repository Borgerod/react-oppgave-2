export default function GetPreferences() {
	let prefs = {
		theme: "dark",
		language: "en",
	};
	return JSON.stringify(prefs);
}

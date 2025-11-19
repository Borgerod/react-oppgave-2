export default function GetPreferences() {
	const prefs = {
		theme: "dark",
		language: "en",
	};
	return JSON.stringify(prefs);
}

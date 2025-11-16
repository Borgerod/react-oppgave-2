// import React, { useState, useEffect } from "react";

// export const getCatFact = () => {
// 	const ApiUrl = "https://catfact.ninja/facts?limit=5";
// 	// const [data, setData] = useState([]);

// 	let facts;

// 	useEffect(() => {
// 		(async () => {
// 			try {
// 				const response = await fetch(ApiUrl);
// 				// const response = await axios.get(ApiUrl);
// 				const data = response.json();
// 				console.log(data);
// 				// setData(data); // use split if you have to, I dont think you need that.
// 			} catch (err) {
// 				console.error(err);
// 			}
// 		})();
// 	}, []);

// 	return facts;
// };
"use client";

import React, { useState, useEffect } from "react";

export default function GetCatFacts() {
	const ApiUrl: string = "https://catfact.ninja/facts?limit=5";
	// const [data, setData] = useState(null);

	useEffect(() => {
		async function load() {
			const response = await fetch(ApiUrl);
			const data = await response.json();
			console.log(data);
		}
		load();
	}, []);
}

// export default function GetPreferences() {
// 	let prefs = {
// 		theme: "dark",
// 		language: "en",
// 	};
// 	return JSON.stringify(prefs);
// }

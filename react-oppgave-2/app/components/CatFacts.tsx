"use client";
// import GetCatFacts from "@/lib/API/getCatFact";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function CatFacts() {
	const [data, setData] = useState<string[]>([]);
	const amount: number = 5;
	useEffect(() => {
		(async () => {
			try {
				const ApiUrl: string = `https://catfact.ninja/facts?limit=${amount}`;
				const response = await fetch(ApiUrl);
				const data = await response.json();
				console.log(data);
				// setData(Array.isArray(data) ? data : []);
				setData(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
	console.log(data.data);
	const facts = data.map((data) => <li key={data}> {data} </li>);
	return (
		<>
			<div className={cn("")}>placehodler</div>
			<div>fact fact:</div>
			<div> {facts}</div>
		</>
	);
}

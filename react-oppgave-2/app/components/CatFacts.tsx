"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaCat } from "react-icons/fa6";
import { FaShieldCat } from "react-icons/fa6";
import { LuCat } from "react-icons/lu";
import { TbCat } from "react-icons/tb";
import { PiCatFill } from "react-icons/pi";
import { PiCat } from "react-icons/pi";
import { LuPawPrint } from "react-icons/lu";
import { PiPawPrintFill } from "react-icons/pi";
import { PiPawPrint } from "react-icons/pi";

type Facts = {
	fact: string;
	length: number;
};

type ApiResponse = {
	data: Facts[];
};

export default function CatFacts() {
	// let buttonClickCounter = 0;
	const [buttonClickCounter, setButtonClickCounter] = useState<number>(0);
	// const [data, setData] = useState(0);

	// let amount: number = 7; // TEMP
	const [amount, setAmount] = useState<number>(7);

	// const [apiUrl, setApiUrl] = useState(
	// 	`https://catfact.ninja/facts?limit=${amount}`
	// );
	const apiUrl = `https://catfact.ninja/facts?limit=${amount}`;
	// let buttonValue;
	// = "more";
	const [buttonValue, setButtonValue] = useState<string>("More");

	const [data, setData] = useState<ApiResponse>({ data: [] });
	const fetchData = async (apiUrl: string) => {
		const res = await fetch(apiUrl);
		const json = await res.json();
		setData(json);
	};

	useEffect(() => {
		fetchData(apiUrl);
	}, [apiUrl, amount]);

	useEffect(() => {
		console.log(buttonClickCounter);
		switch (buttonClickCounter) {
			case 0:
				return setButtonValue("More");
			case 1:
				return setButtonValue("More!");
			case 2:
				return setButtonValue("MORE!");
			case 3:
				return setButtonValue("I SAID MOOORE!!!");
			default:
				return setButtonValue("More");
		}
	}, [buttonClickCounter, buttonValue]);

	function buttonHandle() {
		// amount += 5;
		setAmount((prev) => prev + 5);

		setButtonClickCounter(buttonClickCounter + 1);
		console.log("buttonClickCounter", buttonClickCounter);
		console.log("amount will update after render");
		// setApiUrl(amount.toString());
		// console.log(apiUrl);
		// console.log(buttonClickCounter);
		// console.log(amount);
	}
	//! TEMPORARLY DISABLED
	// useEffect(() => {
	// 	if (!data.data.some((f) => f.fact === "Meow")) {
	// 		setData((prev) => ({
	// 			data: [...prev.data, { fact: "Meow", length: 1 }],
	// 		}));
	// 	}
	// }, [data.data]);

	const facts = data.data.map((data: Facts, i: number) => (
		<>
			{console.log(data.length)}
			<div
				key={i}
				className={cn(
					// "w-fit h-fit", //? this would be really cool!
					"w-full h-auto",
					"grid",
					"p-10",
					"content-start justify-start",
					"rounded-xl border-2",
					"border-slate-400/10 bg-neutral-100  dark:bg-neutral-900",
					"row-span-1",
					` ${i === 3 || i === 6 ? "col-span-2" : ""}`,
					// ` ${data.length >= 100 ? "col-span-2" : ""}`,

					// ` ${
					// 	i === 1 || i === 4
					// 		? "dark:bg-transparent bg-transparent border-none text-foreground/70"
					// 		: ""
					// }`,
					// ` ${
					// 	i === 4
					// 		? "dark:bg-transparent bg-transparent border-none text-6xl text-foreground/70"
					// 		: ""
					// }`,
					// ` ${i === 4 ? ((data.fact = "meow"), i--) : ""}`,
					// `${
					// 	data.fact === "Meow"
					// 		? "dark:bg-transparent bg-transparent border-none text-6xl text-foreground/70"
					// 		: ""
					// }`,
					""
				)}
			>
				{data.fact}
			</div>
		</>
	));
	return (
		<>
			<div
				className={cn(
					"flex flex-col",
					"w-fit h-fit",
					"w-full h-full",
					"justify-around",
					"items-end",
					""
				)}
			>
				<h1
					className={cn(
						"text-accent-light",
						"text-4xl",
						"w-full text-left"
					)}
				>
					fact facts
				</h1>

				{/* let rows grow with content */}
				<div className="grid auto-rows-min grid-cols-3 gap-4">
					{facts}
				</div>
				<button
					className={cn(
						"flex flex-row",
						"justify-between items-center content-between",
						"px-5",
						"text-nowrap",
						"h-10 w-80",
						"p-10",
						"gap-5",
						"w-fit",
						"text-container",
						"border-none",
						"rounded-full",
						"bg-accent-light",
						"hover:bg-accent",
						"text-xl",

						""
					)}
					onClick={buttonHandle}
				>
					{buttonValue}
					<PiPawPrint className={cn("flex h-10 w-10")} />
				</button>
			</div>
		</>
	);
}

// export default function CatFacts() {
// 	const [data, setData] = useState<string[]>([]);
// 	const amount: number = 5;
// 	useEffect(() => {
// 		(async () => {
// 			try {
// 				const ApiUrl: string =
// 				const response = await fetch(ApiUrl);
// 				const data = await response.json();
// 				console.log(data);
// 				setData(data);
// 			} catch (err) {
// 				console.error(err);
// 			}
// 		})();
// 	}, []);
// 	console.log(data.data);
// 	const facts = data.map((data) => <li key={data}> {data} </li>);
// 	return (
// 		<>
// 			<div className={cn("")}>placehodler</div>
// 			<div>fact fact:</div>
// 			<div> {facts}</div>
// 		</>
// 	);
// }

// "use client";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { FaCat } from "react-icons/fa6";
// import { FaShieldCat } from "react-icons/fa6";
// import { LuCat } from "react-icons/lu";
// import { TbCat } from "react-icons/tb";
// import { PiCatFill } from "react-icons/pi";
// import { PiCat } from "react-icons/pi";
// import { LuPawPrint } from "react-icons/lu";
// import { PiPawPrintFill } from "react-icons/pi";
// import { PiPawPrint } from "react-icons/pi";

// type Facts = {
// 	fact: string;
// 	length: number;
// };

// type ApiResponse = {
// 	data: Facts[];
// };

// export default function CatFacts() {
// 	const amount: number = 7; // TEMP
// 	const [apiUrl, setApiUrl] = useState(
// 		`https://catfact.ninja/facts?limit=${amount}`
// 	);
// 	// setApiUrl(amount);
// 	let [data, setData] = useState<ApiResponse>({ data: [] });
// 	const fetchData = async (apiUrl: string) => {
// 		const res = await fetch(apiUrl);
// 		const json = await res.json();
// 		console.log(json);

// 		// const _json = appendAdditionalData(json)
// 		console.log(json.data);
// 		// const shuffled_json = shuffle(json);
// 		// shuffled_json is an ApiResponse ({ data: Facts[] })
// 		// setData(shuffled_json);
// 		setData(json);
// 	};

// 	useEffect(() => {
// 		fetchData(apiUrl);
// 	}, [apiUrl, amount]);

// 	useEffect(() => {
// 		if (!data.data.some((f) => f.fact === "Meow")) {
// 			const newData = (prev: any) => ({
// 				data: [...prev.data, { fact: "Meow", length: 1 }],
// 			});
// 			const shuffledData = shuffle(newData);
// 			console.log("shuffledData: ", shuffledData);
// 			setData(
// 				shuffledData
// 				// shuffle()
// 			);
// 		}
// 	}, [data.data]);

// 	function shuffle(json: any): ApiResponse {
// 		let dataArray = json.data;
// 		const newdata: Facts[] = [...dataArray]; // Create a new data using spread operator
// 		let currentIndex = newdata.length;
// 		while (currentIndex !== 0) {
// 			let randomIndex = Math.floor(Math.random() * currentIndex);
// 			currentIndex--;
// 			[newdata[currentIndex], newdata[randomIndex]] = [
// 				newdata[randomIndex],
// 				newdata[currentIndex],
// 			];
// 		}

// 		// Return an ApiResponse object so it matches useState<ApiResponse>
// 		return { data: newdata };
// 	}

// 	// useEffect(
// 	// 	function () {
// 	// 		data = shuffle(data.data);
// 	// 		setRandomArray(shuffledData);
// 	// 	},
// 	// 	[data.data]
// 	// );

// 	// const facts = data.data.map((data: Facts, i: number) => (
// 	// 	<li key={i}>{data.fact}</li>
// 	// ));
// 	console.log(apiUrl);
// 	console.log(data.data.length);
// 	// data.data.push({
// 	// 	fact: "Meow",
// 	// 	length: 1,
// 	// });

// 	// const appendAdditionalData(json:ApiResponse){
// 	// 	// json.push(

// 	// 	// )
// 	// 	return json;
// 	// }
// 	const facts = data.data.map((data: Facts, i: number) => (
// 		// <li key={i}>{data.fact}</li>
// 		// <div
// 		// 	key={i}
// 		// 	className={cn(
// 		// 		"flex flex-col",
// 		// 		"rounded-2xl bg-container p-5",
// 		// 		"w-full",
// 		// 		"w-fit",
// 		// 		"h-fit",
// 		// 		""
// 		// 	)}
// 		// >
// 		// 	{data.fact}
// 		// </div>

// 		// GRID SOLUTION

// 		<>
// 			{/* {[...Array(7)].map((_, i) => ( */}
// 			<div
// 				key={i}
// 				className={cn(
// 					// "w-fit h-fit", //? this would be really cool!
// 					"grid",
// 					"p-10",
// 					"content-center justify-center",
// 					"rounded-xl border-2",
// 					"border-slate-400/10 bg-neutral-100  dark:bg-neutral-900",
// 					"row-span-1",
// 					` ${i === 3 || i === 6 ? "col-span-2" : ""}`,
// 					""
// 				)}
// 			>
// 				{data.fact}
// 			</div>
// 			{/* ))} */}
// 		</>
// 	));
// 	return (
// 		<>
// 			<div
// 				className={cn(
// 					"flex flex-col",
// 					"w-fit h-fit",
// 					"w-full h-full",
// 					"justify-center ",
// 					""
// 				)}
// 			>
// 				<h1
// 					className={cn(
// 						"text-accent-light",
// 						"text-4xl",
// 						"w-full text-left"
// 					)}
// 				>
// 					fact facts
// 				</h1>
// 				{/* grid solution */}
// 				{/* <div
// 					className={cn(
// 						"grid",
// 						"px-10",
// 						"w-full h-full",
// 						"justify-around",
// 						""
// 					)}
// 				>
// 					{facts}
// 				</div> */}
// 				<div className="grid auto-rows-[192px] grid-cols-3 gap-4">
// 					{" "}
// 					{facts}{" "}
// 				</div>

// 				{/* flex solution */}
// 				{/* <div
// 					className={cn(
// 						"flex flex-col",
// 						"px-10",
// 						"w-full h-full",
// 						"justify-around",
// 						""
// 					)}
// 				>
// 					{facts}
// 				</div> */}
// 			</div>
// 		</>
// 	);
// }

// // export default function CatFacts() {
// // 	const [data, setData] = useState<string[]>([]);
// // 	const amount: number = 5;
// // 	useEffect(() => {
// // 		(async () => {
// // 			try {
// // 				const ApiUrl: string =
// // 				const response = await fetch(ApiUrl);
// // 				const data = await response.json();
// // 				console.log(data);
// // 				setData(data);
// // 			} catch (err) {
// // 				console.error(err);
// // 			}
// // 		})();
// // 	}, []);
// // 	console.log(data.data);
// // 	const facts = data.map((data) => <li key={data}> {data} </li>);
// // 	return (
// // 		<>
// // 			<div className={cn("")}>placehodler</div>
// // 			<div>fact fact:</div>
// // 			<div> {facts}</div>
// // 		</>
// // 	);
// // }

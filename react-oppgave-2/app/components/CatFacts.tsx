"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import {
	getCachedFacts,
	fetchInitialGrids,
	fetchFactsPage,
	setCachedFacts,
} from "@/lib/API/getCatFacts";
import { PiPawPrint } from "react-icons/pi";
import GridLayout from "@/components/GridLayout";
type Facts = {
	fact: string;
	length: number;
};

type ApiResponse = {
	data: Facts[];
};
export default function CatFacts() {
	// TODO [ ]: make cat facts load in /home
	// TODO [ ]: isloading is currently not in use and should probably be removed.
	// TODO [ ]:there is still some loading friction that needs to be handled .

	//* API CALL STUFF
	const [grids, setGrids] = useState<Facts[][]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const pageRef = useRef<number>(1);
	const seenRef = useRef<Set<string>>(new Set());

	useEffect(() => {
		const controller = new AbortController();
		const init = async () => {
			try {
				setIsLoading(true);
				const cached = getCachedFacts();
				if (cached && cached.length > 0) {
					setGrids(cached);
					pageRef.current = 1;
					cached[0].forEach((f) => seenRef.current.add(f.fact));
				} else {
					const grids = await fetchInitialGrids(6);
					setGrids(grids);
					pageRef.current = 1;
					grids[0].forEach((f) => seenRef.current.add(f.fact));
				}
			} catch (err: unknown) {
				const name =
					typeof err === "object" && err !== null && "name" in err
						? (err as { name?: string }).name
						: undefined;
				if (name !== "AbortError") {
					console.error("Failed to fetch cat facts", err);
				}
			} finally {
				setIsLoading(false);
			}
		};

		init();
		return () => controller.abort();
	}, []);

	// *ALL BUTTON STUFF__________________
	const [buttonClickCounter, setButtonClickCounter] = useState<number>(0);
	const [buttonValue, setButtonValue] = useState<string>("More");
	useEffect(() => {
		// update button label based on how many times we've successfully loaded
		// a new grid. Depend only on the click counter.
		switch (buttonClickCounter) {
			case 0:
				setButtonValue("More");
				break;
			case 1:
				setButtonValue("More!");
				break;
			case 2:
				setButtonValue("MORE!");
				break;
			case 3:
				setButtonValue("I SAID MOOORE!!!");
				break;
			default:
				return disableButton();
		}
	}, [buttonClickCounter]);
	async function fetchNewFacts(limit = 6) {
		try {
			setIsLoading(true);
			// increment page and fetch that page to avoid reusing the same facts
			let attempts = 0;
			const maxAttempts = 4;
			let added = false;
			while (!added && attempts < maxAttempts) {
				pageRef.current += 1;
				attempts += 1;
				const jsonData = await fetchFactsPage(limit, pageRef.current);
				const json = { data: jsonData } as ApiResponse;
				const unique = json.data.filter(
					(f) => !seenRef.current.has(f.fact)
				);
				if (unique.length > 0) {
					unique.forEach((f) => seenRef.current.add(f.fact));
					setGrids((prev) => [...prev, unique]);
					// update module cache so other routes can reuse
					try {
						const cached = getCachedFacts() ?? [];
						setCachedFacts([...cached, unique]);
					} catch {
						// non-fatal
					}
					added = true;
				}
			}
		} catch (err) {
			console.error("Failed to fetch new facts", err);
		} finally {
			setIsLoading(false);
		}
	}

	async function buttonHandle() {
		// Wait for the new grid to be fetched and appended before updating
		// the button label/counter.
		await fetchNewFacts(6);
		setButtonClickCounter((prev) => prev + 1);
		console.log("buttonClickCounter", buttonClickCounter + 1);
	}

	return (
		<div className="gap-5 self-center">
			<h1
				className={cn(
					"text-accent-light",
					"text-4xl",
					"w-full text-left",
					"mb-4",
					""
				)}>
				Cat facts
			</h1>
			{grids.map((g, idx) => (
				<GridLayout key={idx} _facts={g} />
			))}
			<div className="flex flex-row justify-end">
				<button
					className={cn(
						"flex flex-row",
						"justify-between items-center content-between",
						"px-5",
						"text-nowrap",
						"h-10 w-80",
						"p-10",
						"py-7",
						"gap-5",
						"w-fit",
						"text-secondary",
						"border-none",
						"rounded-full",
						"bg-accent",
						"hover:bg-accent-light",
						"active:bg-accent-light/80",
						"hover:text-container-lowered",
						"text-xl",
						"mt-4",
						isLoading ? "opacity-50 cursor-not-allowed" : "",
						""
					)}
					onClick={buttonHandle}
					disabled={isLoading}>
					{buttonValue}
					<PiPawPrint className={cn("flex h-10 w-10")} />
				</button>
				{/* {isLoading && (
					<p className={cn("text-sm text-muted mt-2")}>Loading...</p>
				)} */}
			</div>
		</div>
	);
}

function disableButton(): void | (() => void) {
	throw new Error(
		"\n\n\nWHY WOULD YOU PRESS THE BUTTON MORE THEN 4 TIMES?\n ARE YOU INSANE?!\n No more cat facts for you, dog. \n\n\n"
	);
}

"use client";
import { cn } from "./lib/utils";
import { useRouter } from "next/navigation"; // added
import { useEffect } from "react";
import { fetchInitialGrids } from "@/lib/API/getCatFacts";

export default function Home() {
	const router = useRouter(); // added

	useEffect(() => {
		// Prefetch cat facts so the /pages/cat-facts route can render immediately
		fetchInitialGrids(6).catch((err) =>
			console.error("Prefetch failed:", err)
		);
	}, []);

	return (
		<main
			className={cn(
				"flex flex-col",
				"h-screen w-screen",
				"items-center",

				""
			)}>
			<div className={cn("flex flex-col py-30")}>
				<h1 className={cn("text-4xl text-(--forground) mb-2", "")}>
					React Oppgave 2
				</h1>
				<h2 className={cn("text-2xl text-secondary", "")}>
					Aleksander 102025
				</h2>
			</div>

			<div className="flex w-full justify-center gap-5">
				{/* <button>
					{" "}
					<a href="http://localhost:3000/pages/cookie-clicker"></a>
				</button> */}
				<button
					className={cn(
						"h-10 w-50",
						"text-background",
						"border-none",
						"rounded-full",
						"bg-accent-light",
						"hover:bg-accent",
						// "text-secondary",

						""
					)}
					onClick={() => router.push("/pages/cookie-clicker")}>
					Cookie Clicker
				</button>
				<button
					className={cn(
						"h-10 w-50",
						"text-background",
						"border-none",
						"rounded-full",
						"bg-accent-light",
						"hover:bg-accent",
						// "text-secondary",
						""
					)}
					onClick={() => router.push("/pages/cat-facts")}>
					Cat Facts
				</button>
				<button
					className={cn(
						"h-10 w-50",
						"text-background",
						"border-none",
						"rounded-full",
						"bg-accent-light",
						"hover:bg-accent",
						// "text-secondary",
						""
					)}
					onClick={() => router.push("/pages/users")}>
					Users
				</button>
			</div>
		</main>
	);
}

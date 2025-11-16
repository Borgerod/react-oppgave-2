"use client";
import CookieClicker from "@/components/CookieClicker";
import CallToAction from "@/components/CallToAction";
import { cn } from "./lib/utils";
import { useRouter } from "next/navigation"; // added

export default function Home() {
	const router = useRouter(); // added

	return (
		<main
			className={cn(
				"flex flex-col",
				"h-screen w-screen",
				"items-end",
				"justify-start",
				"items-center",
				"content-center",
				"py-20",
				"px-55",
				""
			)}>
			<div className={cn("flex flex-col py-30")}>
				<h1 className={cn("text-4xl text-(--forground) mb-2", "")}>
					React Oppgave 2
				</h1>
				<h2 className={cn("text-2xl text-(--secondary)", "")}>
					Aleksander 102025
				</h2>
			</div>

			<div className="flex w-full justify-around">
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
						"bg-(--accent-light)",
						"hover:bg-(--accent)",

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
						"bg-(--accent-light)",
						"hover:bg-(--accent)",
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
						"bg-(--accent-light)",
						"hover:bg-(--accent)",
						""
					)}
					onClick={() => router.push("/pages/users")}>
					Users
				</button>
			</div>
		</main>
	);
}

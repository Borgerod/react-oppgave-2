"use client";
import { cn } from "@/lib/utils";
import EmptyBowlIcon from "./EmptyBowlIcon";

export default function CallToAction() {
	return (
		<div
			className={cn(
				"absolute",
				"top-0 start-0",
				"w-screen h-screen",
				"backdrop-blur-xl",
				"flex flex-col items-center justify-center align-middle",
				"h-full w-full",

				""
			)}>
			<div
				className={cn(
					"flex max-w-3xl flex-col",
					"items-center justify-center gap-5",
					"rounded-3xl  p-10 text-center",
					"bg-gray-700/80",
					"bg-(--container)",
					"gap-10",
					"px-20",
					""
				)}>
				<div
					className={cn(
						"flex flex-col",
						"justify-center content-evenly align-middle items-center",
						"h-full w-full"
					)}>
					<h1 className={cn("text-2xl font-bold")}> Oh no!</h1>

					<EmptyBowlIcon></EmptyBowlIcon>

					<h1 className={cn("text-2xl font-bold -mt-5 z-1 ")}>
						You are all out of cookies
					</h1>
				</div>

				<div
					className={cn(
						"flex flex-col",
						"justify-center",
						"items-center",
						"gap-2.5",
						""
					)}>
					<h1
						className={cn(
							"text-4xl font-bold text-(--accent-light)"
						)}>
						Get access to unlimited cookies
					</h1>

					<div className="flex items-center content-center gap-5">
						<p className="text-right">
							Please review our plans to continue with our
							services and become a part of the family!
						</p>
						<button
							className={cn(
								"px-5",
								"h-10 w-80",
								"text-(--container)",
								"border-none",
								"rounded-full",
								"bg-(--accent-light)",
								"hover:bg-(--accent)",

								""
							)}>
							{" "}
							View our plans{" "}
						</button>
					</div>
				</div>

				<div className="flex items-center content-center gap-5">
					<p className="text-right">
						If you already have an account, <br />
						please <span className="font-bold">log in</span> to
						continue
					</p>
					<button
						className={cn(
							"px-10 py-1.5",
							"border border-(--forground) rounded-full",
							"hover:border-(--accent-light)",
							"hover:text-(--accent-light)",
							""
						)}>
						{" "}
						Log in{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

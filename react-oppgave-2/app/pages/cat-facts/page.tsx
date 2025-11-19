"use client";
import { cn } from "@lib/utils";
import CatFacts from "@/components/CatFacts";

export default function CatFactPage() {
	return (
		<main
			className={cn(
				"flex flex-col",
				"h-screen w-screen",
				"py-15",
				"px-55",

				""
			)}>
			<CatFacts />
		</main>
	);
}

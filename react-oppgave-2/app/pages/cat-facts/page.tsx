"use client";

import { cn } from "@lib/utils";
import { BentoItem } from "@/components/BentoItem";
import { BentoGrid } from "@/components/BentoGrid";

export default function CatFactPage() {
	const items = [
		"Short",
		"A bit longer content example",
		"This one is really long and tall because it contains more text. It should auto-expand the box height.",
		"Medium content",
		"Another long item for testing auto-fit behavior.",
		"Short",
		"A bit longer content example",
		"This one is really long and tall because it contains more text. It should auto-expand the box height.",
		"Medium content",
		"Another long item for testing auto-fit behavior.",
	];

	return (
		<main
			className={cn(
				"flex flex-col",
				"min-h-screen w-full",
				"items-center",
				"py-20 px-10"
			)}
		>
			<BentoGrid>
				{items.map((item, i) => (
					<BentoItem key={i}>{item}</BentoItem>
				))}
			</BentoGrid>
		</main>
	);
}

// "use client";
// import CookieClicker from "@/components/CookieClicker";
// import CallToAction from "@/components/CallToAction";
// import { useState } from "react";
// import { cn } from "@lib/utils";
// // import CatFacts from "@/components/CatFacts";
// import CatFacts from "@/components/CatFacts";
// import { BentoItem } from "@/components/BentoItem";

// export default function CatFactPage() {
// 	const items = [
// 		"Short",
// 		"A bit longer content example",
// 		"This one is really long and tall because it contains more text. It should auto-expand the box height.",
// 		"Medium content",
// 		"Another long item for testing auto-fit behavior.",
// 	];
// 	return (
// 		<main
// 			className={cn(
// 				"flex flex-col",
// 				"h-screen w-screen",
// 				"items-end",
// 				"justify-start",
// 				"py-20",
// 				"px-55",
// 				""
// 			)}
// 		>
// 			{/* <div className="masonry p-4">
// 				{items.map((content, i) => (
// 					<div
// 						key={i}
// 						className="bg-neutral-900 text-white rounded-xl p-4 break-words"
// 					>
// 						{content}
// 					</div>
// 				))}
// 			</div> */}
// 			{/* <CatFacts /> */}
// 		</main>
// 	);
// }

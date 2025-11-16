"use client";
import CookieClicker from "@/components/CookieClicker";
import CallToAction from "@/components/CallToAction";
import { useState } from "react";
import { cn } from "@lib/utils";

export default function CookieClickerPage() {
	const [callToActionVisible, setCallToActionVisible] = useState(false);

	return (
		<main
			className={cn(
				"flex flex-col",
				"h-screen w-screen",
				"items-end",
				"justify-start",
				"py-20",
				"px-55",
				""
			)}>
			<CookieClicker
				isVisible={callToActionVisible}
				setCallToActionVisible={setCallToActionVisible}
			/>
			{callToActionVisible && (
				// TODO [ ]: add bypass security
				<CallToAction />
			)}
		</main>
	);
}

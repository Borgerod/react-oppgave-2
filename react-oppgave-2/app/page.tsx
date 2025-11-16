"use client";
import CookieClicker from "@/components/CookieClicker";
import CallToAction from "@/components/CallToAction";
import { useState } from "react";

export default function Home() {
	const [callToActionVisible, setCallToActionVisible] = useState(false);

	return (
		<div className="flex min-h-screen items-center justify-center p-30 ">
			<main className="flex min-h-screen w-full flex-col items-start justify-start  ">
				<CookieClicker
					isVisible={callToActionVisible}
					setCallToActionVisible={setCallToActionVisible}
				/>

				{callToActionVisible && (
					<CallToAction visible={callToActionVisible} />
				)}
			</main>
		</div>
	);
}

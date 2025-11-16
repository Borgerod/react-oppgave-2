"use client";
import { useState } from "react";
import { MdOutlineCookie } from "react-icons/md";
import { cn } from "@/lib/utils";

// ...existing code...
type Props = {
	visible?: boolean;
	onChange?: (visible: boolean) => void;
};

export default function CallToAction({ visible, onChange }: Props) {
	const [internalVisible, setInternalVisible] = useState(true);
	const isControlled = visible !== undefined;
	const isVisible = isControlled ? visible : internalVisible;

	const setVisible = (v: boolean) => {
		if (isControlled) {
			onChange?.(v);
		} else {
			setInternalVisible(v);
		}
	};

	return (
		<div className={cn("absolute", "h-inherit w-inherit", "")}>
			<div
				className={cn(
					"flex flex-col items-center justify-center align-middle",
					"h-full w-full",
					"backdrop-blur-md",
					""
				)}
			>
				<div
					className={cn(
						"h-100",
						"flex max-w-3xl flex-col",
						"items-center justify-center gap-5",
						"rounded-3xl bg-gray-700/80 p-10 text-center"
					)}
				>
					<h1 className={cn("text-3xl font-bold")}>
						Your limit has exceeded
					</h1>
					<p className="text-base text-gray-200">
						Take a breather, review your preferences, and come back
						ready to collect more cookies.
					</p>
				</div>
			</div>
		</div>
	);
}
// ...existing code...// "use client";
// import { useState } from "react";
// import { MdOutlineCookie } from "react-icons/md";
// import { cn } from "@/lib/utils";

// export default function CallToAction() {
// 	const [isVisible, setIsVisible] = useState(true);

// 	return (
// 		<div
// 			className={cn(
// 				"flex h-screen w-screen flex-col items-center justify-center gap-8",
// 				"backdrop-blur-2xl"
// 			)}
// 		>
// 			<button
// 				type="button"
// 				onClick={() => setIsVisible((prev) => !prev)}
// 				className={cn(
// 					"flex items-center gap-2 rounded-full border border-gray-500 px-4 py-2",
// 					"text-sm font-semibold uppercase tracking-wide transition hover:bg-gray-700"
// 				)}
// 			>
// 				<MdOutlineCookie className="text-lg" />
// 				{isVisible ? "Hide" : "Show"} call to action
// 			</button>

// 			{isVisible && (
// 				<div
// 					className={cn(
// 						"flex w-full max-w-3xl flex-col items-center justify-evenly gap-5",
// 						"rounded-3xl bg-gray-700/70 p-10 text-center"
// 					)}
// 				>
// 					<h1 className={cn("text-3xl font-bold")}>
// 						Your limit has exceeded
// 					</h1>
// 					<p className="text-base text-gray-200">
// 						Take a breather, review your preferences, and come back
// 						ready to collect more cookies.
// 					</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

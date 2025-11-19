"use client";
import { cn } from "@/lib/utils";
import { TbBowl } from "react-icons/tb";
import { AiOutlineSound } from "react-icons/ai";

export default function EmptyBowlIcon() {
	return (
		<div className={cn("grid", "grid-cols-1 grid-rows-4", "")}>
			<AiOutlineSound
				className={cn(
					"w-full h-full",
					"w-20 h-20",
					"col-span-full",
					"row-start-1 row-span-3",
					"transform -rotate-90",
					""
				)}
			/>

			<div
				className={cn(
					"bg-container",
					"w-20 h-20",
					"col-span-full",
					"row-start-2 row-span-full",
					"transform -rotate-90",
					""
				)}>
				<TbBowl
					className={cn(
						"w-20 h-20",
						"ml-10",
						"ml-5",
						"transform rotate-90",
						""
					)}
				/>
			</div>
		</div>
	);
}

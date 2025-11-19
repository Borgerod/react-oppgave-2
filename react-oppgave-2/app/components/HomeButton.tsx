import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdHome } from "react-icons/md";

export default function HomeButton() {
	return (
		<Link
			href="/"
			className={cn(
				"fixed top-4 left-4 z-50 inline-flex items-center rounded-full",
				"p-2",
				"dark:text-white  hover:scale-105",
				"hover:bg-container-raised",
				""
			)}
			aria-label="Go to home">
			<MdHome className="text-3xl" />
		</Link>
	);
}

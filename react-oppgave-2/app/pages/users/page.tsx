"use client";
import CookieClicker from "@/components/CookieClicker";
import CallToAction from "@/components/CallToAction";
import { useState } from "react";
import { cn } from "@lib/utils";

export default function UserListPage() {
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
			)}></main>
	);
}

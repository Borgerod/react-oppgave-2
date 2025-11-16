"use client";
import { cn } from "@/lib/utils";
import React, { Component, useState } from "react";
import { MdOutlineCookie } from "react-icons/md";
import Button from "./Buttons/Button";
import cookiegenerator from "@/lib/cookieGenerator";
import CallToAction from "./CallToAction";
interface CookieClickerProps {
	isVisible: boolean;
	setCallToActionVisible: (value: boolean) => void;
}

export default class CookieClicker extends Component<CookieClickerProps> {
	clickLimit = 5;

	state = {
		cookies: [],
		clickCounter: 0,
	};

	handleCookieClick = () => {
		if (this.state.clickCounter >= this.clickLimit) {
			// 🔥 THIS IS CORRECT
			this.props.setCallToActionVisible(true);
		} else {
			this.setState({
				cookies: cookiegenerator(),
				clickCounter: this.state.clickCounter + 1,
			});
		}
	};

	render() {
		return (
			<div
				className={cn(
					"flex h-full w-full flex-col justify-evenly gap-10  px-35"
				)}
			>
				<h1 className={cn("text-3xl mt-5")}> COOKIE CLICKER</h1>
				<div
					className={cn(
						"flex h-full w-full flex-row justify-evenly gap-10"
					)}
				>
					<div
						className={cn(
							"flex flex-col bg-gray-700 rounded-2xl p-5",
							"w-50 h-60"
						)}
					>
						<button
							onClick={this.handleCookieClick}
							title="cookie-button"
							className={cn(
								"flex h-full w-full",
								// "w-50 h-60",
								" hover:text-[rgb(194,119,38)]",
								" text-[rgb(202,194,186)]",
								""
							)}
						>
							<MdOutlineCookie
								className={cn("flex h-full w-full")}
							/>
						</button>
						<div className={cn("flex justify-around")}>
							<p>Cookie click counter: {/* times. */}</p>
							<p className={cn("")}>{this.state.clickCounter}</p>
						</div>
					</div>
					<div
						className={cn(
							"flex flex-col min-h-30 w-full bg-gray-700 rounded-2xl p-5"
						)}
					>
						<h2> Your Cookie: </h2>
						<div
							className={cn(
								"flex  w-full bg-gray-900 rounded-2xl p-5 overflow-auto "
							)}
						>
							<pre className="whitespace-pre-wrap font-mono text-sm text-white/90">
								{JSON.stringify(this.state.cookies, null, 2)}
							</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

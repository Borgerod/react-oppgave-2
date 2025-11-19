"use client";
import { cn } from "@/lib/utils";
import { Component } from "react";
import { MdOutlineCookie } from "react-icons/md";
import cookiegenerator from "@/lib/cookieGenerator";
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
			<div className={cn("h-full", "w-full", "flex flex-col", "")}>
				<h1 className={cn("text-3xl mb-5 text-accent-light")}>
					COOKIE CLICKER
				</h1>
				<div
					className={cn(
						"flex flex-row gap-7.5",
						"justify-around",
						"flex-1",
						"min-h-0",
						"w-full",
						"items-start",
						""
					)}>
					<div
						id="button-container"
						className={cn(
							"flex flex-col bg-container rounded-2xl p-5",
							"w-50 h-60"
						)}>
						<button
							onClick={this.handleCookieClick}
							title="cookie-button"
							className={cn(
								"flex h-full w-full",
								"hover:text-accent-light",
								"text-accent-muted",
								""
							)}>
							<MdOutlineCookie
								className={cn("flex h-full w-full")}
							/>
						</button>
						{/* TODO [ ]: make button component  */}
						<div className={cn("flex justify-around")}>
							<p className={cn("")}>
								Click counter: {this.state.clickCounter}
							</p>
						</div>
					</div>
					<div
						id="result-display"
						className={cn(
							"flex flex-col",
							"bg-container",
							"p-5",
							"rounded-2xl",
							"w-full",
							"max-h-full",
							""
						)}>
						<h2 className="pb-2 shrink-0"> Cookie </h2>
						<div
							className={cn(
								"bg-(--container-deep)",
								"rounded-lg",
								"p-5",
								"w-full",
								"flex",
								"flex-col",
								"min-h-0",
								""
							)}>
							<pre
								className={cn(
									"whitespace-pre-wrap font-mono text-sm",
									"overflow-auto",
									""
								)}>
								{JSON.stringify(this.state.cookies, null, 2)}
							</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

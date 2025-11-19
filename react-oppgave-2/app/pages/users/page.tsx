"use client";
import { useState, FormEvent } from "react";
import { cn } from "@lib/utils";

interface User {
	username: string;
	email: string;
}
export default function UserListPage() {
	const [users, setUsers] = useState<User[]>([
		{ username: "Ola Normann", email: "ola.normann@norge.no" },
		{ username: "Torleif", email: "torleif@kodehode.no" },
		{ username: "Jan Egil", email: "jan.egil@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
		{ username: "Sander", email: "sander@kodehode.no" },
	]);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");

	const registerUser = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!username.trim() || !email.trim()) return;
		if (email !== confirmEmail) return;

		setUsers((prev) => [
			...prev,
			{ username: username.trim(), email: email.trim() },
		]);
		(e.currentTarget as HTMLFormElement).reset();
		setUsername("");
		setEmail("");
		setConfirmEmail("");
	};

	const emailsMismatch = !!confirmEmail && email !== confirmEmail;
	const canSubmit = !!username.trim() && !!email.trim() && !emailsMismatch;

	return (
		<main
			className={cn(
				"flex flex-col",
				"h-screen w-full",
				"box-border",
				"justify-start",
				"py-20",
				"px-50",
				""
			)}>
			<h1
				className={cn(
					"text-accent-light",
					"text-4xl",
					"w-full text-left",
					"mb-4",
					""
				)}>
				Users
			</h1>
			<div className="flex flex-row gap-4 rounded-xl  flex-1 min-h-0 self-center  box-border overflow-hidden">
				<div className="@Container">
					<form
						onSubmit={registerUser}
						title="Add a user"
						className={cn(
							"@Container flex flex-col rounded-xl py-0  gap-2",
							// "bg-container",
							""
						)}>
						<h3
							className={cn(
								"text-foreground",
								"text-xl",
								"w-full text-left",
								"mb-4",
								""
							)}>
							Add new user
						</h3>

						<input
							title="Enter username"
							required
							placeholder="Name"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className={cn(
								"flex w-full flex-col rounded-xl p-2",
								"bg-container-lowered/30",
								""
							)}
							autoComplete="name"
						/>

						<div className="flex flex-row gap-2">
							<input
								title="Enter email address"
								required
								placeholder="Email"
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={cn(
									"flex w-full flex-col rounded-xl p-2",
									"bg-container-lowered/30",
									""
								)}
								autoComplete="email"
							/>

							<input
								title="Confirm the email address"
								required
								placeholder="Confirm email"
								name="email_confirmation"
								type="email"
								value={confirmEmail}
								onChange={(e) =>
									setConfirmEmail(e.target.value)
								}
								className={cn(
									"flex w-full flex-col rounded-xl p-2",
									"bg-container-lowered/30",
									""
								)}
								aria-invalid={emailsMismatch}
								autoComplete="email"
							/>
						</div>

						{emailsMismatch && (
							<div className="text-sm text-red-500">
								Emails don&apos;t match
							</div>
						)}

						<button
							className={cn(
								"self-center",
								"self-end",
								"flex flex-row",
								"justify-between items-center content-between",
								"text-nowrap",
								"py-2 px-15",
								"gap-5",
								"w-fit",
								"h-fit",
								"text-foreground",
								"border border-inherit",
								"rounded-full",
								"bg-transparent",
								"hover:bg-accent-light",
								"hover:text-container-lowered",
								"hover:border-accent-light",
								"active:bg-accent-light/80",
								"text-xl",
								"mt-4",
								""
							)}
							type="submit"
							disabled={!canSubmit}>
							Register
						</button>
					</form>
				</div>
				<div className="flex flex-col flex-1 min-h-0 bg-container/30 p-10 rounded-2xl box-border overflow-hidden w-fit h-fit">
					<div className=" flex-1 overflow-auto flex flex-row flex-wrap gap-4 pr-5 items-start align-start content-start max-h-130 w-fit">
						{users.map((user, index) => (
							<div
								key={index}
								className="flex flex-col bg-container-raised rounded-xl p-5 h-20 w-85">
								<div>User: {user.username}</div>
								<div>Email: {user.email}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export function BentoItem({ children }: { children: React.ReactNode }) {
	return (
		<div className="break-inside-avoid mb-4 bg-neutral-900 text-white rounded-xl p-4 w-fit h-fit">
			{children}
		</div>
	);
}

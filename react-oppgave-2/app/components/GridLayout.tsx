import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const ROTATIONS = [0, 90, 180, 270];

type Item = {
	id: number;
	content: React.ReactNode;
	colStart: number;
	colSpan: number;
	rowStart: number;
	rowSpan: number;
};
type Facts = {
	fact: string;
	length: number;
};

type GridLayoutProps = { _facts?: Facts[] };

const GridLayout: React.FC<GridLayoutProps> = ({ _facts = [] }) => {
	const facts = (_facts ?? []).map((f) => f.fact);

	console.log(facts);

	const [rotation, setRotation] = useState<number>(0);

	const [layoutIndex, setLayoutIndex] = useState<number>(0);

	useEffect(() => {
		const randL = Math.floor(Math.random() * 2); // choose layout_a (0) or layout_b (1)
		const id1 = setTimeout(() => setLayoutIndex(randL), 0);

		const randR = ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)];
		const id2 = setTimeout(() => setRotation(randR), 50);

		return () => {
			clearTimeout(id1);
			clearTimeout(id2);
		};
	}, [setLayoutIndex, setRotation]);

	const COLS = 3;

	const baseBoxClasses = cn(
		"w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 text-center flex items-center justify-center"
	);

	const itemsA: Item[] = [
		{
			id: 1,
			content: "placeholder",
			colStart: 1,
			colSpan: 2,
			rowStart: 1,
			rowSpan: 1,
		},
		{
			id: 2,
			content: "placeholder",
			colStart: 3,
			colSpan: 1,
			rowStart: 1,
			rowSpan: 1,
		},
		{
			id: 3,
			content: "placeholder",
			colStart: 3,
			colSpan: 1,
			rowStart: 2,
			rowSpan: 2,
		},
		{
			id: 4,
			content: "placeholder",
			colStart: 2,
			colSpan: 1,
			rowStart: 2,
			rowSpan: 1,
		},
		{
			id: 5,
			content: "placeholder",
			colStart: 1,
			colSpan: 1,
			rowStart: 2,
			rowSpan: 1,
		},
		{
			id: 6,
			content: "placeholder",
			colStart: 1,
			colSpan: 2,
			rowStart: 3,
			rowSpan: 1,
		},
	];

	const itemsB: Item[] = [
		{
			id: 1,
			content: "placeholder",
			colStart: 1,
			colSpan: 1,
			rowStart: 1,
			rowSpan: 1,
		},
		{
			id: 2,
			content: "placeholder",
			colStart: 2,
			colSpan: 2,
			rowStart: 1,
			rowSpan: 1,
		},
		{
			id: 3,
			content: "placeholder",
			colStart: 1,
			colSpan: 2,
			rowStart: 2,
			rowSpan: 2,
		},
		{
			id: 4,
			content: "placeholder",
			colStart: 3,
			colSpan: 1,
			rowStart: 2,
			rowSpan: 1,
		},
		{
			id: 5,
			content: "placeholder",
			colStart: 3,
			colSpan: 1,
			rowStart: 3,
			rowSpan: 1,
		},
	];

	// const factsArray = (facts ?? []).slice();

	const allIds = Array.from(
		new Set([...itemsA.map((i) => i.id), ...itemsB.map((i) => i.id)])
	);
	const areaById = new Map<number, number>();
	for (const id of allIds) {
		const a = itemsA.find((x) => x.id === id);
		const b = itemsB.find((x) => x.id === id);
		const areaA = a ? a.colSpan * a.rowSpan : 0;
		const areaB = b ? b.colSpan * b.rowSpan : 0;
		areaById.set(id, Math.max(areaA, areaB));
	}
	const idsBySize = allIds.sort(
		(x, y) => (areaById.get(y) ?? 0) - (areaById.get(x) ?? 0) || x - y
	);

	const sortedFacts = _facts
		.slice()
		.sort((a, b) => b.length - a.length)
		.map((f) => f.fact);
	const contentById = new Map<number, React.ReactNode>();
	for (let i = 0; i < idsBySize.length; i++) {
		const id = idsBySize[i];
		contentById.set(id, sortedFacts[i] ?? "placeholder");
	}

	const items = (layoutIndex === 0 ? itemsA : itemsB).map((it) => ({
		...it,
		content: contentById.get(it.id) ?? "placeholder",
	}));

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const id = setTimeout(() => setMounted(true), 0);
		return () => clearTimeout(id);
	}, []);

	const ROWS = Math.max(
		...items.map((it) => it.rowStart + it.rowSpan - 1),
		1
	);

	const transform = (it: Item) => {
		const r = it.rowStart;
		const rs = it.rowSpan;
		const c = it.colStart;
		const cs = it.colSpan;

		let newR = r;
		let newC = c;
		let newRS = rs;
		let newCS = cs;

		if (rotation === 0) {
			// no-op
		} else if (rotation === 180) {
			// flip rows and cols around center
			newR = ROWS - (r + rs - 1) + 1;
			newC = COLS - (c + cs - 1) + 1;
			newRS = rs;
			newCS = cs;
		} else if (rotation === 90) {
			// 90° CCW: (r,c) -> (r' = COLS - (c+cs-1) +1, c' = r)
			newR = COLS - (c + cs - 1) + 1;
			newC = r;
			newRS = cs; // old col span becomes new row span
			newCS = rs; // old row span becomes new col span
		} else if (rotation === 270) {
			// 270° CCW (i.e. 90° CW): (r,c) -> (r' = c, c' = ROWS - (r+rs-1) +1)
			newR = c;
			newC = ROWS - (r + rs - 1) + 1;
			newRS = cs;
			newCS = rs;
		}

		return {
			gridColumn: `${newC} / span ${newCS}`,
			gridRow: `${newR} / span ${newRS}`,
		} as React.CSSProperties;
	};

	if (!mounted || _facts.length === 0) return null;

	return (
		<div
			id="grid-1"
			className={cn(
				"mt-4 max-w-2xl max-h-2xl min-w-xl min-h-xl flex self-center"
			)}>
			<div
				className={`grid gap-4`}
				style={{
					gridTemplateColumns: `repeat(${COLS}, 1fr)`,
					gridTemplateRows: `repeat(${ROWS}, 1fr)`,
					aspectRatio: `${COLS} / ${ROWS}`,
				}}>
				{items.map((it) => (
					<div
						key={it.id}
						className={baseBoxClasses}
						style={transform(it)}>
						{it.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default GridLayout;

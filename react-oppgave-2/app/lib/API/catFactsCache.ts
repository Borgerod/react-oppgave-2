type Facts = {
	fact: string;
	length: number;
};

// Simple in-memory module-level cache. Lives for the lifetime of the page
// (reloads will clear it). This is sufficient for preloading between routes
// during a single SPA session.
let cachedGrids: Facts[][] | null = null;

export function getCachedFacts(): Facts[][] | null {
	return cachedGrids;
}

export function setCachedFacts(data: Facts[][]) {
	cachedGrids = data;
}

export async function fetchFactsPage(limit = 6, page = 1): Promise<Facts[]> {
	const res = await fetch(
		`https://catfact.ninja/facts?limit=${limit}&page=${page}`
	);
	if (!res.ok) throw new Error(`Failed to fetch cat facts: ${res.status}`);
	const json = await res.json();
	return json.data as Facts[];
}

export async function fetchInitialGrids(limit = 6): Promise<Facts[][]> {
	const firstPage = await fetchFactsPage(limit, 1);
	const grids = [firstPage];
	setCachedFacts(grids);
	return grids;
}

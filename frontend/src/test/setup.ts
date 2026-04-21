import '@testing-library/jest-dom/vitest';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: (query: string) => ({
		matches: query.includes('dark'),
		media: query,
		onchange: null,
		addListener: () => undefined,
		removeListener: () => undefined,
		addEventListener: () => undefined,
		removeEventListener: () => undefined,
		dispatchEvent: () => false,
	}),
});
Object.defineProperty(window, 'localStorage', {
	value: {
		getItem: () => null,
		setItem: () => null,
		removeItem: () => null,
		clear: () => null,
	},
});

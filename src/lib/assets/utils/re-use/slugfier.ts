export function slugfier(x: string) {
	return x.toLowerCase().replaceAll(' ', '-');
}

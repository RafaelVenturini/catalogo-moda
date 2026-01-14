export function fixImage(img: string) {
	return img.replace('[', '').replace(']', '').split(',');
}

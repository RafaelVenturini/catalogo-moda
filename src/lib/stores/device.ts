import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createDeviceStore() {
	const { subscribe, set } = writable(false);

	if (browser) {
		const updateDevice = () => {
			set(window.innerWidth < 768);
		};

		updateDevice();
		window.addEventListener('resize', updateDevice);
	}

	return { subscribe };
}

export const isMobile = createDeviceStore();

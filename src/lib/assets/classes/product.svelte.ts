import type { Product } from '@interfaces/products';
import { getContext, setContext } from 'svelte';

export class ProductState {
	product = $state<Product | null>(null);
	actualPrint = $state<number>(0);
	actualPic = $state<number>(0);
	actualSize = $state<number>(0);

	constructor() {}

	async setProduct(searchProduct: string, searchPrint?: string | null) {
		try {
			const res = await fetch(`/api/produtos/produto/${searchProduct}`);

			this.product = await res.json();
			this.actualPrint = searchPrint ? Number(searchPrint) : 0;
			this.actualPic = 0;

			console.log('Product: ', this.product);
		} catch (err) {
			console.error(err);
		}
	}

	setActualPrint(print: number) {
		this.actualPrint = print;
		this.setActualSize(this.getFirstSizeAvailable());
		this.resetPic();
	}

	getSize() {
		return this.product?.estampas[this.actualPrint].tamanhos;
	}

	setActualSize(n: number) {
		this.actualSize = n;
	}

	getPics() {
		const pics = this.product?.estampas[this.actualPrint].img;
		return pics || [];
	}

	getTags() {
		const tags = this.product?.estampas[this.actualPrint].tags;
		if (!tags) return [];
		else {
			let tagList = '';

			for (const key in tags) {
				tagList += tags[key as keyof typeof tags].join(', ') + ', ';
			}

			return tagList.split(', ').filter(Boolean);
		}
	}

	getFirstSizeAvailable() {
		const sizes = this.getSize();
		if (!sizes) return -1;
		if (sizes.pp) return 0;
		if (sizes.p) return 1;
		if (sizes.m) return 2;
		if (sizes.g) return 3;
		if (sizes.gg) return 4;
		return -1;
	}

	resetPic() {
		this.actualPic = 0;
	}
}

const PRODUCT_KEY = Symbol('PRODUCT_CTX');

export function provideProductContext() {
	const state = new ProductState();
	setContext(PRODUCT_KEY, state);
	return state;
}

export function useProductState() {
	return getContext<ProductState>(PRODUCT_KEY);
}

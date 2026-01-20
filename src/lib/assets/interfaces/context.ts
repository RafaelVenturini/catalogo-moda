import type { Product, Size } from '@interfaces/products';

export interface ProductContext {
	product: Product | null;
	actualPrint: number;
	actualPic: number;
	sizes: Size;
}

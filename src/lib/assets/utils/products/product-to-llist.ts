import type { Product } from '@interfaces/products';
import type { ListProduct, Size } from '@interfaces/list';

export function productToList(prod: Product, idx: number, sizes: Size): ListProduct {
	const print = prod.estampas[idx];

	return {
		id: print.tiny_id,
		name: prod.nome,
		color: print.nome,
		img: print.img[0],
		price: prod.preco,
		qnty: sizes
	};
}

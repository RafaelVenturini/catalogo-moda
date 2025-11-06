import type { Print, Product } from '@interfaces/products';
import type { SelectResponse } from '@interfaces/sql';

export function arrangeCatalog(catalog: SelectResponse[]) {
	const productsArranged: Product[] = [];

	for (const item of catalog) {
		const print: Print = {
			sku: item.sku,
			nome: item.estampa,
			tamanhos: {
				pp: item.pp,
				p: item.p,
				m: item.m,
				g: item.g,
				gg: item.gg
			},
			novidade: item.novidade,
			highlight: item.highlight,
			img: []
		};
		const idx = productsArranged.findIndex((x) => x.slug === item.slug);
		if (idx > -1) {
			productsArranged[idx].estampas.push(print);
		} else {
			const newProduct = {
				slug: item.slug,
				nome: item.produto,
				tecido: item.tecido,
				preco: Number(item.preco),
				categoria: item.categoria,
				ref: item.ref,
				estampas: [print]
			};
			productsArranged.push(newProduct);
		}
	}
	return productsArranged;
}

import type { Print, Product } from '@interfaces/products';

interface SelectResponse {
	highlight: boolean;
	reposicao: boolean;
	categoria: string;
	novidade: boolean;
	tiny_id: number;
	produto: string;
	estampa: string;
	est_id: string;
	tecido: string;
	preco: number;
	slug: string;
	sku: string;
	ref: number;
	pp: boolean;
	gg: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
}

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

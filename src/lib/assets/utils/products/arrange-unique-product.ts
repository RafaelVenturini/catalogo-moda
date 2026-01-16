import type { SelectOneItem } from '@interfaces/sql';
import type { Print, Product, Size } from '@interfaces/products';
import { fixImage } from '@utils/image/fixImage';

export function arrangeUniqueProduct(product: SelectOneItem[]): Product {
	const print: Print[] = product.map((x) => {
		const size: Size = {
			pp: x.pp,
			p: x.p,
			m: x.m,
			g: x.g,
			gg: x.gg
		};

		const tags = {
			estampa: x.tg_est?.split(','),
			modelo: x.tg_pro?.split(','),
			tecido: x.tg_tec?.split(','),
			final: x.tg_cat?.split(',')
		};

		return {
			sku: x.sku,
			tiny_id: x.tiny_id,
			nome: x.estampa,
			tamanhos: size,
			novidade: x.novidade,
			reposicao: x.reposicao,
			highlight: x.highlight,
			img: fixImage(x.img),
			tecido: x.tecido,
			composicao: x.composicao,
			cuidados: x.cuidados,
			referencia: x.referencia,
			tags
		};
	});

	return {
		nome: product[0].produto,
		tecido: product[0].tecido,
		preco: product[0].preco,
		categoria: product[0].categoria,
		ref: product[0].ref,
		estampas: print,
		slug: product[0].slug
	};
}

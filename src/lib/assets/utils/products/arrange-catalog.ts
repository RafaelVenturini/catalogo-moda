import type { ProductList } from '@interfaces/products';
import type { SelectAllItems } from '@interfaces/sql';
import { fixImage } from '@utils/image/fixImage';

export function arrangeCatalog(catalog: SelectAllItems[]): ProductList[] {
	return catalog.map((x) => {
		return {
			sku: x.sku,
			slug: x.slug,
			extra: {
				highlight: x.highlight,
				reposicao: x.reposicao,
				novidade: x.novidade
			},
			produto: x.produto,
			estampa: x.estampa,
			preco: x.preco,
			ref: x.ref,
			img: fixImage(x.img)[0],
			tags: `${x.tg_pro} | ${x.tg_cat} | ${x.tg_est} | ${x.tg_tec}`
		};
	});
}

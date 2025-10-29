import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '@database/database';
import type { Print, Product } from '@interfaces/products';

interface SelectResponse {
	sku: string;
	tiny_id: number;
	est_id: string;
	highlight: boolean;
	pp: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
	gg: boolean;
	reposicao: boolean;
	novidade: boolean;
	produto: string;
	estampa: string;
	tecido: string;
	preco: number;
	ref: number;
}

export const GET: RequestHandler = async () => {
	try {
		const productsArranged: Product[] = [];
		const [catalog] = await pool.execute(`
			SELECT cata.sku,
			       tiny_id,
			       e.est_id,
			       highlight,
			       pp, p, m, g, gg,
			       reposicao,
			       novidade,
			       prod.nome as produto,
			       e.nome as estampa,
			       t.nome as tecido,
			       prod.preco,
			       ref
			FROM catalogo cata
			LEFT JOIN produto prod on cata.sku = prod.sku
			LEFT JOIN estampa e on cata.est_id = e.est_id
			LEFT JOIN tecido t on t.tec_id = e.tec_id
		`);

		for (const item of catalog as SelectResponse[]) {
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
			const idx = productsArranged.findIndex((x) => x.ref === item.ref);

			if (idx > 0) {
				productsArranged[idx].estampas.push(print);
			} else {
				const newProduct = {
					produto: item.produto,
					tecido: item.tecido,
					preco: item.preco,
					categoria: '',
					ref: item.ref,
					estampas: [print]
				};

				productsArranged.push(newProduct);
			}
		}

		return new Response(JSON.stringify(productsArranged), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify(e), {
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

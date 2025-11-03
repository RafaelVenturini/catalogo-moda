import type { RequestHandler } from '@sveltejs/kit';
import { sql } from '@lib/assets/utils/products/sql-get-products';
import { pool } from '@database/database';
import {
	arrangeCatalog
} from '@lib/assets/utils/products/arrange-catalog';

export const GET: RequestHandler = async ({ params }) => {
	let sqlBase = sql;
	const sqlParam = [];
	try {
		const tipo = params.tipo;
		const subt = params.subtipo;

		if (subt) {
			if (tipo === 'categoria') {
				sqlBase += ` WHERE cat.nome LIKE '${subt}%'`;
			} else {
				sqlBase += ` WHERE c.slug = ?`;
				sqlParam.push(subt);
			}
		}

		const [catalog] = await pool.execute(sqlBase, sqlParam);

		// @ts-expect-error catalog == SelectResponse
		const productsArranged = arrangeCatalog(catalog);

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

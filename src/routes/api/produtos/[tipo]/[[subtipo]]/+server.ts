import type { RequestHandler } from '@sveltejs/kit';
import { sql } from '@utils/products/sql-get-products';
import { pool } from '@lib/database/database';
import { arrangeCatalog } from '@utils/products/arrange-catalog';
import type { SelectResponse } from '@interfaces/sql';

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

		const [catalog] = await pool.execute<SelectResponse[]>(sqlBase, sqlParam);

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

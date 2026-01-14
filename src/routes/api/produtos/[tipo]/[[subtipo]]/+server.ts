import { pool } from '@db/database';
import type { RequestHandler } from '@sveltejs/kit';
import { allItensSql, especificItemSql } from '@utils/products/sql-get-products';
import { arrangeCatalog } from '@utils/products/arrange-catalog';
import { arrangeUniqueProduct } from '@utils/products/arrange-unique-product';
import type { SelectAllItems, SelectOneItem } from '@interfaces/sql';

export const GET: RequestHandler = async ({ params }) => {
	let sql = allItensSql;
	const sqlParam = [];
	const tipo = params.tipo;
	const subt = params.subtipo;
	let resp;
	let data: SelectAllItems[] | SelectOneItem[];

	console.log(tipo, subt);

	try {
		switch (tipo) {
			case 'categoria':
				sql += ` AND cat.nome LIKE '${subt}%'`;
				[data] = await pool.query<SelectAllItems[]>(sql);
				resp = arrangeCatalog(data);
				return new Response(JSON.stringify(resp), { status: 200 });

			case 'tag': {
				[data] = await pool.query<SelectAllItems[]>(sql);
				resp = arrangeCatalog(data);
				const onlyTagged = resp.filter((x) => x.tags.includes(subt || ''));
				return new Response(JSON.stringify(onlyTagged), { status: 200 });
			}

			case 'produto':
				sql = especificItemSql;
				sqlParam.push(subt);
				[data] = await pool.query<SelectOneItem[]>(sql, sqlParam);
				console.log('API content: ', data);
				resp = arrangeUniqueProduct(data);
				return new Response(JSON.stringify(resp), { status: 200 });

			default:
				[data] = await pool.query<SelectAllItems[]>(sql);
				resp = arrangeCatalog(data);
				return new Response(JSON.stringify(resp), { status: 200 });
		}
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify(e), { status: 500 });
	}
};

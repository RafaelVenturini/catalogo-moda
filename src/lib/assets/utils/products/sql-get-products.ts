export const especificItemSql = `
	SELECT
		CONCAT(c.sku,'-',e.est_id) as sku,
		c.slug,
		tiny_id,
		e.est_id,
		highlight,
		pp, p, m, g, gg,
		reposicao,
		novidade,
		cat.nome as categoria,
		pr.nome as produto,
		e.nome as estampa,
		t.nome as tecido,
		t.composicao,
		e.obs,
		pr.preco,
		ref,
		img
	FROM catalogo c
				 LEFT JOIN produto pr on c.sku = pr.sku
				 LEFT JOIN estampa e on c.est_id = e.est_id
				 LEFT JOIN tecido t on t.tec_id = e.tec_id
				 LEFT JOIN categoria cat on cat.cat_id = pr.cat_id
	WHERE c.slug = ?
`;

export const allItensSql = `
	SELECT
		CONCAT(c.sku,'-',e.est_id) as sku,
		c.slug,
		highlight,
		reposicao,
		novidade,
		pr.nome as produto,
		e.nome as estampa,
		pr.preco,
		ref,
		img,
		(
			SELECT GROUP_CONCAT(tag.label)
			FROM pro_tag pt
						 JOIN tag on pt.tag_id = tag.tag_id
			WHERE pt.sku = pr.sku
		) tg_pro,
		(
			SELECT GROUP_CONCAT(tag.label)
			FROM cat_tag ct
						 JOIN tag on ct.tag_id = tag.tag_id
			WHERE ct.cat_id = cat.cat_id
		) tg_cat,
		(
			SELECT GROUP_CONCAT(tag.label)
			FROM est_tag et
						 JOIN tag on et.tag_id = tag.tag_id
			WHERE et.est_id = e.est_id
		) tg_est,
		(
			SELECT GROUP_CONCAT(tag.label)
			FROM tec_tag tt
						 JOIN tag on tt.tag_id = tag.tag_id
			WHERE tt.tec_id = tec.tec_id
		) tg_tec

	FROM catalogo c
				 LEFT JOIN produto pr on c.sku = pr.sku
				 LEFT JOIN estampa e on c.est_id = e.est_id
				 LEFT JOIN categoria cat on cat.cat_id = pr.cat_id
				 LEFT JOIN tecido tec on tec.tec_id = e.tec_id
	WHERE (c.pp = TRUE
		OR c.p = TRUE
		OR c.m = TRUE
		OR c.g = TRUE
		OR c.gg = TRUE)
`;

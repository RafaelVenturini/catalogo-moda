export const sql = `
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
        pr.preco,
        ref
    FROM catalogo c
             LEFT JOIN produto pr on c.sku = pr.sku
             LEFT JOIN estampa e on c.est_id = e.est_id
             LEFT JOIN tecido t on t.tec_id = e.tec_id
             LEFT JOIN categoria cat on cat.cat_id = pr.cat_id
		`;

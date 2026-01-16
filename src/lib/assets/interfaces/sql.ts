import type { RowDataPacket } from 'mysql2';

export interface SelectOneItem extends RowDataPacket {
	composicao: string;
	referencia: string;
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
	obs: string;
	img: string;
	pp: boolean;
	gg: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
}

export interface SelectAllItems extends RowDataPacket {
	highlight: boolean;
	reposicao: boolean;
	novidade: boolean;
	produto: string;
	estampa: string;
	tg_pro: string;
	tg_cat: string;
	tg_est: string;
	tg_tec: string;
	preco: number;
	slug: string;
	sku: string;
	ref: number;
	img: string;
}

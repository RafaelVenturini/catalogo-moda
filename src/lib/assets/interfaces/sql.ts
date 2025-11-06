import type { RowDataPacket } from 'mysql2';

export interface SelectResponse extends RowDataPacket {
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

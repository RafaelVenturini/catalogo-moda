export interface Product {
	nome: string;
	tecido: string;
	preco: number;
	categoria: string;
	ref: number;
	estampas: Print[];
	slug: string;
}

export interface Print {
	sku: string;
	tiny_id: number;
	nome: string;
	tamanhos: Size;
	novidade: boolean;
	highlight: boolean;
	img: string[];
}

export interface Size {
	pp: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
	gg: boolean;
}

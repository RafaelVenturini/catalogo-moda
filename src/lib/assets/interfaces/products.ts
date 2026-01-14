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
	reposicao: boolean;
	highlight: boolean;
	img: string[];
	tecido: string;
	composicao: string;
	cuidados: string;
	tags: TagsUnique;
}

export interface Size {
	pp: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
	gg: boolean;
}

export interface ProductList {
	sku: string;
	slug: string;
	extra: Extra;
	produto: string;
	estampa: string;
	preco: number;
	ref: number;
	img: string;
	tags: string;
}

export interface Extra {
	highlight: boolean;
	reposicao: boolean;
	novidade: boolean;
}

export interface TagsUnique {
	modelo: string[];
	final: string[];
	estampa: string[];
	tecido: string[];
}

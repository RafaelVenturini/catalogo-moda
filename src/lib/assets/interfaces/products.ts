export interface Product {
	produto: string;
	tecido: string;
	preco: number;
	categoria: string;
	ref: number;
	estampas: Print[];
}

export interface Size {
	pp: boolean;
	p: boolean;
	m: boolean;
	g: boolean;
	gg: boolean;
}

export interface Print {
	sku: string;
	nome: string;
	tamanhos: Size;
	novidade: boolean;
	highlight: boolean;
	img: string[];
}

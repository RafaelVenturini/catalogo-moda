export interface ListProduct {
	id: number;
	name: string;
	color: string;
	img: string;
	price: number;
	qnty: Size;
}

export interface Size {
	pp: number;
	p: number;
	m: number;
	g: number;
	gg: number;
}

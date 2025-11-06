import type { ListProduct } from '@interfaces/list';

export class List {
	constructor(
		public listProduct: ListProduct[],
		public totalPrice: number,
		public totalQnty: number
	) {}

	getFromLocal() {
		const localList = localStorage.getItem('list');
		if (localList) {
			const list = JSON.parse(localList);
			this.listProduct = list.listProduct;
			this.totalPrice = list.totalPrice;
			this.totalQnty = list.totalQnty;
		}
	}

	setToLocal() {
		localStorage.setItem('list', JSON.stringify(this));
	}

	calculate() {
		let price = 0;
		let qnty = 0;
		this.listProduct.forEach((product) => {
			price += product.price * product.qnty;
			qnty += product.qnty;
		});
		this.totalPrice = price;
		this.totalQnty = qnty;
		return { price, qnty };
	}

	calcAndSave() {
		this.calculate();
		this.setToLocal();
	}

	addProductToList(product: ListProduct, idx: number) {
		this.listProduct.push(product);
		this.calcAndSave();
	}

	removeProductFromList(product: ListProduct) {
		this.listProduct = this.listProduct.filter((item) => item.id !== product.id);
		this.calcAndSave();
	}

	changeQnty(id: number, qnty: number) {
		const product = this.listProduct.find((item) => item.id === id);
		if (product) {
			product.qnty += qnty;
			this.calcAndSave();
		}
	}

	showList() {
		return this;
	}
}

export const list = new List([], 0, 0);

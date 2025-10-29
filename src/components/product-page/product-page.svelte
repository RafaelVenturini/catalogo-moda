<script>
	import ProductImages
		from './product-section/images/product-images.svelte';
	import ProductSizes
		from './product-section/variations/product-sizes.svelte';
	import ChangeQnty from './product-section/variations/change-qnty.svelte';

	let price = (Math.random() * 2000).toLocaleString('pt-BR', {
		style: 'currency',
		currency:
			'BRL'
	});
	let ref = Math.floor(Math.random() * 5000);
</script>


<section>
	<div class="product-card">
		<ProductImages />
		<div class="product-info">
			<h1>Vestido Fulanete Amarelo Girassol</h1>
			<ProductSizes />
			<div class="product-price-and-reference">
				<h2>{price}</h2>
				<h2>Ref.: {ref}</h2>
			</div>
		</div>
		<ChangeQnty />
		<button>Adicionar ao Carrinho</button>
	</div>
</section>


<style>
    .product-card {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        border-radius: 1rem;
        box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
        gap: 1rem;
        align-items: center;
    }

    .product-info {
        width: 100%;
    }

    .product-price-and-reference {
        display: flex;
        justify-content: space-between;
    }

    button {
        background-color: var(--brand-orange);
        width: 70%;
        border-radius: 1rem;
    }
</style>

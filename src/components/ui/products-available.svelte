<script lang="ts">
	import ProductButton from './product-button.svelte';
	import type { Product } from '@interfaces/products';

	let products: Product[] = [];

	fetch('http://localhost:5173/api/produtos')
		.then(r => r.json())
		.then(r => products = r);


</script>

<section class="products-available">
	<div class="product-wrapper">
		{#each products as product}
			{#each product.estampas as estampa, i (estampa)}
				<ProductButton product={product} i={i} estampa={estampa} />
			{/each}
		{/each}
	</div>
</section>

<style>
    .product-wrapper {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
</style>
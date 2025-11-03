<script lang="ts">
	import ProductButton from './product-button.svelte';
	import type { Product } from '@interfaces/products';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let params = $derived($page.params);
	const categoria = params.categoria;
	let products: Product[] = $state([]);

	onMount(() => {
		let link = '';
		if (categoria) {
			link = `/api/produtos/categoria/${categoria}`;

		} else {
			link = '/api/produtos/produto';
		}

		console.log(link);
		fetch(link)
			.then(r => r.json())
			.then(r => products = r);
	});


</script>

<section class="products-available">
	<div class="product-wrapper">
		{#each products as product (product.slug)}
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
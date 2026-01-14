<script lang="ts">
	import ProductButton from './product-button.svelte';
	import type { Product } from '@interfaces/products';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let params = $derived($page.params);
	const categoria = $derived(params.categoria);
	const tag = $derived(params.tag);
	let products: Product[] = $state([]);

	onMount(() => {
		let link = '/api/produtos/';
		if (categoria) {
			link += `categorias/${categoria}`;
		} else {
			link += 'todos';
		}

		fetch(link)
			.then(r => r.json())
			.then(r => products = r);
	});
</script>

<section class="products-available">
	<div class="product-wrapper">
		{#each products as product, idx (product.slug + idx)}
			<ProductButton product={product} />
		{/each}
	</div>
</section>

<style>
    .product-wrapper {
        display: flex;
        gap: 1rem 0;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
</style>
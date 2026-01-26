<script lang="ts">
	import ProductButton from './product-button.svelte';
	import type { Product } from '@interfaces/products';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import CardSkeleton from './skeletons/card-skeleton.svelte';
	import { createNItensArr } from '@lib/assets/utils/re-use/create-n-itens-arr';

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
			.then((r) => r.json())
			.then((r) => (products = r));
	});
</script>

<section class="products-available">
	<div class="product-wrapper">
		{#if products.length > 0}
			{#each products as product, idx (product.slug + idx)}
				<ProductButton {product} />
			{/each}
		{:else}
			{#each createNItensArr(8) as _}
				<CardSkeleton />
			{/each}
		{/if}
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

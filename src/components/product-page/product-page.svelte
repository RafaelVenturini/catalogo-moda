<script lang="ts">
	import ProductImages from '@components/product-page/product-section/images/product-images.svelte';
	import ChangeQnty from '@components/product-page/product-section/variations/change-qnty.svelte';
	import { FF_list } from '@utils/flags/front-features';
	import ProductInfo from './product-section/variations/product-info.svelte';
	import OtherPrints from './product-section/images/other-prints.svelte';
	import ProductSpecs from './product-section/data/product-specs.svelte';
	import Divider from '@components/ui/divider.svelte';
	import ProductSizes from './product-section/variations/product-sizes.svelte';
	import ProductTags from './product-section/data/product-tags.svelte';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const product = $derived(productCtx.product);
</script>

<section class="product-wrapper">
	<ProductImages />
	<div class="product-data side-margin">
		<ProductInfo />
		<OtherPrints />
		<ProductSizes />
		{#if product}
			<Divider />
		{/if}
		<ProductSpecs />
		{#if product}
			<Divider />
		{/if}
		{#if FF_list}
			<ChangeQnty />
			<button> Adicionar ao Carrinho </button>
			<Divider />
		{/if}
		<ProductTags />
	</div>
</section>

<style>
	.product-data {
		display: flex;
		flex-direction: column;
		max-width: 100vw;
		width: 90%;
	}

	button {
		background-color: var(--brand-orange);
		width: 70%;
		border-radius: 1rem;
	}

	@media (min-width: 800px) {
		.product-wrapper {
			display: flex;
			flex-direction: row;
			max-height: 95vh;
			height: 95vh;
		}

		.product-data {
			max-width: 60vw;
		}
	}
</style>

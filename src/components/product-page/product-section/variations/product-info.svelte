<script>
	import { FF_list, FF_price } from '@utils/flags/front-features';
	import { toBRL } from '@utils/money/toBRL';
	import ProductSizes
		from '@components/product-page/product-section/variations/product-sizes.svelte';
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const { product, actualPrint } = $derived(productCtx);

</script>

<div class="product-info">
	<h1 class="h4">{product.nome}</h1>
	<p class="h4">{product.estampas[actualPrint].nome}</p>
	{#if FF_list}
		<ProductSizes />
	{/if}
	<div class="product-price-and-reference">
		{#if FF_price}
			<h2 class="h5">{toBRL(product.preco)}</h2>
		{/if}
	</div>
</div>

<style>
    .product-info {
        width: 96vw;
    }

    .product-price-and-reference {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p.h4 {
        opacity: 0.5;
    }

</style>
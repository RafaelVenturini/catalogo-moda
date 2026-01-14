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
	<h1>{product.nome}<br /><span>{product.estampas[actualPrint].nome}</span>
	</h1>
	{#if FF_list}
		<ProductSizes />
	{/if}
	<div class="product-price-and-reference">
		{#if FF_price}
			<h2>{toBRL(product.preco)}</h2>
		{/if}
		<span>Ref.: {product.ref}</span>
	</div>
</div>

<style>
    .product-info {
        width: 100%;
    }

    .product-price-and-reference {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-size: 2rem;

        span {
            opacity: 0.5;
        }
    }

    h2 {
        font-size: 1.4rem;
        color: var(--brand-orange);
        font-weight: bold;
    }
</style>
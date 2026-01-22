<script>
	import { FF_list, FF_price } from '@utils/flags/front-features';
	import { toBRL } from '@utils/money/toBRL';
	import ProductSizes
		from '@components/product-page/product-section/variations/product-sizes.svelte';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const product = $derived(productCtx.product);
	const actualPrint = $derived(productCtx.actualPrint);
</script>

{#if product}
	<div class="info-wrapper">
		<div class="main-info">
			<h1 class="h4">{product.nome}</h1>
			<h2
				class="h5 right-text">{FF_price ? toBRL(product.preco) : null}</h2>
			<p class="h4">{product.estampas[actualPrint].nome}</p>
			<div>
				<p class="h7 right-text reference-bubble">REF. {product.ref}</p>
			</div>
		</div>
		{#if FF_list}
			<ProductSizes />
		{/if}
	</div>
{/if}
<style>
    .info-wrapper {
        width: 100%;
        margin-bottom: 8px;
    }

    .main-info {
        display: grid;
        grid-template-columns:  2fr 1fr;

        div {
            display: flex;
            justify-content: right;
        }
    }

    p.h4 {
        opacity: 0.5;
    }

    .reference-bubble {
        width: fit-content;
    }

    .right-text {
        text-align: right;
        justify-content: right;
    }

</style>
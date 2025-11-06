<script lang="ts">
	import ProductImages
		from '@components/product-page/product-section/images/product-images.svelte';
	import ChangeQnty
		from '@components/product-page/product-section/variations/change-qnty.svelte';
	import { getContext } from 'svelte';
	import { toBRL } from '@lib/assets/utils/money/toBRL';
	import ProductSizes
		from '@components/product-page/product-section/variations/product-sizes.svelte';
	import { FF_list, FF_price } from '@utils/flags/front-features';

	const productCtx = $state.raw(getContext('productCtx'));
	const product = $derived(productCtx.product);
	const idx = $derived(productCtx.actualPrint);
</script>

{#if !product }
	<p>Produto não encontrado</p>
{:else}
	<section>
		<div class="product-card">
			<ProductImages />
			<div class="product-info">
				<h1>{product.nome} - {product.estampas[0].nome}</h1>
				{#if FF_list}
					<ProductSizes />
				{/if}
				<div class="product-price-and-reference">
					{#if FF_price}
						<h2>{toBRL(product.preco)}</h2>
					{/if}
					<h2>Ref.: {product.ref}</h2>
				</div>
			</div>
			{#if FF_list}
				<ChangeQnty />
				<button
				>
					Adicionar ao Carrinho
				</button>
			{/if}
		</div>
	</section>
{/if}

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

<script lang="ts">
	import ProductImages
		from '@components/product-page/product-section/images/product-images.svelte';
	import ChangeQnty
		from '@components/product-page/product-section/variations/change-qnty.svelte';
	import { getContext } from 'svelte';
	import { toBRL } from '@lib/assets/utils/money/toBRL';
	import ProductSizes
		from '@components/product-page/product-section/variations/product-sizes.svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const product = $derived(productCtx.product);
</script>

{#if !product }
	<p>Produto não encontrado</p>
{:else}
	<section>
		<div class="product-card">
			<ProductImages />
			<div class="product-info">
				<h1>{product.nome} - {product.estampas[0].nome}</h1>
				<ProductSizes />
				<div class="product-price-and-reference">
					<h2>{toBRL(product.preco)}</h2>
					<h2>Ref.: {product.ref}</h2>
				</div>
			</div>
			<ChangeQnty />
			<button>Adicionar ao Carrinho</button>
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

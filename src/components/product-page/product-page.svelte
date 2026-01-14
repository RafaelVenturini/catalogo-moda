<script>
	import ProductImages
		from '@components/product-page/product-section/images/product-images.svelte';
	import ChangeQnty
		from '@components/product-page/product-section/variations/change-qnty.svelte';
	import { getContext } from 'svelte';
	import { FF_list } from '@utils/flags/front-features';
	import ProductInfo
		from './product-section/variations/product-info.svelte';
	import OtherPrints from './product-section/images/other-prints.svelte';
	import ProductSpecs from './product-section/data/product-specs.svelte';
	import Divider from '@components/ui/divider.svelte';
	import ProductSizes
		from './product-section/variations/product-sizes.svelte';
	import ProductTags from './product-section/data/product-tags.svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const product = $derived(productCtx.product);
</script>

{#if !product }
	<p>Produto não encontrado</p>
{:else}
	<section>
		<div class="product-card">
			<ProductImages />
			<div class="product-data">
				<ProductInfo />
				<Divider />
				<div class="print-sizes">
					<OtherPrints />
					<ProductSizes />
				</div>
				<Divider />
				{#if FF_list}
					<ChangeQnty />
					<button
					>
						Adicionar ao Carrinho
					</button>
					<Divider />
				{/if}
				<ProductSpecs />
				<ProductTags />
			</div>
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

    .product-data {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .print-sizes {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        background-color: var(--brand-orange);
        width: 70%;
        border-radius: 1rem;
    }

    @media (min-width: 768px) {
        .product-card {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        }
    }
</style>

<script lang="ts">
	import ProductImages
		from '@components/product-page/product-section/images/product-images.svelte';
	import ChangeQnty
		from '@components/product-page/product-section/variations/change-qnty.svelte';
	import { FF_list } from '@utils/flags/front-features';
	import ProductInfo
		from './product-section/variations/product-info.svelte';
	import OtherPrints from './product-section/images/other-prints.svelte';
	import ProductSpecs from './product-section/data/product-specs.svelte';
	import Divider from '@components/ui/divider.svelte';
	import ProductSizes
		from './product-section/variations/product-sizes.svelte';
	import ProductTags from './product-section/data/product-tags.svelte';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
</script>


{#if !productCtx.product }
	<p>Produto não encontrado</p>
{:else}
	<section class="product-wrapper">
		<ProductImages />
		<div class="product-data side-margin">
			<ProductInfo />
			<OtherPrints />
			<ProductSizes />
			<Divider />
			<ProductSpecs />
			<Divider />
			{#if FF_list}
				<ChangeQnty />
				<button
				>
					Adicionar ao Carrinho
				</button>
				<Divider />
			{/if}
			<ProductTags />
		</div>
	</section>
{/if}

<style>
    .product-data {
        display: flex;
        flex-direction: column;
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
            max-height: 90vh;
        }

        .product-data {
            max-width: 60vw;
        }
    }
</style>

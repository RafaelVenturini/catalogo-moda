<script>
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const product = $derived(productCtx.product);
	const actualEstampa = $derived(product?.estampas[productCtx.actualPrint]);

	const specs = $derived([
		{ label: 'Tecido', value: product?.tecido },
		{ label: 'Composição', value: actualEstampa?.composicao },
		{ label: 'Cuidados', value: actualEstampa?.cuidados }
	]);

</script>

<section class="product-specs">
	<h3 class="h6">Sobre o produto</h3>
	<ul>
		{#each specs as spec, idx (idx)}
			{#if spec.value}
				<ol class="base-text"><span class="spec-title">{spec.label}</span>:
					{spec.value}</ol>
			{/if}
		{/each}
	</ul>
</section>

<style>
    .product-specs {
        margin-bottom: 8px;
    }


    ul {
        gap: 0.5rem;
        display: grid;

        ol {
            opacity: 70%;

            .spec-title {
                font-weight: bold;
            }
        }
    }
</style>
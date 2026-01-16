<script>
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const product = $derived(productCtx.product);
	const actualEstampa = $derived(product.estampas[productCtx.actualPrint]);

	const specs = $derived([
		{ label: 'Tecido', value: product.tecido },
		{ label: 'Composição', value: actualEstampa.composicao },
		{ label: 'Cuidados', value: actualEstampa.cuidados }
	]);

</script>

<section class="product-specs">
	<div>
		<h3 class="h3">Sobre o produto</h3>
		<span class="h7">REF.
			{product.ref}</span>
	</div>
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
        div {
            display: flex;
            gap: 1rem;

            .h7 {
                opacity: 70%;
                background-color: #2C1C2410;
                padding: 0.5rem;
                border-radius: 0.5rem;
            }
        }
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
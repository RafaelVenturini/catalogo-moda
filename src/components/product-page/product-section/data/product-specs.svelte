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
	<h3>Detalhes técnicos:</h3>
	<ul>
		{#each specs as spec, idx (idx)}
			{#if spec.value}
				<ol><span>{spec.label}</span>: {spec.value}</ol>
			{/if}
		{/each}
	</ul>
</section>

<style>
    ul {
        gap: 0.5rem;
        display: grid;

        ol {
            span {
                font-weight: bold;
            }
        }
    }
</style>
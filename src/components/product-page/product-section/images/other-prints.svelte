<script>
	import { getContext } from 'svelte';

	const { idx } = $props();
	const productCtx = $state.raw(getContext('productCtx'));
	const product = $derived(productCtx.product);
	const estampa = $derived(product.estampas[idx]);


</script>

<button
	class="other-print {productCtx.actualPrint === idx ? 'active' : ''}"
	onclick={() => productCtx.actualPrint = idx}
>
	<img alt="" src=https://placehold.co/600x400 />
	<h4>{estampa.nome}</h4>
</button>

<style>
    .active {
        background-color: #BF208F;
        border: 5px solid #BF208F;
    }
</style>
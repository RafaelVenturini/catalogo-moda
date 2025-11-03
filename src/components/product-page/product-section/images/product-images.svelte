<script>
	import OtherPrints from './other-prints.svelte';
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const estampas = $derived(productCtx.product.estampas);
</script>

<div class="image-wrapper">
	<img alt="" class="main-image" src="/imgs/img-exemplo.jpg" />
	<div class="other-images">
		<img alt="" src="/imgs/img-exemplo.jpg" />
		<img alt="" src="/imgs/img-exemplo.jpg" />
		<img alt="" src="/imgs/img-exemplo.jpg" />
	</div>
</div>
<div>
	<h3>Todas as estampas:</h3>
	<div class="other-prints">
		{#each estampas as estampa, idx (estampa.sku)}
			<OtherPrints idx={idx} />
		{/each}
	</div>
</div>

<style>
    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: fit-content;
        width: 100%;
    }

    .other-images {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .other-prints {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        width: fit-content;
    }
</style>
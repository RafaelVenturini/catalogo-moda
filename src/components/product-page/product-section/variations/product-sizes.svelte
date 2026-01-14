<script lang="ts">
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));


	let selectedSize = $state(0);
	let idx = $derived(productCtx.actualPrint);
	let tamanhos = $derived(productCtx.product.estampas[idx].tamanhos);

	function handleSizeClick(index: number, isAvailable: boolean) {
		if (!isAvailable) return;
		selectedSize = index;
	}
</script>

<h3>Tamanhos disponíveis:</h3>
<div class="product-sizes">
	{#each Object.entries(tamanhos) as [key, value], i (i)}
		<div class="product-size-wrapper">
			<button
				class="product-size {i === selectedSize ? 'selected' : ''} {!value ? 'disabled' : ''}"
				onclick={() => handleSizeClick(i, value)}
			>{key.toUpperCase()}</button>
		</div>
	{/each}
</div>

<style>
    .product-sizes {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
        justify-items: center;
    }

    .product-size {
        border-radius: 5rem;
        background-color: var(--brand-orange-pastel);
        text-align: center;
        width: 2rem;
    }

    .disabled {
        opacity: 0.5;
    }

    .selected {
        background-color: var(--brand-orange);
    }
</style>
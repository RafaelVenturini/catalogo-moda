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

<div class="size-wrapper">
	<h3 class="h6">Tamanhos:</h3>
	<div class="product-sizes">
		{#each Object.entries(tamanhos) as [key, value], i (i)}
			<div class="product-size-wrapper">
				<button
					class="product-size {i === selectedSize ? 'selected' : ''} {!value ? 'disabled' : ''}"
					onclick={() => handleSizeClick(i, value)}
				><span class="h7">{key.toUpperCase()}</span></button>
			</div>
		{/each}
	</div>
</div>

<style>
    .product-sizes {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
        justify-items: center;
        width: 100%;
    }

    .product-size {
        border-radius: 1rem;
        background-color: #2C1C2410;
        text-align: center;
        width: 3rem;
    }

    .size-wrapper {
        display: flex;
    }

    .h7 {
        opacity: 70%;
    }

    .disabled {
        opacity: 0.5;
    }

    .selected {
        background-color: #2C1C2440;
    }
</style>
<script lang="ts">
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();

	let tamanhos = $derived(productCtx.getSize());
	let selectedSize = $derived(productCtx.actualSize);

	function handleSizeClick(index: number, isAvailable: boolean) {
		if (!isAvailable) return;
		productCtx.setActualSize(index);
	}
</script>

{#if tamanhos}
	<div class="size-wrapper">
		<h3 class="h6">Tamanhos:</h3>
		<div class="product-sizes">
			{#each Object.entries(tamanhos) as [key, value], i (i)}
				<div class="product-size-wrapper">
					<button
						class="product-size {i === selectedSize ? 'selected' : ''} {!value ? 'disabled' : ''}"
						onclick={() => handleSizeClick(i, value)}
					>
						<span class="h7">
							{key.toUpperCase()}
						</span>
					</button>
				</div>
			{/each}
		</div>
	</div>
{/if}
<style>
    .product-sizes {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
        justify-items: center;
        width: 100%;
    }

    .product-size {
        border-radius: 0.5rem;
        background-color: #2C1C2410;
        text-align: center;
        width: 2rem;
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
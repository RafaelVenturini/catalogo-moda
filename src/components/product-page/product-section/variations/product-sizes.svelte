<script>

	const sizes = ['PP', 'P', 'M', 'G', 'GG'];
</script>

<div class="product-sizes">
	{#each sizes as size, i}
		<div
			class="product-size-wrapper {i === 4 ? 'disabled' : ''}">
			<div class="product-size {i === 2 ? 'selected' : ''}">{size}</div>
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
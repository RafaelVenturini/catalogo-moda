<script>
	import { getContext } from 'svelte';


	const productCtx = $state.raw(getContext('productCtx'));
	const { product, actualPrint } = $derived(productCtx);

	const actualItem = $derived(product?.estampas?.[actualPrint]);

</script>

<div class="image-wrapper">
	<img alt="Imagem principal"
			 class="main-image"
			 src={actualItem.img[productCtx.actualPic]}
	/>
	<div class="other-images">
		{#each actualItem.img as img, idx (idx)}
			<button
				onclick={() => productCtx.actualPic = idx}
			>
				<img
					alt="Imagem extra"
					class={ idx === productCtx.actualPic ? 'active' : ''}
					src={img}
				/>
			</button>
		{/each}
	</div>
</div>

<style>
    :root {
        --main-image-width: 50vw;
    }

    img {
        border-radius: 1rem;
    }

    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: fit-content;
        width: 100%;
        align-items: center;
    }

    .other-images {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .active {
        border: 5px solid var(--brand-black);
    }
</style>
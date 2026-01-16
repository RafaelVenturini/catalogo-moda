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
	<div class="other-images side-margin">
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
    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .other-images {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        img {
            border-radius: 1rem;
            overflow: hidden;
            height: 4rem;
        }
    }

    .main-image {
        object-fit: cover;
        width: 100vw;
        aspect-ratio: 3/4;
    }

    .active {
        outline: 2px solid color-mix(in srgb, var(--brand-orange), transparent 70%);
        outline-offset: 4px;
        border-radius: 1rem;
    }

    @media (min-width: 800px) {
        .image-wrapper {
            max-height: 85vh;
        }

        .main-image {
            width: 100%;
            aspect-ratio: 1/1;
        }
    }
</style>
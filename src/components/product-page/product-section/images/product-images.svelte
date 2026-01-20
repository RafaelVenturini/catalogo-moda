<script lang="ts">
	import { getContext } from 'svelte';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import type { ProductContext } from '@interfaces/context';


	const productCtx: ProductContext = $state.raw(getContext('productCtx'));
	const { product, actualPrint } = $derived(productCtx);

	const actualItem = $derived(product?.estampas?.[actualPrint]);
	const imgLen = $derived(actualItem?.img?.length);

	function changeImage(x: number) {
		const newIdx = productCtx.actualPic + x;
		if (newIdx < 0 || newIdx >= actualItem.img.length) return;
		productCtx.actualPic = newIdx;
	}

</script>
<div class="image-wrapper">
	<img alt="Imagem principal"
			 class="main-image"
			 src={actualItem?.img[productCtx.actualPic]}
	/>

	<button
		class={`
			slide-arrow
			${productCtx.actualPic !== 0 ? 'left' : 'hidden'}
		`}
		onclick={()=> changeImage(-1)}>
		<ChevronLeft />
	</button>

	<button
		class={`
			slide-arrow
			${imgLen !== productCtx.actualPic+1 ? 'right' : 'hidden'}
	 `}
		onclick={()=> changeImage(+1)}>
		<ChevronRight />
	</button>

	<div class="slide-index-wrapper">
		{#each actualItem?.img as _, idx (idx)}
			<div
				class={
				`slide-index
				${productCtx.actualPic === idx ? "active" : null}
				`}>
			</div>
		{/each}
	</div>
</div>

<style>
    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin-bottom: 1rem;
        height: 60vh;
        position: relative;
    }

    .slide-arrow {
        position: absolute;
        top: 50%;
        background-color: rgba(255, 255, 255, 0.49);
        border-radius: 50%;
        padding: 2px;
    }

    .right {
        right: 5px;
    }

    .left {
        left: 5px;
    }

    .other-images {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        img {
            border-radius: 1rem;
            overflow: hidden;
            height: 52px;
        }
    }

    .main-image {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 3/4;
        height: 100%;
    }

    .slide-index-wrapper {
        position: absolute;
        right: 5px;
        bottom: 5px;
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .slide-index {
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        height: 10px;
        width: 10px;
    }

    .active {
        background-color: #FFFFFF;
        width: 20px;
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
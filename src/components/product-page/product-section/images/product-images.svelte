<script lang="ts">
	import type { Swiper as SwiperType } from 'swiper';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const pics = $derived(productCtx.getPics());

	let swiperContainer = $state<HTMLElement>();
	let swiperInstance: SwiperType | undefined;

	$effect(() => {
		if (swiperContainer && pics.length > 0) {
			if (swiperInstance) swiperInstance.destroy();
			swiperInstance = new Swiper(swiperContainer, {
				modules: [Navigation, Pagination],
				loop: pics.length > 1,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				slidesPerView: 1,
				spaceBetween: 0
			});
		}

		return () => {
			if (swiperInstance) {
				swiperInstance.destroy();
			}
		};
	});
</script>

<div class="gallery">
	<div bind:this={swiperContainer} class="swiper">
		<div class="swiper-wrapper">
			{#each pics as img, idx (idx)}
				<div class="swiper-slide">
					<img
						src={img}
						alt="imagem do produto {idx + 1}"
						width={1600}
						height={1600}
					/>
				</div>
			{/each}
		</div>

		{#if pics.length > 1}
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-pagination"></div>
		{/if}
	</div>
</div>

<style>
    .gallery {
        max-width: 100vw;
        margin-bottom: 8px;
        overflow: hidden;
    }

    .swiper {
        width: 100%;
        /*height: 600px;*/
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :global(.swiper-button-prev),
    :global(.swiper-button-next) {
        opacity: 0.5;
        background: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    :global(.swiper-navigation-icon) {
        height: 50% !important;
        width: 50% !important;
        color: var(--brand-black);
    }

    :global(.swiper-button-prev:after),
    :global(.swiper-button-next:after) {
        font-size: 50%;
        color: #333;
        font-weight: bold;
    }

    :global(.swiper-button-disabled) {
        opacity: 0.3;
        pointer-events: none;
    }

    :global(.swiper-pagination) {
        text-align: right;
        right: 5rem;
    }

    :global(.swiper-pagination-bullet) {
        background: transparent;
        border: 2px solid white;
        opacity: 0.5;
        width: 10px;
        height: 10px;
    }

    :global(.swiper-pagination-bullet-active) {
        background-color: white;
        opacity: 1;
        border-radius: 40%;
        width: 20px;
    }

    @media (min-width: 800px) {
        .gallery {
            width: 70vw;
            max-height: 90vh;
            margin-left: 20px;
        }
    }
</style>
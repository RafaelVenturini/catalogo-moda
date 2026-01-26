<script lang="ts">
	import type { Swiper as SwiperType } from 'swiper';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import { useProductState } from '@classes/product.svelte';
	import { ArrowLeft } from '@lucide/svelte';
	import ImgSkeleton from '@components/ui/skeletons/img-skeleton.svelte';
	import { fade } from 'svelte/transition';

	const productCtx = useProductState();
	const pics = $derived(productCtx.getPics());

	let loading = $state(true);

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
	<!-- {#if loading}
	<div>
		<ImgSkeleton />
	</div>
	{/if} -->
	<div class="gallery-header">
		<a class="back-button" href="/">
			<ArrowLeft />
			Voltar
		</a>
	</div>
	<div bind:this={swiperContainer} class="swiper">
		<div class="swiper-wrapper">
			{#if loading}
				<ImgSkeleton />
			{/if}
			{#each pics as img, idx (idx)}
				<div class="swiper-slide">
					<img
						src={img}
						alt="imagem do produto {idx + 1}"
						width={1600}
						height={1600}
						onload={() => (loading = false)}
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
		height: 60vh;
		margin-bottom: 24px;
		position: relative;
	}

	.gallery-header {
		position: sticky;
		z-index: 100;
		top: 8px;
		left: 8px;
		width: fit-content;
		pointer-events: none;
	}

	.back-button {
		background-color: white;
		opacity: 0.7;
		padding: 8px;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		border-radius: 3rem;
		pointer-events: all;
	}

	.swiper {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: -40px;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f5f5f5;
	}

	.swiper-slide > * {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:global(.swiper-button-prev),
	:global(.swiper-button-next) {
		opacity: 0.7;
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
		border-radius: 20px;
		width: 20px;
	}

	@media (min-width: 800px) {
		.swiper {
			margin-top: 0;
		}

		.gallery {
			width: 70vw;
			height: 100%;
			margin-left: 20px;
		}

		.back-button {
			display: none;
		}
		.swiper-slide {
			img {
				object-fit: contain;
			}
		}
	}
</style>

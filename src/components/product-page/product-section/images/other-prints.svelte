<script>
	import { useProductState } from '@classes/product.svelte';
	import { createNItensArr } from '@lib/assets/utils/re-use/create-n-itens-arr';

	const productCtx = useProductState();
	const estampas = $derived(productCtx?.product?.estampas);

	const loadClass = $derived(productCtx.product ? '' : ' shimmer skeleton');
</script>

<h3 class={`h6 ${loadClass}`}>
	{productCtx.product && estampas ? estampas.length : 0} opções deste produto:
</h3>
<div class="other-prints">
	{#if productCtx.product && estampas}
		{#each estampas as estampa, idx (estampa.sku)}
			<button
				class={`other-print
				${productCtx.actualPrint === idx ? 'active' : 'inactive'}
				`}
				onclick={() => {
					productCtx.setActualPrint(idx);
				}}
			>
				{#if estampa.referencia[0] === '#'}
					<div
						class="hex-color print-option"
						style={`background-color: ${estampa.referencia}`}
					></div>
				{:else}
					<img
						alt=""
						src={`https://backliss-production.up.railway.app/front-utils/print?print=${estampa.referencia}`}
						height="50"
						width="50"
						loading="lazy"
						class="print-option"
					/>
				{/if}
			</button>
		{/each}
	{:else}
		{#each createNItensArr(3) as _}
			<div class="other-print">
				<div class={`hex-color print-option ${loadClass}`}></div>
			</div>
		{/each}
	{/if}
</div>

<style>
	.skeleton {
		width: fit-content;
	}
	.h6 {
		margin-bottom: 1rem;
	}

	.other-prints {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		width: fit-content;
		margin-bottom: 16px;
	}

	.other-print {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.print-option {
		border-radius: 50%;
		object-fit: cover;
		height: 52px;
		width: 52px;
	}

	.active {
		outline: 2px solid color-mix(in srgb, var(--brand-orange), transparent 70%);
		outline-offset: 2px;
		border-radius: 50%;
	}

	@media (min-width: 768px) {
		.other-prints {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>

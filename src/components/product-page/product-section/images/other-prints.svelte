<script>
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const estampas = $derived(productCtx?.product?.estampas);
</script>

{#if estampas}
	<h3 class="h6">{estampas.length} opções deste produto:</h3>
	<div class="other-prints">
		{#each estampas as estampa, idx (estampa.sku)}
			<button
				class={
				`other-print
				${productCtx.actualPrint === idx ? 'active' : 'inactive'}
				`
			}
				onclick={() => {
				productCtx.setActualPrint(idx);
			}}
			>
				{#if estampa.referencia[0] === '#'}
					<div class="hex-color print-option"
							 style={`background-color: ${estampa.referencia}`}></div>
				{:else}
					<img alt=""
							 src={`https://backliss-production.up.railway.app/front-utils/print?print=${estampa.referencia}`}
							 height=50 width=50
							 loading="lazy"
							 class="print-option" />
				{/if}
			</button>
		{/each}
	</div>
{/if}

<style>
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
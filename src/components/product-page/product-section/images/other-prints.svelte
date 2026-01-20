<script>
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const estampas = $derived(productCtx.product.estampas);
</script>

<h3 class="h6">Mais {estampas.length} opções deste produto:</h3>
<div class="other-prints">
	{#each estampas as estampa, idx (estampa.sku)}
		<button
			class={
				`other-print
				${productCtx.actualPrint === idx ? 'active' : 'inactive'}
				`
			}
			onclick={() => {
				productCtx.actualPrint = idx;
				productCtx.actualPic = 0;
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

<style>
    .h6 {
        margin-bottom: 1rem;
    }

    .hex-color {
        height: 50px;
        width: 50px;
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
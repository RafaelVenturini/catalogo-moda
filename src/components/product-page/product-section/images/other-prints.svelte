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
			{#if estampa.novidade || estampa.reposicao}
				<SmallNotif
					notOld={estampa.novidade}
					renew={estampa.reposicao}
					className="product-notif"
				/>
			{/if}
			{#if estampa.referencia[0] === '#'}
				<div class="hex-color print-option"
						 style={`background-color: ${estampa.referencia}`}></div>
			{:else}
				<img alt=""
						 src={`https://backliss-production.up.railway.app/front-utils/print?print=${estampa.referencia}`}
						 height=50 width=50
						 loading="lazy" class="print-option" />
			{/if}
			<h4 class="small-text">{estampa.nome}</h4>
		</button>
	{/each}
</div>

<style>
    .h6 {
        margin-bottom: 1rem;
    }

    .small-text {
        opacity: 70%;
        text-align: left;
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
    }

    .other-print {
        width: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            text-align: center;
        }

    }

    .print-option {
        border-radius: 1rem;
        object-fit: cover;
        border: 1px solid black;
    }

    .active {
        outline: 2px solid color-mix(in srgb, var(--brand-orange), transparent 70%);
        outline-offset: 8px;
        border-radius: 1rem;
    }

    @media (min-width: 768px) {
        .other-prints {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
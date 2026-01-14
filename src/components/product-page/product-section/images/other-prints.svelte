<script>
	import { getContext } from 'svelte';
	import SmallNotif from '@components/ui/badges/small-notif.svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	const estampas = $derived(productCtx.product.estampas);
</script>

<h3>Veja outras estampas:</h3>
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
			<img alt="" src={estampa.img[0]} />
			<h4>{estampa.nome}</h4>
		</button>
	{/each}
</div>

<style>
    .other-prints {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        width: fit-content;
        max-width: 100%;
    }

    img {
        border-radius: 1rem;
    }

    .active {
        border-radius: 1rem;
        background-color: #000;
        border: 5px solid #000;
        color: #FFFFFF;
    }

    @media (min-width: 768px) {
        .other-prints {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
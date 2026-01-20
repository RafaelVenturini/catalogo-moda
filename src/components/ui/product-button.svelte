<script lang="ts">
	import { goto } from '$app/navigation';
	import { FF_price } from '@utils/flags/front-features.js';
	import { resolve } from '$app/paths';
	import SmallNotif from '@components/ui/badges/small-notif.svelte';

	const { product } = $props();

	function changePrint(slug: string) {
		const link = resolve(`/produtos/${slug}`);
		goto(link);
	}

	const notOld = product.extra.novidade;
	const renew = product.extra.reposicao;

</script>

<button
	class="product"
	onclick={() => changePrint(product.slug)}
>
	<div class="img-wrapper">
		{#if notOld || renew}
			<SmallNotif
				notOld={notOld}
				renew={renew}
				className="product-notif"
			/>
		{/if}
		<img alt="Imagem do produto"
				 height=1600
				 loading="lazy"
				 src={product.img}
				 width=1600
		/>
	</div>
	<div class="product-info">
		<h4 class="h6">{product.produto}</h4>
		<h5 class="small-text">{product.estampa}</h5>
		<div class="price small-text">
			{#if FF_price}
				<h6>
					{Number(product.preco).toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					})}
				</h6>
			{/if}
		</div>
	</div>
</button>

<style>
    button {
        z-index: 1;
    }

    .product {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        max-width: 43vw;
    }

    .product-info {
        width: 100%;
        padding: 0.1rem 0.2rem;
    }

    h5 {
        opacity: 0.7;
    }

    h4, h5, h6 {
        text-align: left;
    }


    .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 800px) {
        .product {
            max-width: 300px;
        }
    }

    .img-wrapper {
        position: relative;
        z-index: 1;

        img {
            border-radius: 1rem;
            object-fit: cover;
            aspect-ratio: 3/4;
        }
    }
</style>
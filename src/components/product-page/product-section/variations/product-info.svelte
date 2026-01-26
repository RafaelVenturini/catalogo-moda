<script>
	import { FF_list, FF_price } from '@utils/flags/front-features';
	import { toBRL } from '@utils/money/toBRL';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();
	const product = $derived(productCtx.product);
	const actualPrint = $derived(productCtx.actualPrint);

	const loadClass = $derived(product ? '' : ' shimmer skeleton');
</script>

<div class="info-wrapper">
	<div class="main-info">
		<div class="left">
			<h1 class={`h4 ${loadClass}`}>{product ? product.nome : '##########'}</h1>
			<p class={`h4 ${loadClass}`}>{product ? product.estampas[actualPrint].nome : '######'}</p>
		</div>
		<div class="right">
			<h2 class={`h5 right-text ${loadClass}`}>
				{FF_price ? (product ? toBRL(product.preco) : 'R$##,##') : null}
			</h2>
			<p class={`h7 right-text reference-bubble ${loadClass}`}>
				REF. {product ? product.ref : '####'}
			</p>
		</div>
	</div>
</div>

<style>
	.info-wrapper {
		width: 100%;
		margin-bottom: 8px;
	}

	.main-info {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	p.h4 {
		opacity: 70%;
		color: #3b332b;
	}

	.reference-bubble {
		width: fit-content;
	}

	.right-text {
		text-align: right;
		justify-content: right;
	}
</style>

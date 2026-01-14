<script>
	import { slugfier } from '@utils/re-use/slugfier';
	import { getContext } from 'svelte';

	const productCtx = $state.raw(getContext('productCtx'));
	let idx = $derived(productCtx.actualPrint);
	let tags = $derived(productCtx.product.estampas[idx].tag);
</script>

{#if tags}
	<h3>Tags:</h3>
	<div class="product-tags">
		{#each tags as tag, idx (idx)}
			<a class="tag" href={`produtos/tags/${slugfier(tag)}`}>{tag}</a>
		{/each}
	</div>
{/if}

<style>
    .product-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;

        a {
            border-radius: 1rem;
            background-color: var(--brand-orange);
            padding: 0.1rem 0.5rem;
        }
    }
</style>
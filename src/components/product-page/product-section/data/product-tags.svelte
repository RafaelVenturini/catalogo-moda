<script>
	import { slugfier } from '@utils/re-use/slugfier';
	import { useProductState } from '@classes/product.svelte';

	const productCtx = useProductState();

	let tags = $derived(productCtx.getTags());
</script>
{#if tags.length > 0}
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
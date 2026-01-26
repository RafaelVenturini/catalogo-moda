<script lang="ts">
	import ProductPage from '@components/product-page/product-page.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import TopNav from '@components/ui/top-nav.svelte';
	import Footer from '@components/ui/footer.svelte';
	import { page } from '$app/state';
	import { provideProductContext } from '@classes/product.svelte';

	const productCtx = provideProductContext();

	const searchProduct = $derived(page.params.produto);
	const searchPrint = $derived(page.url.searchParams.get('estampa'));

	const product = $derived(productCtx.product);

	$effect(() => {
		if (!searchProduct) return;
		productCtx.setProduct(searchProduct, searchPrint);
	});
</script>

<header>
	<TopNav />
</header>
<main class="margin-header">
	<ProductPage />
	<div class="side-margin">
		<h4 class={product ? 'h6' : 'skeleton shimmer'}>Veja também</h4>
		<ProductsAvailable />
	</div>
</main>
<Footer />

<style>
	main {
		margin: 0;
	}

	header {
		height: var(--header-height);
	}

	@media (max-width: 800px) {
		header {
			display: none;
		}
	}
</style>

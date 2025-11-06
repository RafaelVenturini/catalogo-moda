<script lang="ts">
	import ProductPage from '@components/product-page/product-page.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import TopNav from '@components/ui/top-nav.svelte';
	import Footer from '@components/ui/footer.svelte';
	import { page } from '$app/state';
	import { setContext } from 'svelte';

	let productCtx = $state({
		product: null,
		actualPrint: 0,
		sizes: { pp: 0, p: 0, m: 0, g: 0, gg: 0 }
	});

	setContext('productCtx', productCtx);

	const searchProduct = $derived(page.params.produto);
	const searchPrint = $derived(page.url.searchParams.get('estampa'));

	$effect(() => {
		fetch(`/api/produtos/produto/${searchProduct}`)
			.then(res => res.json())
			.then(data => {
				productCtx.product = data[0];
				productCtx.actualPrint = searchPrint ? Number(searchPrint) : 0;
				console.log('Context product: ', data);
			});
	});
</script>

<header>
	<TopNav />
</header>
<main>
	<ProductPage />
	<div class="card">
		<h4>Veja outros produtos também!</h4>
		<ProductsAvailable />
	</div>
</main>
<Footer />

<style>
    .card {
        margin: 2rem 0;
    }
</style>
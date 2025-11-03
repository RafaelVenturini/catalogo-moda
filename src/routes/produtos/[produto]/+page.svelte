<script lang="ts">
	import ProductPage from '@components/product-page/product-page.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import TopNav from '@components/ui/top-nav.svelte';
	import { page } from '$app/state';
	import { onMount, setContext } from 'svelte';

	let productCtx = $state({
		product: null,
		actualPrint: 0
	});

	setContext('productCtx', productCtx);

	onMount(async () => {
		const searchProduct = page.params.produto;
		const searchPrint = page.url.searchParams.get('estampa');
		const res = await fetch(`/api/produtos/produto/${searchProduct}`);
		const data = await res.json();
		productCtx.product = data[0];
		productCtx.actualPrint = searchPrint ? Number(searchPrint) : 0;
		console.log('Context product: ', data);
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

<style>
    .card {
        margin: 2rem 0;
    }
</style>
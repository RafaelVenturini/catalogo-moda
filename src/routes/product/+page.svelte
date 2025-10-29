<script>
	import ProductPage from '@components/product-page/product-page.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import TopNav from '@components/ui/top-nav.svelte';
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
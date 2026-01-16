<script lang="ts">
	import TopNav from '@components/ui/top-nav.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import Footer from '@components/ui/footer.svelte';
</script>


<header>
	<TopNav />
</header>
<main class="side-margin">
	<ProductsAvailable />
</main>
<Footer />


<style>
    header {
        height: var(--header-height);
    }
</style>
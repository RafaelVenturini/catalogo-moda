<script lang="ts">
	import MainBanner from '@components/main-page/main-banner.svelte';
	import TopNav from '@components/ui/top-nav.svelte';
	import Categorys from '@components/main-page/categorys.svelte';
	import ProductsAvailable from '@components/ui/products-available.svelte';
	import Footer from '@components/ui/footer.svelte';
</script>


<header>
	<TopNav />
</header>
<main>
	<MainBanner />
	<Categorys />
	<ProductsAvailable />
</main>
<Footer />

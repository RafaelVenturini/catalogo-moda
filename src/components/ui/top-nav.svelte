<script>
	import CommonWithoutLetters
		from './svg/logo/common-without-letters.svelte';
	import ShoppingList from './shopping-list.svelte';
</script>

<nav>
	<div class="header-top">
		<a class="header-logo" href="/">
			<CommonWithoutLetters height="30" width="30" />
		</a>
		<div class="header-icons">
			<ShoppingList />
		</div>
	</div>
	<div class="header-bottom">
		<div>Vestidos</div>
		<div>Conjuntos</div>
		<div>Blusas</div>
		<div>Chemises</div>
		<div>Calças</div>
	</div>
</nav>


<style>
    nav {
        width: 100%;
        margin-bottom: 1rem;
    }

    .header-top {
        background-color: var(--brand-orange-pastel);
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;
    }

    .header-bottom {
        background-color: var(--brand-orange-pastel);
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem
    }
</style>
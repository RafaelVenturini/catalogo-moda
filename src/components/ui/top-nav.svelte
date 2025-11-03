<script>
	import CommonWithoutLetters
		from './svg/logo/common-without-letters.svelte';
	import ShoppingList from './shopping-list.svelte';

	const categorys = [
		{ url: '/categorias/vestido', name: 'Vestido' },
		{ url: '/categorias/blusas', name: 'Blusas' },
		{ url: '/categorias/calcas', name: 'Calças' },
		{ url: '/categorias/shorts', name: 'Shorts' },
		{ url: '/categorias/conjuntos', name: 'Conjuntos' },
		{ url: '/categorias/chemise', name: 'Chemise' }
	];
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
		{#each categorys as category (category.name)}
			<a href={category.url}>{category.name}</a>
		{/each}
	</div>
</nav>


<style>
    nav {
        width: 100%;
        height: 15rem;
        margin-bottom: 1rem;
        position: fixed;
    }

    .header-top {
        background-color: var(--brand-orange-pastel);
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;
        height: var(--header-top-height);
    }

    .header-bottom {
        background-color: var(--brand-orange-pastel);
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;
        height: var(--header-bottom-height);
    }
</style>
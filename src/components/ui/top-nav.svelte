<script>
	import CommonWithoutLetters
		from './svg/logo/common-without-letters.svelte';
	import { FF_list } from '@utils/flags/front-features.js';
	import ShoppingList from '@components/ui/shopping-list.svelte';

	const categorys = [
		{ url: '/categorias/vestido', name: 'Vestidos' },
		{ url: '/categorias/blusas', name: 'Blusas' },
		{ url: '/categorias/calcas', name: 'Calças' },
		{ url: '/categorias/shorts', name: 'Shorts' },
		{ url: '/categorias/conjuntos', name: 'Conjuntos' }
	];
</script>

<nav>
	<div class="header-top">
		<a class="header-logo" href="/">
			<CommonWithoutLetters height="30" width="30" />
		</a>
		<div class="header-icons">
			{#if FF_list}
				<ShoppingList />
			{/if}
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
        position: fixed;
        z-index: 1000;

        div {
            background-color: var(--brand-orange-pastel);
            display: flex;
            justify-content: space-between;
            padding: 0.9rem 0.5rem;

        }
    }

    .header-top {
        height: var(--header-top-height);
    }

    .header-bottom {
        height: var(--header-top-bottom);
    }
</style>
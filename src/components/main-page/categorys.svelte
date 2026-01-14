<script>
	import NewAndRenew from './new-and-renew.svelte';
	import { FF_newArrivals } from '@utils/flags/front-features.ts';

	let categorys = [
		{ url: '/categorias/vestido', name: 'Vestido' },
		{ url: '/categorias/blusas', name: 'Blusas' },
		{ url: '/categorias/calcas', name: 'Calças' },
		{ url: '/categorias/shorts', name: 'Shorts' },
		{ url: '/categorias/conjuntos', name: 'Conjuntos' },
		{ url: '/categorias/chemise', name: 'Chemise' }
	];
</script>

<h2 class="h5">Compre por categorias</h2>
<section>
	<div class="category-container">
		{#each categorys as category, idx (category.name)}
			<a class="category" href="{category.url}">
				<img alt="categoria {category.name}"
						 src="/imgs/place-holder/place-holder-{idx+1 <= 5 ? idx + 1: 1}.webp">
				<div class="category-text-wrapper">
					<h3 class="h6 category-text">{category.name}</h3>
					<p class="h7 category-text">Ver produtos</p>
				</div>
			</a>
		{/each}
	</div>
	{#if FF_newArrivals}
		<NewAndRenew />
	{/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        color: var(--main-orange);
    }

    h2 {
        margin-bottom: 1rem;
    }

    .category-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;
        justify-items: center;
    }

    .category-text {
        text-align: left;
    }

    img {
        width: 100%;
        border-radius: 0.5rem;
        max-width: 120px;
    }
</style>
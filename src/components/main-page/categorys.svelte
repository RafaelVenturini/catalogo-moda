<script>
	let categorys = [
		{ url: '/categorias/vestido', name: 'Vestido' },
		{ url: '/categorias/blusas', name: 'Blusas' },
		{ url: '/categorias/calcas', name: 'Calças' },
		{ url: '/categorias/shorts', name: 'Shorts' },
		{ url: '/categorias/conjuntos', name: 'Conjuntos' },
		{ url: '/categorias/chemise', name: 'Chemise' }
	];
</script>

<section>
	<div class="category-container">
		{#each categorys as category (category.name)}
			<a class="category" href="{category.url}">
				<img alt="" src="https://placehold.co/120x120">
				<h3>{category.name}</h3>
			</a>
		{/each}
	</div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
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

    .category {
        justify-items: center;
    }

    img {
        width: 100%;
        border-radius: 0.5rem;
        max-width: 120px;
    }
</style>
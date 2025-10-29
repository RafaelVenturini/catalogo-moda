<script>
	let categorys = [
		{ url: '', name: 'Vestido' },
		{ url: '', name: 'Blusas' },
		{ url: '', name: 'Calças' },
		{ url: '', name: 'Shorts' },
		{ url: '', name: 'Conjuntos' },
		{ url: '', name: 'Chemise' }
	];
</script>

<section>
	<div class="category-container">
		{#each categorys as category, i (category.name)}
			<div>
				<img alt="" src="https://placehold.co/60x60">
				<h3>{category.name}{i}</h3>
			</div>
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 1rem;
    }
</style>
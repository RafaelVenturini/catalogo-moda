<script>
	import ListRow from './list-row.svelte';
</script>

<div>
	<ListRow />
	<ListRow />
	<ListRow />
	<ListRow />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
</style>
<script>
	import { ShoppingBasket } from '@lucide/svelte';
	import ListPopUp from '@components/list/list-pop-up.svelte';

	let listOpen = $state(false);
	const qnty = 99;
</script>

<button onclick={() => listOpen = true}>
	<div class="qnty-indicator">{qnty}</div>
	<ShoppingBasket size="30" />
</button>

{#if listOpen}
	<ListPopUp bind:open={listOpen} />
{/if}

<style>
    .qnty-indicator {
        position: absolute;
        top: 0;
        right: 0;
        background-color: red;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        font-size: 0.5rem;
        font-weight: bold;
        z-index: 1;
    }
</style>
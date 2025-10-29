<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

<script>
	import { X } from '@lucide/svelte';
	import ListBody from './list-body.svelte';
	import ListFooter from './list-footer.svelte';

	let { open = $bindable() } = $props();

	function onClose() {
		open = false;
	}
</script>

{#if open}
	<div class="backdrop">
		<div class="card">
			<div class="list-header">
				<h1>Carrinho</h1>
				<button onclick={onClose} aria-label="Close">
					<X />
				</button>
			</div>
			<div class="list-body">
				<ListBody />
			</div>
			<ListFooter />
		</div>
	</div>
{/if}

<style>
    .backdrop {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 90%;
        height: 95%;
    }

    .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        background-color: var(--white);
        z-index: 10;
        border-bottom: 1px solid var(--brand-black);

    }

    .list-body {
        padding: 1rem 0;
        overflow-y: auto;
    }
</style>
<script>
	import { Minus, Plus } from '@lucide/svelte';
	import { getContext } from 'svelte';

	const sizes = $derived(getContext('sizes'));

	let qnty = $state(1);

	function decrease() {
		if (qnty > 1) qnty--;
	}

	function increase() {
		qnty++;
	}
</script>

<div class="amount-wrapper flex gap-2">
	<button onclick={decrease}>
		<Minus size="15" />
	</button>
	<div>{qnty}</div>
	<button onclick={increase}>
		<Plus size="15" />
	</button>
</div>

<style>
    .amount-wrapper {
        border: 1px solid black;
        border-radius: 0.5rem;
        padding: 0.5rem;
    }
</style>
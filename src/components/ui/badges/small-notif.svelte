<script lang="ts">
	import { RotateCw, Sparkles } from '@lucide/svelte';

	interface Props {
		renew?: boolean;
		notOld?: boolean;
		className?: string;
	}


	const { renew, notOld, className }: Props = $props();
</script>

<div class={className ? className : 'default-badge' }>
	{#if renew}
		<RotateCw color='var(--brand-purple)' />
	{:else if notOld}
		<Sparkles color="var(--brand-purple)" />
	{/if}
</div>

<style>
    .default-badge {
        position: absolute;
        top: 2px;
        left: 2px;
        background-color: var(--brand-orange-pastel);
        padding: 0.3rem;
        border-radius: 1rem;
    }

    .product-notif {
        position: absolute;
        top: 6px;
        left: 6px;
        background-color: var(--brand-orange-pastel);
        padding: 0.3rem;
        border-radius: 1rem;
    }
</style>
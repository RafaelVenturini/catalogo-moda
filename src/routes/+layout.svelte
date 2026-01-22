<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { register } from 'swiper/element/bundle';

	let { children } = $props();
	register();
</script>

<svelte:head>
	<link href={favicon} rel="icon" />
</svelte:head>

{@render children?.()}

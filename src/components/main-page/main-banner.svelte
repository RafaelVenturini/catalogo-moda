<script>
	import { isMobile } from '@lib/stores/device';
</script>

<div>
	{#if $isMobile}
		<img
			alt="banner muito legal"
			src="/imgs/banners/mobile.webp">
	{:else}
		<img
			alt="banner muito legal"
			src="/imgs/banners/desktop.webp">
	{/if}
</div>

<style>
    div {
        width: 100vw;
        margin-bottom: 1rem;

        img {
            width: 100vw;
            max-height: 70vh;
        }
    }
</style>
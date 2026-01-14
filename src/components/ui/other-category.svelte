<script>
	import { ArrowRight } from '@lucide/svelte';
</script>

<div class="other-category">
	<div class="top">
		<h2 class="title">Other</h2>
		<ArrowRight class="icon" />
	</div>
	<div class="content">
		<div class="placeholder"></div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
	</div>
</div>

<style>
    .other-category {
        border: solid 1px black;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .content {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .placeholder {
        width: 14vw;
        height: 14rem;
        background-color: darkgrey;
    }
</style>
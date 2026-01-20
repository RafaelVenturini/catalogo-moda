<script>
	import CommonSideLetters
		from '@components/ui/svg/logo/common-side-letters.svelte';
	import { FF_list } from '@utils/flags/front-features.js';
	import ShoppingList from '@components/ui/shopping-list.svelte';
</script>

<nav>
	<div>

		<a class="header-logo" href="/">
			<CommonSideLetters height="30" width="100" />
		</a>
		<div class="header-icons">
			{#if FF_list}
				<ShoppingList />
			{/if}
		</div>
	</div>
</nav>

<style>
    nav {
        width: 100%;
        height: var(--header-height);
        z-index: 10;
        position: fixed;

        div {
            background-color: var(--main-color);
            display: flex;
            justify-content: space-between;
            padding: 0.9rem 0.5rem;
            height: 100%;
        }
    }
</style>
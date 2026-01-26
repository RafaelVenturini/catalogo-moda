<div>
	<img class="mobile" alt="banner muito legal" src="/imgs/banners/mobile.webp" />
	<img class="desktop" alt="banner muito legal" src="/imgs/banners/desktop.webp" />
</div>

<style>
	div {
		width: 100%;
		margin-bottom: 1rem;

		img {
			width: 100%;
			max-height: 70vh;
		}

		@media (max-width: 800px) {
			.desktop {
				display: none;
			}
		}
		@media (min-width: 800px) {
			.mobile {
				display: none;
			}
		}
	}
</style>

<script lang="ts">
	const range = (n: number) => [...Array(n).keys()];
	const sizes = ['pp', 'p', 'm', 'g', 'gg'];

	const price = 123.45;
	let qntd = $state([0, 0, 0, 0, 0]);
	let total = $derived(price * qntd.reduce((a, b) => a + b, 0));
</script>

<div class="item-row">
	<img alt="Imagem de exemplo"
			 src="/imgs/place-holder/place-holder-1.webp" />
	<div class="item-info">
		<h2>Vestido Fulanete <span>Amarelo Girassol</span></h2>
		<div class="sizes">
			{#each sizes as size, index (index)}
				<div class="size-slot">
					{size.toUpperCase()}
					<select
						bind:value={qntd[index]}
					>
						<!--eslint-disable-next-line svelte/require-each-key-->
						{#each range(11) as i (i)}
							<option value={i}>{i}</option>
						{/each}
					</select>
				</div>
			{/each}
		</div>
		<div class="bottom-row">
			<span>ref.:1234</span>
			<p>R$ {total.toFixed(2)}</p>
		</div>
	</div>

</div>

<style>
    .item-row {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
        border-bottom: 1px solid rgba(204, 204, 204, 0.3);
    }

    span {
        opacity: 0.5;
    }

    .sizes {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;

    }

    .size-slot {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }

    .bottom-row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: var(--brand-orange);
        }
    }
</style>
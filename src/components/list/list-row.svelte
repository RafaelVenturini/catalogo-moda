<script lang="ts">
	const range = (n: number) => [...Array(n).keys()];
	const sizes = ['pp', 'p', 'm', 'g', 'gg'];

	const price = 123.45;
	let qntd = $state([0, 0, 0, 0, 0]);
	let total = $derived(price * qntd.reduce((a, b) => a + b, 0));
</script>

<div class="item-row">
	<img alt="Imagem de exemplo" src="/imgs/img-exemplo.jpg" />
	<div class="item-info">
		<h2>Vestido Fulanete <span>Amarelo Girassol</span></h2>
		<div class="sizes">
			{#each sizes as size, index}
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
		<div class="money-slot">
			<p>R$ {total.toFixed(2)}</p>
		</div>
	</div>

</div>

<style>
    .item-row {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
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

    .money-slot {
        display: flex;
        justify-content: flex-end;

        p {
            color: var(--brand-orange);
        }
    }
</style>
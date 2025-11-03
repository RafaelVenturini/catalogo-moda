<script>
	const { product, i, estampa } = $props();
</script>

<a class="product" href="/produtos/{product.slug}" id="product-{i}">
	<div class="img-wrapper">
		<img alt="Imagem do produto" src="/imgs/img-exemplo.jpg" />
		<div class="reference-badge">ref.: {product.ref}</div>
	</div>
	<div class="product-info">
		<h5>{product.nome} - {estampa.nome}</h5>
		<div class="price-and-reference">
			<h6>
				{(product.preco).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})}
			</h6>
		</div>
	</div>
</a>

<style>
    a {
        z-index: 1;
    }

    .product {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--off-white);
        border-radius: 0.4rem;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        max-width: 150px;
        max-height: 300px;
    }

    .product-info {
        width: 100%;
        padding: 0.1rem 0.2rem;
    }

    h6 {
        font-size: 1.2rem;
        color: var(--brand-orange);
        font-weight: bold;
    }

    .reference-badge {
        width: fit-content;
        border-radius: 1rem;
        background-color: var(--brand-pastel-purple);
        padding: 0.2rem 0.5rem;
        font-size: 0.8rem;
        position: absolute;
        bottom: 0.2rem;
        right: 0.2rem;
    }

    .price-and-reference {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 800px) {
        .product {
            max-width: 300px;
            max-height: 500px;
        }
    }

    .img-wrapper {
        position: relative;
        z-index: 1;
    }
</style>
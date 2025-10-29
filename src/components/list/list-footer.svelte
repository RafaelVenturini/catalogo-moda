<script>
	const qntdTotal = 100;
	const valorTotal = 1000;
</script>

<div class="list-footer">
	<div class="counter">
		Total de peças: {qntdTotal}
	</div>
	<div class="total">
		Valor total: R$ {valorTotal}
	</div>
</div>


<style>
    .list-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--brand-black);
        padding: 1rem 0;
        position: sticky;
        bottom: 0;
        background-color: var(--white);
        width: 100%;
    }
</style>
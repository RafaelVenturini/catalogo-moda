<script>
	import OtherPrints from './other-prints.svelte';
</script>

<div class="image-wrapper">
	<img alt="" class="main-image" src="/imgs/img-exemplo.jpg" />
	<div class="other-images">
		<img alt="" src="/imgs/img-exemplo.jpg" />
		<img alt="" src="/imgs/img-exemplo.jpg" />
		<img alt="" src="/imgs/img-exemplo.jpg" />
	</div>
</div>
<div>
	<h3>Outras estampas:</h3>
	<div class="other-prints">
		<OtherPrints img="/imgs/img-exemplo.jpg" link="print-1"
								 title="Estampa 1" />
		<OtherPrints img="/imgs/img-exemplo.jpg" link="print-2"
								 title="Estampa 2" />
		<OtherPrints img="/imgs/img-exemplo.jpg" link="print-3"
								 title="Estampa 3" />
		<OtherPrints img="/imgs/img-exemplo.jpg" link="print-4"
								 title="Estampa 4" />
		<OtherPrints img="/imgs/img-exemplo.jpg" link="print-5"
								 title="Estampa 5" />
	</div>
</div>


<style>
    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: fit-content;
        width: 100%;
    }

    .other-images {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .other-prints {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: fit-content;
    }
</style>
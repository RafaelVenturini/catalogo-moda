<script>
	const { link, img, title } = $props();
</script>

<a class="other-print" href="/{link}">
	<img alt="" src={img} />
	<h4>{title}</h4>
</a>
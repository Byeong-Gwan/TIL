<script>
	let name = 'world';
	let age = 85;
	setTimeout(() => {
		name = 'Heropy',
		age = 36
	}, 3000);
	
	function assign() {
		name = 'Beyong-gwan',
		age = 33
	};
</script>

<h1>Hello {name}!</h1>
<h2 class={age < 85 ? 'active' : ''}>
	{age}
</h2>
<img src="" alt = {name} />
<input type="text" bind:value={name} />
<button on:click = {assign}>
	Assion
</button>

<style>
	h1 {
		color: red;
	}
	
	.active {
		color: blue;
	}
</style>

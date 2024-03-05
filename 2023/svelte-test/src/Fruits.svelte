<script>
	let name = 'world';
	let toggle = false;
	let fruitNum = false;
	let FruitsName = 'Fruits'
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
	
	function deleteFruit() {
		fruits = fruits.slice(1);
	}
</script>
<button on:click={() => {toggle = !toggle}}>
	Toggle
</button>
{#if toggle}
	<h1>Hello {name}!</h1>
{:else}
	<div>
		No name!	
	</div>
{/if}

<h1>
	Hello {FruitsName}!
</h1>

<button on:click = {() => {fruitNum = !fruitNum}} >
	Fruits!!
</button>
{#if fruitNum}
<ul>
	{#each fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>
{/if}

<button on:click = {deleteFruit}>
	Eat it!
</button>

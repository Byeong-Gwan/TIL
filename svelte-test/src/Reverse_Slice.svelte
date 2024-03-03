<script>
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>

<h2>
	Fruits
</h2>
<ul>
	{#each fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<h2>
	Fruits reverse
</h2>
<!--
    fruits.reverse() 이렇게 사용하게되면 원본 데이트를 변경시킨다.
    그래서 [...fruits].reverse() 이렇게 '...' 전개 연산자를 통해서 
    사본 데이터를 만들어 사본 데이터만 접근하고 원본 데이터는 변형 없이 사용하면 된다. 
-->
<ul>
	{#each [...fruits].reverse() as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<h2>
	Fruits slice - 2
</h2>
<ul>
	{#each fruits.slice(-2) as fruit}
		<li>{fruit}</li>
	{/each}
</ul>
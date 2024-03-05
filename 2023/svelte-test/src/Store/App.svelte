<script>
	import {storeName} from './store.js';
	import Parent from './Parent.svelte';
	
	let name = 'World';	
// 	console.log(storeName);
// 	console.log($storeName);
	$storeName = name; // store 객체의 데이터로 사용
</script>

<h1>
	Hello {name}!
</h1>
<Parent />

<script>
	import Fruits from './Fruits.svelte';
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>
<!--
    fruits = {fruits} 불러오고자 하는 Props과 이름이 같으면
    fruits = 는 생략이 가능하다.
-->
<Fruits {fruits} />
<Fruits {fruits} reverse />
<Fruits {fruits} slice="-2" />
<Fruits {fruits} slice="0, 3" />


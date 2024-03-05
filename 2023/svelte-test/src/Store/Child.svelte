
<script>
	import {storeName} from './store.js';
</script>

<div>
	Child {$storeName}
</div>

<!--
    svelte에서 부모의 자식의 자식에게 데이터를 전달하기 위해서
    불필요한 중간 자식에게 전달 없이 바로 마지막 자식에게 부모의 데이터를 전달하기 위해 store 라이브러리를 사용한다.
    svelte는 다른 프레임워크와 다르게 store가 내장되어 있다.
-->
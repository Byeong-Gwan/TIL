<script>
	export let todos;
	export let todo;
	
	let isEdit = false;
	let title = '';
	
	function onEdit() {
		isEdit = true;
		title = todo.title;
	}
	
	function offEdit() {
		isEdit = false;
	}
	
	function updateTodo() {
		todo.title = title;
		offEdit();
	}
	
	function deleteTodo() {
		$todos = $todos.filter(t => t.id !== todo.id);
// 		console.log(todos);
	}
</script>

{#if isEdit}
	<div>
		<input bind:value={title}
					type="text"
					on:keydown={(e) => {e.key === 'Enter' && updateTodo()}}/>
		<button on:click={updateTodo}>
			ok
		</button>
		<button on:click={offEdit}>
			cancel
		</button>
	</div>
{:else}
	<div>
		{todo.title}
		<button on:click={onEdit}>
			Edit
		</button>
		<button on:click={deleteTodo}>
			Delete
		</button>
	</div>
{/if}

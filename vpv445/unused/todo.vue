<template>
  <div class="todos">
    <input v-model="message" placeholder="New Todo" />
    <button
      @click="
        $pouch.post('todos', { message: message });
        message = '';
      "
    >
      Save Todo
    </button>
    <div v-for="todo in todos">
      <input v-model="todo.message" @change="$pouch.put('todos', todo);" />
      <button @click="$pouch.remove('todos', todo);">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  // VuePouch adds a `pouch` config option to all components.
  pouch: {
    // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
    todos: {
      /*empty selector*/
    }
  },
  created: function() {
    // Send all documents to the remote database, and stream changes in real-time
    this.$pouch.sync("todos", "http://localhost:5984/todos");
  }
};
</script>

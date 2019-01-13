<template>
  <div id="app">
    <input type="text" v-model="searchTerm" placeholder="Enter here...">
    <button v-on:click="getResults(searchTerm)">Find</button>
    <button v-on:click="clear">Clear</button>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
    	return {}
    }
  }
</script>

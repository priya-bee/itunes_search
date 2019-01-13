<template>
  <div id="app">
    <input type="text" v-model="searchTerm" placeholder="Enter here..."/>
    <button v-on:click="displayResults(searchTerm)">Find</button>
    <button v-on:click="clear">Clear</button>
    <div>{{searchTerm}}</div>
    <div>{{output}}</div>
  </div>
</template>

<script>
  import SearchApi from '../../services/search'

  export default {
    name: 'SearchBar',
    data: function() {
    	return {
        searchTerm: '',
        output: []
      }
    },
    methods: {
      displayResults(s){
        var myScope = this; // save the scope since we set output in a callback
        SearchApi.getResults(s).then(res =>{
          this.output = res; // TO DO: PARSE AND DISPLAY THIS DATA
          // parseData(res.data);
        });
      },

      clear(){
        searchTerm = ''
      }
    }
  }
</script>

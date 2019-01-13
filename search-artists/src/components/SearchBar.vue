<template>
  <div id="app">
    <input type="text" v-model="searchTerm" placeholder="Enter here..."/>
    <button v-on:click="displayResults(searchTerm)">Find</button>
    <button v-on:click="clear">Clear</button>
    <div>{{searchTerm}}</div>

    <div v-if="output.songs">
      SONGS
      <MediaComponent :mediaData="output.songs"></MediaComponent>
    </div>

    <div v-if="output.books">
      BOOKS
      <MediaComponent :mediaData="output.books"></MediaComponent>
    </div>

    <div v-if="favorites">
      FAVORITES 
      <ul>
        <li v-for="fav in favorites">{{fav}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import SearchApi from '../../services/search'
  import MediaComponent from './Media'
  export default {
    name: 'SearchBar',
    data: function() {
    	return {
        searchTerm: '',
        output: [],
        favorites: null
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
        this.searchTerm = ''
      }
    },
    components: {
      MediaComponent
    }
  }
</script>

<style>
  .results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .media{
    display: flex;
    flex-direction: column;

    .li{
            display: flex;
            flex-direction: column;

    }
  }
</style>

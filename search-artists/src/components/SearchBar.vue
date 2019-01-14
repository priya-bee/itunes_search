<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Enter here..."/>
    <button v-on:click="displayResults(searchTerm)">Find</button>
    <button v-on:click="clear">Clear</button>
    <div v-if="searchTerm">Press Find to display results for: {{searchTerm}}</div>
    <div class="resultsbox">
      <div v-if="output.songs && output.songs.length > 0">
        SONG RESULTS: {{output.songs.length}}
        <MediaComponent @favorite-added="addToFavorites" :mediaData="output.songs"></MediaComponent>
      </div>

      <div v-if="output.books && output.books.length > 0">
        BOOKS RESULTS: {{output.books.length}}
        <MediaComponent @favorite-added="addToFavorites" :mediaData="output.books"></MediaComponent>
      </div>

      <div v-if="favorites && favorites.length > 0">
        FAVORITES 
        <ul>
          <li v-for="fav in favorites" class="favbox" :key = "fav.id">
            <img :src="fav.artwork" width="100px" height="100px" /> 
              <div class="infobox">
                <div>id: {{fav.id}}</div>
                <div>artist name: {{fav.artistName}}</div>
                <div>track name: {{fav.trackName}}</div>
                <div>genre: {{fav.genre}}</div>
                <div>url: <a :href="fav.url">{{fav.url}}</a></div>
                <button v-on:click="addToFavorites(fav)">Add to favorite</button>
            </div>
          </li>
        </ul>
      </div>
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
        favorites: [],
        testName: ''
      }
    },
    mounted(){
      if(localStorage.getItem('favorites')){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
      }
    },
    methods: {
      displayResults(s){
        var myScope = this; // save the scope since we set output in a callback
        SearchApi.getResults(s).then(res =>{
          myScope.output = res; 
        });
      },

      clear(){
        this.searchTerm = '';
        this.output = []
      },

      addToFavorites(item){
        this.favorites.push(item);
      }
    },
    components: {
      MediaComponent
    },
    watch: {
      favorites: {
        handler(){
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        deep: true       
      }

    }
  }
</script>

<style>
  .resultsbox {
    display: flex;
    /*flex-wrap: wrap;*/
    justify-content: center;
    /*align-items: center;*/
    flex-direction: row;
  }
  .favbox{
    border: 2px solid black;
    display:flex;
    flex-direction: row;
  }
</style>

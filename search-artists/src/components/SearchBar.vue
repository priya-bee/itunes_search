<!-- Required fields: id, name, artwork, genre, url -->
<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Enter here..."/>
    <button v-on:click="displayResults(searchTerm)">Find</button>
    <button v-on:click="clear">Clear</button>
    <div v-if="searchTerm">Press Find to display results for: {{searchTerm}}</div>

    <div class="resultsbox">
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
            </div>
          </li>
        </ul>
      </div>
      <div class="mediabox">
        <div v-if="output.songs && output.songs.length > 0">
          SONG RESULTS: {{output.songs.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.songs"></MediaComponent>
        </div>

        <div v-if="output.books && output.books.length > 0">
          BOOKS RESULTS: {{output.books.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.books"></MediaComponent>
        </div>

        <div v-if="output.albums && output.albums.length > 0">
          ALBUMS RESULTS: {{output.albums.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.albums"></MediaComponent>
        </div>

        <div v-if="output.coachedAudios && output.coachedAudios.length > 0">
          COACHED AUDIOS RESULTS: {{output.coachedAudios.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.coachedAudios"></MediaComponent>
        </div>

        <div v-if="output.featureMovies && output.featureMovies.length > 0">
          FEATURE MOVIES RESULTS: {{output.featureMovies.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.featureMovies"></MediaComponent>
        </div>

        <div v-if="output.interactiveBooklets && output.interactiveBooklets.length > 0">
          INTERACTIVE BOOKLETS RESULTS: {{output.interactiveBooklets.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.interactiveBooklets"></MediaComponent>
        </div>

        <div v-if="output.musicVideos && output.musicVideos.length > 0">
          MUSIC VIDEOS RESULTS: {{output.musicVideos.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.musicVideos"></MediaComponent>
        </div>

        <div v-if="output.podcastEpisodes && output.podcastEpisodes.length > 0">
          PODCAST RESULTS: {{output.podcastEpisodes.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.podcastEpisodes"></MediaComponent>
        </div>

        <div v-if="output.softwarePackages && output.softwarePackages.length > 0">
          SOFTWARE PACKAGES RESULTS: {{output.softwarePackages.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.softwarePackages"></MediaComponent>
        </div>

        <div v-if="output.tvEpisodes && output.tvEpisodes.length > 0">
          TV RESULTS: {{output.tvEpisodes.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.tvEpisodes"></MediaComponent>
        </div>

        <div v-if="output.artists && output.artists.length > 0">
          ARTISTS RESULTS: {{output.artists.length}}
          <MediaComponent @favorite-added="addToFavorites" :mediaData="output.artists"></MediaComponent>
        </div>
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
        // when the favorites array updates, cache to localstorage to save browser data
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .mediabox{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .favbox{
    border: 2px solid black;
    display:flex;
    flex-direction: row;
  }
</style>

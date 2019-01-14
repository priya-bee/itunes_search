<!-- 

Lightweight iTunes Catalog

Author: Priya Bhatnagar (priya.95.b@gmail.com)

This application takes the users search term and calls the search.js api located in the services folder
It returns multiple sections of media
Each media has the ability to be added to a Favorites section which will be displayed at the top
Favorites are persistent and are cached in the browser using Vue's localStorage which acts as client side storage 
-->
<template>
  <div id="app">
    <SearchBar></SearchBar>
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar.vue'
  export default {
    name: 'app',
    components: {
      SearchBar
    }
  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

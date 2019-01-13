<template>
	<div v-if="mediaData"> 
	        <ol>
	          <li v-for="item in mediaData">
	            id: {{item.id}}
	            artist name: {{item.artistName}}
	            track name: {{item.trackName}}
	            genre: {{item.genre}}
	            url: <a :href="item.url">{{item.url}}</a>
	            <img :src="item.artwork"/> 
	            <button v-on:click="addToFavorites(item)">Add to favorite</button>
	          </li>
	        </ol>
	</div>	
</template>

<script>
	export default{
		props: ['mediaData'],
		data(){
			return {

			}
		},
		methods: {
			addToFavorites(item){
				this.$emit('favorite-added', item)
			}
		}
	}
	
</script>

<style>
</style>
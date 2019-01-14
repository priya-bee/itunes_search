<template>
	<div v-if="mediaData"> 
		<ol>
			<li v-for="item in mediaData" class="mainbox" :key = "item.id"> <!-- mainbox so pic and info are side by side -->
				<img :src="item.artwork" width="100px" height="100px" />
				<div class="infobox"> <!-- infobox for row view of data -->
					<div>id: {{item.id}}</div>
					<div>artist name: {{item.artistName}}</div>
					<div>track name: {{item.trackName}}</div>
					<div>genre: {{item.genre}}</div>
					<div>url: <a :href="item.url">{{item.url}}</a></div>
					<button v-on:click="addToFavorites(item)">Add to favorites</button>
				</div>
			</li>
		</ol>
	</div>	
</template>

<script>
	export default{
		props: ['mediaData'], // receive data from parent component to display
		data(){
			return {

			}
		},
		methods: {
			addToFavorites(item){
				this.$emit('favorite-added', item) // emit to parent that an item needs to be favorited
			}
		}
	}
	
</script>

<style>
.mainbox{
	border: 2px solid black;
	display:flex;
	flex-direction: row;
}
.infobox{
	width: 50%;
	flex-direction: column;
}
</style>
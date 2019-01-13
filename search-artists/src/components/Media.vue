<template>
	<div v-if="mediaData"> 
	        <ul>
	          <li v-for="item in mediaData">
	            id: {{item.id}}
	            name: {{item.name}}
	            genre: {{item.genre}}
	            url: <a :href="item.url">{{item.url}}</a>
	            <img :src="item.artwork"/> 
	            <button>Add to favorite</button>
	          </li>
	        </ul>
	</div>	
</template>

<script>
	export default{
		props: ['mediaData'],
		data(){
			return {

			}
		}
	}
	
</script>

<style>
</style>
import axios from 'axios'
//const url = 'https://itunes.apple.com/search?term='

// TO DO: debug CORS policy err

// axios.defaults.withCredentials = true;
// const config = {
//           headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
//             'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           }
// }
export default{
	parseData(data){
		var output = {
			'songs' : [],
			'books' : [],
			'albums' : [],
			'coachedAudios' : [],
			'featureMovies' : [],
			'interactiveBooklets' : [],
			'musicVideos' : [],
			'podcastEpisodes' : [],
			'softwarePackages' : [],
			'tvEpisodes' : [],
			'artists' : []
		};
		// var myScope = this;
		data.results.forEach(function (r){

			var addMe = {
				id : r['trackId'],
				name: r['artistName'],
				genre: r['primaryGenreName'],
				artwork: r['artworkUrl100'],
				url: r['trackViewUrl']
			}
			if(r['kind'] == 'song') output['songs'].push(addMe);
			else if(r['kind'] == 'book') output['books'].push(addMe);
			else if(r['kind'] == 'album') output['albums'].push(addMe);
			else if(r['kind'] == 'coached-audio') output['coachedAudios'].push(addMe);
			else if(r['kind'] == 'feature-movie') output['featureMovies'].push(addMe);
			else if(r['kind'] == 'interactive-booklet') output['interactiveBooklets'].push(addMe);
			else if(r['kind'] == 'music-video') output['musicVideos'].push(addMe);
			else if(r['kind'] == 'podcast-episode') output['podcastEpisodes'].push(addMe);
			else if(r['kind'] == 'software-package') output['softwarePackages'].push(addMe);
			else if(r['kind'] == 'tv-episode') output['tvEpisodes'].push(addMe);
			else if(r['kind'] == 'artist') output['artists'].push(addMe);

		});
		return output;
	},

	getResults: function(s){
		// var myScope = this;
		// axios.get('http://itunes.apple.com/search?term=' + s).then(response => {
		// 	// console.log(response.data.results)
		// 	// return response.data.results;
		// 	// myScope.returnme = response.data.results;
		// 	// console.log(myScope.returnme);
		// }, response => {
		// 	// error callback
		// });

		return axios.get('http://itunes.apple.com/search?term=' + s).then(res => { // this returns a promise
			return this.parseData(res.data);
		});
	}
}
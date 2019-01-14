import axios from 'axios'

const url = 'https://itunes.apple.com/search?term=';



// all the 'kinds' from itunes api:
// book, 
// album, 
// coached-audio, 
// feature-movie, 
// interactive- booklet, 
// music-video, 
// pdf podcast, 
// podcast-episode, 
// software-package, 
// song, 
// tv-episode, 
// artist


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

		data.results.forEach(function (r){

			var addMe = {
				id : r['trackId'],
				artistName: r['artistName'],
				trackName: r['trackName'],
				genre: r['primaryGenreName'],
				artwork: r['artworkUrl100'],
				url: r['trackViewUrl']
			}
			
			if(r['kind'] == 'book') output['books'].push(addMe);
			else if(r['kind'] == 'album') output['albums'].push(addMe);
			else if(r['kind'] == 'coached-audio') output['coachedAudios'].push(addMe);
			else if(r['kind'] == 'feature-movie') output['featureMovies'].push(addMe);
			else if(r['kind'] == 'interactive-booklet') output['interactiveBooklets'].push(addMe);
			else if(r['kind'] == 'music-video') output['musicVideos'].push(addMe);
			else if(r['kind'] == 'podcast-episode') output['podcastEpisodes'].push(addMe);
			else if(r['kind'] == 'software-package') output['softwarePackages'].push(addMe);
			else if(r['kind'] == 'song') output['songs'].push(addMe);
			else if(r['kind'] == 'tv-episode') output['tvEpisodes'].push(addMe);
			else if(r['kind'] == 'artist') output['artists'].push(addMe);


		});
		return output;
	},

	getResults: function(s){
		if(s.toLowerCase() == "hello"){
			s += '.';
		}
		return axios.get(url+s, {
			method: '*',
			mode: 'no-cors',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}).then(res => { // this returns a promise
			return this.parseData(res.data);
		});

	}
}
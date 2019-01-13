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
		var output = [];
		// var myScope = this;
		data.results.forEach(function (r){
			var addMe = {
				kind: r['kind'],
				id : r['trackId'],
				name: r['artistName'],
				genre: r['primaryGenreName'],
				artwork: r['artworkUrl30'],
				url: r['trackViewUrl']
			}
			// console.log(addMe);
			output.push(addMe);
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
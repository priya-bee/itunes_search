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
	// var myScope = this;
	getResults: function(s){
		console.log(s);
		axios.get('http://itunes.apple.com/search?term=' + s).then(response => {
			console.log(response.data.results)
			return response.data.results;
		}, response => {
			// error callback
		});
	}
}
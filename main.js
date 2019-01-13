// Create a Vue instance
var app = new Vue({ // options go here 
	el: '#app', // plug our instance of the element in DOM with the id 'app'
	data: {
		searchTerm: '',
		myMedia: ''
	},
	methods: {
	    getResults: function(s){
	    	var myScope = this;
		    fetch('https://itunes.apple.com/search?term='+s)
		      .then( response => response.json()) 
		      .then((data) => {
		      	myScope.myMedia = data; // parse this stuff
		      })
		},
		// clear the cache and the view
		clear: function(){
			this.myMedia = '';
			this.searchTerm = '';
		}
  	}
})

// some changes

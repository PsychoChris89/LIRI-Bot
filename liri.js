//-------------------VARIABLES----------------------------------------------------

//Loading modules
var Twitter = require('twitter');
var keys = require("./keys.js");
var tweetsArray = [];
var command = process.argv[2];



var twitterKeys = keys.twitterKeys;

console.log(twitterKeys.consumer_key);

var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});


//-----------------------FUNCTIONS-----------------------------------------------

function getMyTweets(){

	var params = {count: 20, exclude_replies:true, trim_user:true};
		client.get('statuses/home_timeline', params, function(error, tweets, response) {
				if (!error) {
					//console.log(tweets);
					tweetsArray = tweets;

					for(i=0; i<tweetsArray.length; i++){
						console.log("Created at: " + tweetsArray[i].created_at);
						console.log("Text: " + tweetsArray[i].text);
						console.log('--------------------------------------');
					}
				}
	});

}




//-------------------------MAIN PROCESS-------------------------------------------

switch(command){

	case 'my-tweets':
		getMyTweets();
	case 'spotify-this-song':
	case 'movie-this':
	case 'do-what-it-says':
	default: 
		console.log("Invalid command. Please type any of the following commnds: my-tweets spotify-this-song movie-this or do-what-it-says")
}
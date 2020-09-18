let movies = [
	{
		name: 'In Brudges',
		rating: 5,
		isWatched: true
	},
	{
		name: 'Frozen',
		rating: 4.5,
		isWatched: false
	},
	{
		name: 'Mad Max',
		rating: 5,
		isWatched: true
	},
	{
		name: 'Les Miserables',
		rating: 3.5,
		isWatched: false
	}
];

/* movies.forEach(function(movie) {
	let result = 'You have ';
	if (movie.isWatched) {
		result += 'watched ';
	} else {
		result += 'not seen ';
	}
	result += '"' + movie.title + '" ';
	result += movie.rating + ' stars';
	console.log(result);
}); */

function buildString(movie) {
	let result = 'You have ';
	if (movie.isWatched) {
		result += 'watched ';
	} else {
		result += 'not seen ';
	}
	result += '"' + movie.title + '" ';
	result += movie.rating + ' stars';
	return result;
}
movies.forEach(function(movie) {
	console.log(buildString(movie));
});

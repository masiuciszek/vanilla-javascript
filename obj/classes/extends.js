

class MovieList extends Array{
    constructor(name,...items) {
        super(...items)
        this.name = name
    }
    add(movie){
        return this.push(movie);
    }
    ranking(limit) {
        return this.sort((a,b) => (a.star > b.star ? -1 : 1)).slice(0,limit)
    }
}

const masiusMovieList = new MovieList(
    {name: 'avatar', star: 5},
    {name: 'harryPotter', star: 10},
    {name: 'Toy Story', star: 8},
    {name: 'StarWars', star: 9},
    {name: 'Crank', star: 7},
);

    masiusMovieList.add({name:'Inception', star: 9.9});

    console.log(masiusMovieList);
    console.log(masiusMovieList.ranking(10));


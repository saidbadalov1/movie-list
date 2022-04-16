import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';


class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ""
    }

    



    //Fetch Api

    // async componentDidMount(){
    //     const response = await fetch("http://localhost:3000/movies");
    //     const data = await response.json();
    //     this.setState({movies: data});
    // }


    // Axios Api

    async componentDidMount() {
        const response = await axios.get("http://localhost:3001/movies")
        this.setState({ movies: response.data })
    }



    //Fetch apisiz

    // kinoSil = (movie) => {
    //     const yeniKinoListi = this.state.movies.filter(
    //         kino => kino.id !== movie.id
    //     )


    // this.setState(state => ({
    //     movies: yeniKinoListi
    // }))
    // }


    //Fetch api ile ->

    // kinoSil = async (movie) => {
    //     const baseUrl = (`http://localhost:3001/movies/${movie.id}`)
    //     await fetch(baseUrl, {
    //         method: "DELETE"
    //     } )
    //     const yeniKinoListi = this.state.movies.filter(
    //         kino => kino.id !== movie.id
    //     )


    // this.setState(state => ({
    //     movies: yeniKinoListi
    // }))
    // }



    //Do it 

    // kinoSil = async (movie) => {

    //     const baseUrl = (`http://localhost:3001/movies/${movie.id}`)
    //     await fetch(baseUrl,{
    //         method: "DELETE"
    //     });

    //     const yeniKinoListi = this.state.movies.filter(
    //         kino => kino.id !== movie.id 
    //     );

    //     this.setState(state => ({
    //         movies: yeniKinoListi
    //     }))


    // }

    //Axios ile

    kinoSil = async (movie) => {

        axios.delete(`http://localhost:3001/movies/${movie.id}`)

        const yeniKinoListi = this.state.movies.filter(
            kino => kino.id !== movie.id
        );

        this.setState(state => ({
            movies: yeniKinoListi
        }))


    }



    searchMovie = (event) => {

        this.setState({ searchQuery: event.target.value })

    }


    addMovie = async (movie) => {
        await axios.post(`http://localhost:3001/movies/`, movie)
        this.setState (state => ({
            movies: state.movies.concat([movie])



        }))
        window.location.href = "http://localhost:3000";
    }


    render() {

        let filteredMovies = this.state.movies.filter((movie) => {

            return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1

        }
        )


        return (



            <div className="container ">

                            <div className="row">

                                <div className="col-12">
                                <SearchBar 
                                searchMovieProp = {this.searchMovie}
                                />
                                </div>
                            
                            </div>


                             <MovieList
                                movies={filteredMovies}
                                kinoSilmek = {this.kinoSil}
                            />

                        <AddMovie 
                        onAddMovie = {(movie) => {this.addMovie(movie)}}

                        />

            </div>


        );
    }

};

export default App;
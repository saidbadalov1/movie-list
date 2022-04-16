import React from 'react';


const MovieList = (props) => {

    // function handleClick() {
    //     console.log('clicked');

    // }

    return (
        <div className="row">

            {props.movies.map((movie, key) => (
            
                    <div className="float-none col col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm" style={{ width: "18rem" }}>
                            <img src={movie.imageURL} alt="" className='card-img-top' />
                            <div className="card-body">
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={() => props.kinoSilmek(movie)} className='btn bg-danger text-white'>Delete</button>
                                    <h3><span className="badge rounded-pill bg-success">{movie.rating}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
           


            ))}

        </div>
    )
}


export default MovieList
import React from 'react'


class SearchBar extends React.Component {





    formSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (

            <form onSubmit={this.formSubmit}>
                <div className="input-group mt-2 mb-5">
                    <div className="col-8">
                        <input

                            onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control"
                            placeholder="Search a movie"

                        />
                    </div>

                    <div className="col-4">

                        <button type="button" className="float-end btn btn-outline-success">Add Movie</button>

                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar
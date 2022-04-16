import React from 'react'
import serialize from 'form-serialize'

class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const yeniFilm = serialize(e.target, { hash: true });
        this.props.onAddMovie(yeniFilm);
    }


    render() {

        return (
            
            <div className="row">
                <hr></hr>
                <div className="col-12">
                    <form onSubmit={this.handleFormSubmit}>
                        <h2 className='display2 mb-4'>Add Movie</h2>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Movie Name</label>
                            <input type="text" className="form-control" id="movieName" name='name'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputRating" className="form-label">Movie Rating</label>
                            <input type="text" className="form-control" id="inputRating" name='rating'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">Movie Poster (url)</label>
                            <input type="text" className="form-control" id="inputImage"
                            name='imageURL'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputOverview" className="form-label">Movie Overview</label>
                            <textarea style={{height: "13rem"}} className="form-control" id="inputOverview" name='overview'/>
                        </div>
                        <button type="submit" className="mb-3 btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>

        )

    }

}

export default AddMovie
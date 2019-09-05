let addMovie = (req, res) => {
    let {title, genre, is_good, rating, movie_year} = req.body;
    let db = req.app.get('db');
    db.addMovie(title, genre, is_good, rating, movie_year).then(response => {
        console.log(response);
        res.sendStatus(200);
    })
}

let getMovie = (req, res) => {
    // if there is a rating query, we will send back all the movies with that rating
    // let {title, genre, is_good, rating, movie_year} = req.body;
    let db = req.app.get('db')
    if(req.query.rating !== undefined) {
        db.getMovieByRating(req.query.rating).then(response => {
            console.log(response)
            res.status(200).json(response);
        })
    } else if(req.query.is_good !== undefined) {
        console.log(typeof is_good)
        db.getMovieByIsGood(req.query.is_good).then(response => {
            console.log(response)
            res.status(200).json(response);
        })
    }
}

module.exports = {
    addMovie,
    getMovie
}

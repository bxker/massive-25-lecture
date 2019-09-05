INSERT INTO movies
(title, genre, is_good, rating, movie_year)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;
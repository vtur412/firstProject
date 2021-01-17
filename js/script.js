const numberOfFFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

const personalMovieDB = {
    count: numberOfFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из просмотренных фильмов', ''),
    b = prompt('Оцени его по шкале от 1 до 10',''),
    c = prompt('Один из просмотренных фильмов', ''),
    d = prompt('Оцени его по шкале от 1 до 10','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

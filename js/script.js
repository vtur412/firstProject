
const numberOfFFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

const personalMovieDB = {
    count: numberOfFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for(let i = 0; i < 2; i++){
    const a = prompt('Один из просмотренных фильмов', ''),
          b = prompt('Оцени его по шкале от 1 до 10','');
    
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log ('done');
    }else{
       console.log('error');
       i--;
    }
}

if(personalMovieDB.count < 10){
    console.log('Просмотренно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count >= 30){
    console.log('Вы киноман!');
}else{console.log('Произошла ошибка');}

console.log(personalMovieDB);

let numberOfFFilms;

function start(){
    numberOfFFilms = prompt('Сколько фильмов ты уже посмотрел?', '');

    while(numberOfFFilms == '' || numberOfFFilms == null || isNaN(numberOfFFilms)){
        numberOfFFilms = prompt('Сколько фильмов ты уже посмотрел?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
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
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотренно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман!');
    }else{console.log('Произошла ошибка');}
}

// detectPersonalLevel();

function showMyDB(hidden){
   if(!hidden){
       console.log(personalMovieDB);
   }else{console.log('Это приватное свойство!');}
}

function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`,''));
    }
}

showMyDB(personalMovieDB.privat);
writeYourGenres();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        this.count = prompt('Сколько фильмов ты уже посмотрел?', '');
    
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = prompt('Сколько фильмов ты уже посмотрел?', '');
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из просмотренных фильмов', ''),
                  b = prompt('Оцени его по шкале от 1 до 10','');
            
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                this.movies[a] = b;
                console.log ('done');
            }else{
               console.log('error');
               i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(this.count < 10){
            console.log('Просмотренно мало фильмов');
        } else if(this.count >= 10 && this.count < 30){
            console.log('Вы классический зритель');
        }else if(this.count >= 30){
            console.log('Вы киноман!');
        }else{console.log('Произошла ошибка');}
    },
    showMyDB: function (hidden){
        if(!hidden){
            console.log(this);
        }else{console.log('Это приватное свойство!');}
     },
     writeYourGenres: function (){
        for(let i = 1; i<=3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if(genre != null && genre != ''){
                this.genres.push(genre);
            }else{
                i--;
            }  
        }
        this.genres.forEach(
            (item, i) => {
                console.log(`Любимый жанр #${i+1} - это ${item}`);
            }
        );
    },
    toggleVisibleMyDb: function(){
       this.privat = !this.privat;
       return this.privat;
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();



















 

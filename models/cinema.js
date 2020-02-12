const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.showTitles = function(){
  let result = this.films.map((film) => {
    return film.title
  });
  return result;
};

Cinema.prototype.findByTitle = function(title){
  let foundFilm = this.films.find((film) => {
    return film.title === title
  });
  return foundFilm;
};

// Cinema.prototype.filterByGenre = function(genre){
//   let films = this.films.filter((film) => {
//     return film.genre === genre
//   });
//   return films;
// };

Cinema.prototype.areThereFilms = function(year){
  let result = this.films.some((film) => {
    return film.year === year
  });
  return result;
};

Cinema.prototype.checkRunTime = function(time){
  let result = this.films.every((film) => {
    return film.length > time
  });
  return result;
};

Cinema.prototype.totalRunningTime = function(){
  let totalTime = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return totalTime;
};

Cinema.prototype.filmsByProperty = function(property, value){
  let films = this.films.filter((film) => {
   const filmProperty = Object.getOwnPropertyDescriptor(film, property);
   return filmProperty.value === value;
  });
  return films;
};


module.exports = Cinema;

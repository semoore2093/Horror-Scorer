const APIKey = "8e8d1fb7683b829d728e204db461103b"
const movieCard = document.querySelector("#movie-card")

var fetchRequest = function() {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=8e8d1fb7683b829d728e204db461103b&language=en-US&sort_by=popularity.desc&with_genres=27')
    .then(function(response) {
      response.json().then(function(data) {          
      var movieArr = [];
    console.log(data.results)      
   
  // capture data from fetch
    for (var i = 0; i < 20 ; i++) {      
        var movieObj = {          
            title: data.results[i].title,
            path: data.results[i].poster_path,
            overview: data.results[i].overview,
            date: data.results[i].release_date                  
        };
    // console.log(movieObj);
    movieArr.push(movieObj);
    };
    // console.log(movieArr)
    for (var j = 0; j < movieArr.length; j++) {

        var cardColumn = document.createElement("div")
        cardColumn.classList.add("col-md-6", "col-lg-4", "col-xl-3", "card-column");

        var card = document.createElement("div", "card");
        card.classList.add("card");

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "p-2");
        cardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movieArr[j].path})`;
        cardBody.style.backgroundRepeat = "no-repeat";
        
        // var cardTitle = document.createElement("h3");
        // cardTitle.classList.add("card-title", "text-white");
        // cardTitle.textContent = movieArr[j].title;

        //console.log(cardTitle);
             
        
        

        // cardBody.append(cardTitle)
        card.append(cardBody)
        cardColumn.append(card)
        movieCard.append(cardColumn)
    }
  });

});

}
  
  
fetchRequest();
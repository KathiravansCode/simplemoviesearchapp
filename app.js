let api="http://www.omdbapi.com/?i=tt3896198&apikey=5f596674&t="
let movieName=document.getElementById('movieName');
let directorName=document.getElementById('directorName');
let actors=document.getElementById('actors');
let desc=document.getElementById('desc');
let movieTime=document.getElementById("movieTime");
let languages=document.getElementById('languages');
let imdbRatings=document.getElementById('imdb-ratings');
let searchBtn=document.getElementById('search-btn')
let movieImg=document.getElementById('movie-img');
let suggestion=document.getElementById('sugg');
let displayContainer=document.getElementById('display-container')
let notFound=document.getElementById('not-found');
function search(){
    let movieInput=document.getElementById('movie-input').value;
    let query=api+movieInput
    fetch(query).then((data)=>{
        return data.json();
    }).then((result)=>{
        if(result.Error=="Movie not found!"){
            displayContainer.classList.add('hidden') 
            notFound.classList.remove('hidden')
        }
        else{
            notFound.classList.add('hidden')
        displayContainer.classList.remove('hidden')
        movieName.innerText=result.Title;
        directorName.innerText=result.Director;
        movieTime.innerText=result.Runtime;
        actors.innerText=result.Actors;
        desc.innerText=result.Plot;
        imdbRatings.innerText=result.imdbRating;
        languages.innerText=result.Language;
        movieImg.src=result.Poster;
        if(result.imdbRating<6.8){
            suggestion.innerText="Good movie to watch!"
        }
        else if(result.imdbRating>=7.1&&result.imdbRating<=8){
            suggestion.innerText="Awesome to watch"
        }
        else if(result.imdbRating>8){
            suggestion.innerText="Must watch!Dont miss it!"
        }
        else{
            suggestion.innerText="Not much great";
        }
    }
    })

}

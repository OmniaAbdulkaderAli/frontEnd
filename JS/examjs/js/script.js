constructor( private _HttpClient : HttpClient) {
    // key f1aca93e54807386df3f6972a5c33b50

"use strict"

let allMovies = document.getElementById('allMovies')
let oneWord = document.querySelector('#word');
let movieInfo = document.querySelector('.movieInfo');
let card = ` `;
let posts = []
let trim = oneWord.value;






function showMovies() {


    let xml = new XMLHttpRequest();
    xml.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k')
    xml.send();
    xml.addEventListener('readystatechange', function () {

        if (xml.readyState == 4 && xml.status == 200) {
            posts = JSON.parse(xml.response).results;
        }

        allMovie();
    })

}
showMovies()

function allMovie() {

    for (let i = 0; i < posts.length; i++) {
        card += `<div class="col-sm-12 col-lg-4 mt-5  ">

    <div class=" post shadow ">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
        <div class="layer d-flex  flex-column text-center justify-content-center bg-white opacity-75 text-black ">
        
        
        
            <h1 > ${posts[i].title}</h1>
            <p>  ${posts[i].overview} </p>
            <h6> rate: ${ posts[i].vote_average}</h6>
            <h6> ${posts[i].release_date}</h6>

        </div>
    </div>

</div>`

        movieInfo.innerHTML = card;
    }
}



function searchMovie() {

    let card = ``;

    for (let i = 0; i < posts.length; i++) {

        if (posts[i].original_title.includes(allMovies.value)) {

            card += `<div class="col-sm-12 col-lg-4 mt-5">

            <div class=" post shadow ">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
                <div class="layer d-flex  flex-column text-center justify-content-center bg-white opacity-75 text-black ">
                
                    <h1 > ${posts[i].title}</h1>
                    <p>  ${posts[i].overview} </p>
                    <h6> rate: ${ posts[i].vote_average}</h6>
                    <h6> ${posts[i].release_date}</h6>
        
                </div>
            </div>
        
        </div>`


        }
        movieInfo.innerHTML = card;

    }
}


allMovies.addEventListener('keydown', searchMovie)


async function fetchSearch() {

    let card = '';
    if (oneWord.value.length > 1) {
        let movies = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&query=${oneWord.value}&page=1&include_adult=false`);
        let data = await movies.json();

        data = await data.results
        console.log(data)


        for (let i = 0; i <= data.length; i++) {


            card += `<div class="col-sm-12 col-lg-4 mt-5  ">
        
                         <div class=" post shadow ">

                    <img class="w-100" src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}">

                    <div class="layer d-flex  flex-column text-center justify-content-center bg-white opacity-75 text-black ">
                    
                        <h1> ${data[i].title} </h1>
                        <p> ${ data[i].overview}</p>
                        
            
                    </div>
                </div>
            
            </div>`


            movieInfo.innerHTML = card;
        }

    } else {

        allMovie()
    }





}


oneWord.addEventListener('keydown', function () {
    fetchSearch()

})

oneWord.addEventListener('blur', function () {
    oneWord.value = "";
})
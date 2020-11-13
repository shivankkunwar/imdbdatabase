let movies =[{
    title:"FIght club" ,
    rank : 4 ,
    id   : "t01"
},
{
    title: "movie 2" ,
    rank : 1 ,
    id   : "t02"
},
{
    title: "movie 3" ,
    rank : 2 ,
    id   : "t03"
},
{
    title:"movie 4"  ,
    rank : 3 ,
    id   : "t05"
}]

window.onload=function(){
    sortMoviesByRank(movies);

}

function sortMoviesByRank(movies)  {

    for(let j= 0;j< movies.length;j++){
        console.log(movies.length);
    }

}
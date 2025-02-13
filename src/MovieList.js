import React from 'react'
import MovieCard from './MovieCard';

 function MovieList({movies}) {
  
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',gap:23,marginTop:30}}>
         {movies.map((e) => ( <MovieCard {...e} /> ) )}
        {/* { movies.map((e)=><MovieCard {...e}/>)} */}
    </div>
  )
}

export default MovieList;

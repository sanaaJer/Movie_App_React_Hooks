import React from 'react'
import MovieCard from './MovieCard';

 function MovieList({movies,filterInput}) {
   const headerStyle={textAlign:'center',color:'#181C14'}
   const listStyleDiv={display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',gap:23,marginTop:30,fontSize:'14px',padding:'1em'}
  return (
    <div>
        <h1 style={headerStyle}>Top Movies List </h1>
        <div style={listStyleDiv}>
              {
              //  if the filterInput empty we display all movies , else filtering (by title rate)
               ((filterInput==='')? movies:movies.filter((e)=>e.title.toLowerCase().startsWith(filterInput.toLowerCase()) || e.rating.startsWith(filterInput)))
               .map((e) =>( <MovieCard  {...e} /> ) )
               }
         </div>
    </div>
   
  )
}

export default MovieList;

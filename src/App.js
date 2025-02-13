
import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const App=()=> {
   const [movies,setMovies]=useState([{
    title:'Avatar',
     description:'Avatar is the story of Jake Sully, a paraplegic marine, who replaces his brother on a secret mission to infiltrate the Navi, the colony of beings that sit on the planet of Pandora, where there is a precious ore, that sells at a ridiculous amount.',
      posterURL:'/avatar.jpg',
       rating:'4.3'
   },
   {
    title:'Avengers',
    description:'The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.',
     posterURL:'/avengers.jpg',
      rating:'4.7'
   },
   {
    title:'Spider-Man',
    description:'The story follows timid teenager Peter Parker, who gains superhuman abilities after being bitten by a genetically engineered spider. He adopts the masked persona "Spider-Man" and begins to fight crime in New York City, facing the malevolent Green Goblin in the process.',
     posterURL:'/spiderMan.jpg',
      rating:'4.5'
   }])


  return(
    <div >
      <MovieCard></MovieCard>
    </div>
  );

}


export default App;

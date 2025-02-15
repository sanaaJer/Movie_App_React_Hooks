
import { useRef, useState } from 'react';
import './App.css';
import Filter from './Filter';



const App=()=> {
  // movies list data
  const [movies,setMovies]=useState([
    {
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
   },
   {
    title:'The Dark Knight ',
     description:'The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City.The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City.',
      posterURL:'/darkNight.jpg',
       rating:'4.7'
   },
   {
    title:'Inception',
     description:'Inception is a 2010 science fiction action heist film written and directed by Christopher Nolan, who also produced it with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
      posterURL:'/inception.jpg',
       rating:'4.4'
   },
   {
    title:'The father',
     description:'The Father is a 2020 psychological drama film, directed by Florian Zeller in his directorial debut. He co-wrote the screenplay with fellow playwright Christopher Hampton on the basis of Zeller.A French–British co-production, the film stars Anthony Hopkins as an octogenarian Welsh man living with dementia.',
      posterURL:'/father.jpg',
       rating:'4.3'
   }
   
   
  ])
 // Create refs of input's form
 const titleRef = useRef('');
 const descriptionRef = useRef('');
 const posterURLRef = useRef('');
 const ratingRef = useRef('');

 const addMovieSubmit=(e)=>{
  e.preventDefault()
  const movieRefValues= {
    title: titleRef.current.value,
    description: descriptionRef.current.value,
    posterURL: posterURLRef.current.value,
    rating: ratingRef.current.value
  };
   setMovies((prevstate)=>[...prevstate,movieRefValues])

  //  clearRef

 };
  return(
    <div >
      {/* filter component */}
      <Filter movies={movies}/>
      {/* form Add new movie  */}
      <div  className="formSection">
        <h1>Add new Movie</h1>
        <form  onSubmit={addMovieSubmit}  >
          <label>Title</label>
          <input ref={titleRef} placeholder='Enter title' required/>
          <label>Description</label>
          <input ref={descriptionRef} placeholder='Enter description' required/>
          <label>Image URL</label>
          <input ref={posterURLRef} placeholder='Enter image URL' required/>
          <label>Rate</label>
          <input ref={ratingRef} placeholder='Enter Rate' required/>
          <input type='submit'  value='Add movie'></input>
        </form>
      </div>
    </div>
  );

}


export default App;

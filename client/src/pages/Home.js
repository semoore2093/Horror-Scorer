import React, { setState, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import MovieCards from '../components/MovieCards';
import Movie from '../components/Movie';



const Home = (props) => {
  let {setClicked, isClicked} = props  
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];   
  const [movieObj, setMovieObj] = useState({"id": 760161,  
  "original_language": "en",
  "original_title": "Orphan: First Kill",
  "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
  "popularity": 5279.659,
  "poster_path": "/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
  "release_date": "2022-07-27",
  "title": "Orphan: First Kill",
  "video": false,
  "vote_average": 6.9,
  "vote_count": 868
  })



  return (
<main> 
    <div className={`col-12 mb-3}`}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-row justify-space-between">      
        <MovieCards
        isClicked = {isClicked} setClicked = {setClicked}
        movieObj = {movieObj} setMovieObj = {setMovieObj}        
        ></MovieCards> 
        <Movie
        isClicked = {isClicked} setClicked = {setClicked}
        movieObj = {movieObj} setMovieObj = {setMovieObj}   
        thoughts = {thoughts}    
        ></Movie>              
      </div>
      )}
    </div>   
</main>
  );
};

export default Home;

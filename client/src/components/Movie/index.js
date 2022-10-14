import React, { useState } from "react";
import ThoughtForm from "../ThoughtForm";
import ThoughtList from "../ThoughtList";

import "./movie.css";

const Movie = (props) => {
   const { isClicked, setClicked, movieObj, thoughts } = props;
   const closeWindow = () => {
      setClicked("false");     
   };

   return (
      <>
      <div className={`container-fluid && ${isClicked === "false" && "hide"}`}>
         <div className="movie-detail">
            <div className="movie-title">
               <div className="movie_title">{movieObj ? movieObj.original_title : ""}</div>
            </div>
            <div className="movie-info">
               <div className="movie_backdrop">
                  <img
                     className="movie-backdrop"
                     src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  alt=""
                  />
               </div>
             
               <div className="movie-overview">
                  <div>
                  <br></br>
                     <h3 className="font-weight-bold">Movie Overview:</h3> <br></br>
                     <br></br>
                     {movieObj ? movieObj.overview : ""}
                     <br></br>
                     <br></br>
                     <span>----------------------</span>
                     <br></br>
                     Release date:<p>{movieObj.release_date }</p>
                     IMDB Rating:<p>{movieObj.vote_average}</p>                      
                     <span>----------------------</span>
                     <br></br>                    
                  </div>                  
               </div>
            </div>
            <div className="mt-3"> <button onClick={closeWindow} id="close">
            Return to Main Page
         </button></div>
            <br></br> <br></br> <br></br>
           
            <div className="movie-comment">      <div>
      <ThoughtForm 
      movieObj = {movieObj}
      isClicked = {isClicked} 
      setClicked = {setClicked} 
      ></ThoughtForm>
      <ThoughtList 
      thoughts = {thoughts}
      isClicked = {isClicked}
      movieObj = {movieObj}      
      ></ThoughtList>
      </div></div>
         </div>
        
       
      </div>

   </>
   );
};
export default Movie;

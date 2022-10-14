import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './thought.css'



const ThoughtList = ({ thoughts, title, movieObj}) => {      
  if(document.location.pathname.includes("profile")) {
    if (!thoughts.length) {
      return <h3>No Reviews Yet</h3>;    
    }
    return (
      <div className="thought-div">
        <h3>{title}</h3>
        {thoughts &&
          thoughts.map(thought => (
            <div key={thought._id} className="card mb-3 thought">
              <p className="card-header">
                <Link
                  to={`/profile/${thought.username}`}
                  style={{ fontWeight: 100 }}
                  className="text-light"
                >
                  {thought.username}
                </Link>{' '}
                thought on {thought.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/thought/${thought._id}`}>
                  <p>{thought.thoughtText}</p>
                  <p className="mb-0">
                    Reactions: {thought.reactionCount} || Click to{' '}
                    {thought.reactionCount ? 'see' : 'start'} the discussion!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
    
  } else {
   
  //***************************************** */
// *****************************************

// figure out how to sort through thoughts
// ****************************************************  
// ***************************************************
//***************************************************** */

    const filterArr = thoughts.filter(thoughts => thoughts.movie_id === movieObj.id)    
    if (!filterArr.length) {
      return <h3>No Comments Yet</h3>;    }
    return (
      <div>     
        <h3>{title}</h3>
        {filterArr && 
          filterArr.map(thought => (
            <div key={thought._id} className="card mb-3 thought">
              <p className="card-header">
                <Link
                  to={`/profile/${thought.username}`}
                  style={{ fontWeight: 100 }}
                  className="text-light"
                >
                  {thought.username}
                </Link>{' '}
                thought on {thought.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/thought/${thought._id}`}>
                  <p>{thought.thoughtText}</p>
                  <p className="mb-0">
                    Reactions: {thought.reactionCount} || Click to{' '}
                    {thought.reactionCount ? 'see' : 'start'} the discussion!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
     
    )
  }
 

  
  
};

export default ThoughtList;
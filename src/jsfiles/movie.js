import React from 'react'
import '../cssfiles/movie.css'
import StarRatingcomp from '../jsfiles/starcomp.js'




export default function Movie(props){
  const movielist =props.movielist;
  const arr = [];
  const newarr = [];
const SearchKey = props.SearchKey;


  for (let i of movielist){
  arr.push(    
      <div key={i.id} className='movie-card'>
      <div className='top-part'>
      <img src={i.image} width='170' className="image-card"  height='170' alt='movie-card-img'/>
      <p className="rate">{i.rate}</p>
      <div className="rate">
     <StarRatingcomp rating={i.rating}/>
     </div>
      </div>
      <div className="name-year">
      <p>{i.MovieName} - {i.ReleaseYear}</p>
      </div> 
      </div>
  )
  }

  if (SearchKey == ''){
    return arr;
  }
  else {
    for (let j of movielist){
      if (j.MovieName.toUpperCase().includes(SearchKey.toUpperCase()) && props.ratings <= j.rating)
      {
        newarr.push(
          <div key={j.id} className='movie-card'>
      <div className='top-part'>
      <img src={j.image} width='170' className="image-card"  height='170' alt='movie-card-img'/>
      <p className="rate">{j.rate}</p>
      <div className="rate">
      <StarRatingcomp rating={j.rating}/>
      </div>
      </div>
      <div className="name-year">
      <p>{j.MovieName} - {j.ReleaseYear}</p>
      </div> 
      </div>
        )
      }
    }
    return newarr
    }
  }
  

import React from 'react'
import '../cssfiles/Search.css'
import StarRatingComponent from 'react-star-rating-component';





export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rating: 1
          };
    }

    onStarClick = (nextValue) => {
        this.setState({rating: nextValue});
        this.props.changing(nextValue)
      }

    render(){
        const { rating } = this.state;
        return (
            <div className='Search-section'>
               <div>
               <input 
                type ='text'
                onChange={(e) =>this.props.Searcher(e.target.value)}
                placeholder='Search Movie'
                className='Search-Bar'
                />
                <button className='Btn-search'>Search</button>
               </div>
               <div className='rate-filter'>
                   <p className='minimum-rating'>Minimum Rating</p>
                   <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
               </div>
            </div>
        )}
    }

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class StarRatings extends React.Component {
  constructor() {
    super();
 
    this.state = {
      ratings: 1
    };
  }
 
  onStarClick(nextValue) {
    this.setState({rating: nextValue});
    this.props.changing(nextValue)
  }
 
  render() {
    const { ratings } = this.state; 
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={ratings}
          onStarClick={() => this.onStarClick}
          
        />
      </div>
    );
  }
}
 
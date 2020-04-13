import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class StarRatingcomp extends React.Component {
 
 
 
  render() {
 
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.props.rating}
          
        />
      </div>
    );
  }
}
 
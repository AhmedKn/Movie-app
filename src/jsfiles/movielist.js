import React from 'react'
import Movie from '../jsfiles/movie.js'
import Addmovie from '../jsfiles/addmovie.js'
import '../cssfiles/movielist.css'
import Search from '../jsfiles/search.js'

class Movielist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            SearchKey:"",
            ratings:1
        }
    }

    render(){
        return (
            <div className='Page-section'>
            <Search changing={this.changing} Searcher={this.Searcher}/>
            <div className='cards-section'>     
            <Movie ratings={this.state.ratings} movielist={this.state.list} SearchKey={this.state.SearchKey} />
            <Addmovie rating={this.state.props}  onSubmit={this.movieadd} />
            </div>
            </div>
        )
    }
     Searcher = el =>{
         this.setState({SearchKey : el})    
     }

    movieadd = moviecontent =>{
        this.setState({
            list : [moviecontent ,...this.state.list]
        })
    }
    changing = (el) => {
        this.setState({ratings: el});
      }
    
    
    
}

export default Movielist;
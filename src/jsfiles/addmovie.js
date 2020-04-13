import React from 'react'
import Modal from 'react-modal'
import '../cssfiles/addmovie.css'
import StarRating from '../jsfiles/ratingstar.js'




Modal.setAppElement('#root')

export default class Addmovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            MovieName:"",
            ReleaseYear:"",
            isOpen : false,
            rating:1, 
            image:"" 
        }
            
        }
        onStarClick(nextValue, prevValue, name) {
            this.setState({rating: nextValue});
          }
        
        handleNameChanger = (event) =>{
            this.setState({[event.target.name] : event.target.value})
        }

        handleReleaseChanger=(event) =>{
            this.setState({[event.target.name] : event.target.value})
        }
        handleimageChanger =(event) =>{
            this.setState({image :event.target.value})
        }

    
modalopener = () =>{
    this.setState({isOpen : true})
}

modalcloser = () =>{
    this.setState({isOpen : false})
}

handleSubmit = (event) =>{
    event.preventDefault();
   if (this.state.MovieName != '' && this.state.ReleaseYear != '')
   {
    this.props.onSubmit({
        id : 1 + Math.random() ,
        MovieName : this.state.MovieName,
        ReleaseYear : this.state.ReleaseYear,
        image :this.state.image ,
        rating:this.state.rating})
   }
   else {
    alert('you have to fill Movie Name & Release Year')
       return  ((this.setState({isOpen : true}))  
)       

   }
        
    
    this.setState({isOpen : false})
    this.setState({rating: 1})
    this.setState({MovieName:""})
    this.setState({ReleaseYear:""})
}


    render(){
        return (
            <div className='modal-section'>
              <button className="button-add" onClick={() => this.modalopener()}>+</button>
              <Modal isOpen={this.state.isOpen} className="modal">
                  <h2>ADD New Movie</h2>
                    <form>
                        <p className='movie-Name-p'>Movie Name *</p>
                        <input className='input-Moviename' name='MovieName' type='text' placeholder="Movie Name" value={this.state.MovieName} onChange={this.handleNameChanger} />
                        <p className='ReleaseYear-p'>Release Year *</p>
                        <input className='input-Release' name='ReleaseYear' type='text' placeholder="Realease Year" value={this.state.RealeaseYear} onChange={this.handleReleaseChanger} />
                        <p className='Movie-image-p'>Add Movie Image</p>
                        <input className='input-Movieimage' name='Movieimage' type='text' placeholder="Movie Image link..." value={this.state.image} onChange={this.handleimageChanger} />
                        <div className='rate-section'>
                        <p className='rate-p'>Movie Rating:</p>
                        <StarRating changing={this.changing} />
                        </div>
                    </form>
                    <div  className="button-section">
                  <button className='button-close-modal' onClick={() => this.modalcloser()}>close</button>
                  <button className='button-add-in-modal' type='submit' onClick={this.handleSubmit}>ADD</button>
                   </div>
              </Modal>
            </div>
        )
    }

    changing = (el) => {
        this.setState({rating: el});
      }
}
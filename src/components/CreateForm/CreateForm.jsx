import React, { Component } from "react";
import './CreateForm.css'

class CreateForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            title: "",
            artist:"",
            album: "",
            genre: "",
            release_date: "",
        }
    }

    handleChange= (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
   }

   handleSubmit = (event) => {
       this.props.createSong(this.state);
   }


   render() { 
       return ( 
           <footer>
           <form onSubmit= {this.handleSubmit}>
               <label>Song Title</label>
               <input name="title" onChange={this.handleChange} value={this.state.title}/>
               <label>Artist</label>
               <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
               <label>Album</label>
               <input name="album" onChange={this.handleChange} value={this.state.album}/>
               <label>Genre</label>
               <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
               <label>Release Date</label>
               <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
               <button type="submit">Create Song</button>
           </form>
           </footer>
        );
   }
}

export default CreateForm;

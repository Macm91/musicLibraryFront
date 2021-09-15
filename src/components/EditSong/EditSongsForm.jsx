// import { Modal } from "bootstrap"
// import React, { Component } from "react"
// import axios from "axios";


// class EditSongForm extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             songs:[]
            
//         }
//     }

//     handleSubmitEdit = (event) => {
//         this.props.createSong(this.state);
//        }

// handleChange= (event) => {
//          this.setState ({
//         [event.target.name]: event.target.value,
//     });
//     }
      

// updateSong = (song)=>{
//     axios.put('http://127.0.0.1:8000/music/'+song.id+'/')
//         this.getSongs()
// }

// render (){    
// return(
//     <div>
//         <Modal>
//         <form>  
//             <label>Song Title</label>
//             <input name="title" onChange={this.handleChange} value={this.state.title}/>
//             <label>Artist</label>
//             <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
//             <label>Album</label>
//             <input name="album" onChange={this.handleChange} value={this.state.album}/>
//             <label>Genre</label>
//             <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
//             <label>Release Date</label>
//             <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
//             <button onClick={()=> this.updateSong()} > Update</button>
//         </form>
//         </Modal>
//     </div>
// )
// }
// }

// export default EditSongForm ;
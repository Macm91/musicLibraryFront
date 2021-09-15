import React, { useState } from "react";
import Modal from  "react-modal";

const EditSong = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className="edit">
            <button onClick = {()=> setModalIsOpen(true)}>Edit</button>
            <Modal isOpen={modalIsOpen} onRequestClose= {()=> setModalIsOpen(false)}>
                <h2>Heading</h2>
                {/* <div>
                <form>  
                    <label>Song Title</label>
                    <input name="title" onChange={this.handleChange} value={this.state.title}/>
                    <label>Artist</label>
                    <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                    <label>Album</label>
                    <input name="album" onChange={this.handleChange} value={this.state.album}/>
                    <label>Genre</label>
                    <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                    <label>Release Date</label>
                    <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.release_date}></input>
                    <button onClick={()=> props.editSong()} > Update</button>
                </form>
                </div> */}
                <div>
                    <button onClick= {()=> setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default EditSong;









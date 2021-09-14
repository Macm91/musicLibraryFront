import React from "react";
import {useState} from "react";




 EditSong=(props)=> {

  // this.state ={
  //   show: false
  // }

  // this.setState({
  //   show: true
  // })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        props.editSong(this.state);
     };
    const handleChange= (event) => {
      props.setState ({
          [event.target.name]: event.target.value,
      });
  }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>  
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
                 <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.release_date}
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose, handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render( <EditSong/>);
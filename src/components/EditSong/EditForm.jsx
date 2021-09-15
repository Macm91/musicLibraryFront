import React from "react";



const EditForm =(props)=>

                 <div>
                    <form>  
                        <label>Song Title</label>
                        <input name="title" onChange={props.handleChange} value={props.title}/>
                        <label>Artist</label>
                        <input name="artist" onChange={props.handleChange} value={props.artist}/>
                        <label>Album</label>
                        <input name="album" onChange={props.handleChange} value={props.album}/>
                        <label>Genre</label>
                        <input name="genre" onChange={props.handleChange} value={props.genre}/>
                        <label>Release Date</label>
                        <input type="datetime-local" name="release_date" onChange={props.handleChange} value={props.release_date}></input>
                        <button onClick={()=> props.editSong()} > Update</button> 
                    
                    </form>
                </div> 

export default EditForm;
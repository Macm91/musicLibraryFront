import React, {Component} from "react";
import './Table.css';
import axios from "axios";
import CreateForm from "../CreateForm/CreateForm"




class Table extends Component {
    constructor(props){
        super(props);
        this.state ={
            songs: [],
            search: "",
        }
    }
    componentDidMount(){
        this.getSongs();
    }
    async getSongs (){
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            })
    }

    createSong=(newSong)=>{axios.post('http://127.0.0.1:8000/music/', newSong)}
    
    deleteSong=(songID)=>{
        axios.delete('http://127.0.0.1:8000/music/'+songID.id+'/')
        this.getSongs()
    }

    editSong=(song) => {
        axios.put('http://127.0.0.1:8000/music/'+song.id+'/')
        this.getSongs()
    }

    // TO DO: Create modal to implement the edit song function.



    filterSongs =() =>{ 
        let filteredSongs = this.songs.filter((song) => {
            if (this.state.search === ""){
                return true;
            }
            else if (this.songs.title.toLowerCase().includes(this.state.search) || this.songs.artist.toLowerCase.includes(this.state.search) || this.songs.album.toLowerCase.includes(this.state.search) || this.songs.genre.toLowerCase.includes(this.state.search) || this.songs.release_date.toLowerCase.includes(this.state.search)){
                return true
            }
            else{
                return false
            }
                })
        this.setState({
            songs : filteredSongs
        })
    }


    render(){
    return(
        <div className="Table">

            <table>
                <thead>
                <tr className="table">
                    <th> Title </th>
                    <th> Album </th>
                    <th> Artist </th>
                    <th> Genre </th>
                    <th> Release Date </th>
                </tr>
                </thead>

                <tbody>
                {this.state.songs.map((songs, index)=>{
                    return(
                    <tr key={index} className="songdetails">
                    <th> {songs.title}</th>
                    <th> {songs.album}</th>
                    <th> {songs.artist}</th>
                    <th> {songs.genre}</th>
                    <th> {songs.release_date}</th>
                    <th><button onClick={()=> this.deleteSong(songs)} > Delete</button></th>
                    </tr>
                    )
                }
                )
                }
                </tbody>
                </table>
            
           <CreateForm createSong={this.createSong} id="create"/>
                  
        </div>
    )}
}

export default Table;
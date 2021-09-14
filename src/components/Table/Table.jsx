import React, {Component} from "react";
import './Table.css';
import axios from "axios";
import CreateForm from "../CreateForm/CreateForm"
import Filter from "../Filter/Filter";



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

    filterSongs =() =>{ 
        debugger
        let filteredSongs = this.songs.toLowerCase.filter(this.state.search.toLowerCase.includes(this.state.songs.name.toLowerCase || this.state.song.album.toLowerCase || this.state.songs.artist.toLowerCase || this.state.songs.release_date.toLowerCase || this.state.songs.genre.toLowerCase))
        
        this.setState({
            songs : filteredSongs
        })
    }


    render(){
    return(
        <div className="Table">
            <Filter  id="searchbar"/>
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
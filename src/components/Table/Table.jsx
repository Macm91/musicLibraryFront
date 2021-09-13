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


    render(){
    return(
        <React.Fragment>
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
            
           <CreateForm createSong={this.createSong}/>
                  
        </React.Fragment>
    )}
}

export default Table;
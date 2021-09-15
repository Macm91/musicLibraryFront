import React, { Component } from "react";
import axios from "axios";
import './App.css'
import Table from "./Table/Table";
import Header from "./Header/Header";
import CreateForm from "./CreateForm/CreateForm"
// import EditSongForm from "../EditSong/EditSongsForm";



class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            songs: [],
            search: "",
            searchResults: ''
        }
    }
    componentDidMount(){
        this.getSongs();
        
    }


    async getSongs (){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
    }
        catch(ex) {
            console.log ('Error in API Call!')
        }
    }


    createSong=(newSong)=>{axios.post('http://127.0.0.1:8000/music/', newSong)}
    
    deleteSong=(songID)=>{
        axios.delete('http://127.0.0.1:8000/music/'+songID.id+'/')
        this.getSongs()
    }



    // handleSubmitEdit = (event) => {
    //     this.props.createSong(this.state);
    //    }

    handleChange= (event) => {
         this.setState ({
        [event.target.name]: event.target.value,
    });
    }




    render (){
        return(
            <div className="container-fluid">
               <Header/>
               <Table songs={this.state.songs} deleteSong= {this.deleteSong}/>
               <CreateForm createSong={this.createSong} id="create"/>
            </div>
        )
    }
}

export default App;
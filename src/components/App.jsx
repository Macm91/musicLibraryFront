import React, { Component } from "react";
import axios from "axios";
import './App.css'
import Table from "./Table/Table";
import CreateForm from "./CreateForm/CreateForm";


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            songs: [],
            songNumber: 0
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
        console.log (response);
    }
        catch(ex) {
            console.log ('Error in API Call!')
        }

   
    }

    createSong=(newSong)=>{
        this.songs.push(newSong)
        this.setState({
            songNumber:this.songs.length - 1
        })
    }

    render (){
        return(
            <div className="container-fluid">
               <Table song={this.state.songs}/>
               <CreateForm createSong={this.createSong}/>
            </div>
        )
    }
}

export default App;
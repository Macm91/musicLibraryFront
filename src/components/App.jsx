import React, { Component } from "react";
import axios from "axios";
import './App.css'
import Table from "./Table/Table";



class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            songs: [],
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

    

    render (){
        return(
            <div className="container-fluid">
               <Table songs={this.state.songs}/>
            </div>
        )
    }
}

export default App;
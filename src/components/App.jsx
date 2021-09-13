import React, { Component } from "react";
import axios from "axios";
import './App.css'


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
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
        console.log (response);
    }


    render (){
        return(
            <div className="container-fluid">
               <h1>Hello World!</h1>
               <p></p>
            </div>
        )
    }
}

export default App;
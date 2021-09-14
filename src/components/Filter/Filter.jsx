import React, {Component} from 'react';
import axios from 'axios';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs:[],
      search: '',
      searchResult: ''
     }
  }

  componentDidMount(){
    this.getSongs()
}

async getSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    this.setState({
        songs: response.data
    })
}  


  handleChange = (event) =>{
    debugger
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) =>{
  debugger
    event.preventDefault();
    this.filter.Songs()

}

filteredSearch = (props) =>{
    let filteredSongs = this.state.songs.filter(song => {
      return song.title === this.state.search
    })
    return filteredSongs
}

  render() { 
    return ( 
      <div className="searchbar">
      <form onSubmit = {this.handleSubmit}>
      <label>Search</label>
      <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/> 
      <button type = 'submit'>Search!</button>
      </form>
      <h1>{this.filteredResults}</h1>
      </div>
     );
  }
}
 
export default Filter;
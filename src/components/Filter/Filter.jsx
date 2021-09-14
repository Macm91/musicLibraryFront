import React, {Component} from 'react';
import axios from 'axios';
import Table from '../Table/Table';





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
  event.preventDefault();
  this.setState({
      [event.target.name]: event.target.value
  })
  this.filterSongs()
  }


handleSubmit = (event) =>{
    event.preventDefault();
    this.filterSongs()

}

filteredSearch = (props) =>{
    let filteredSongs = this.state.songs.filter(song => {
      return song.title === this.state.searchhgyy
    })
    return filteredSongs
}

  render();{ 
    return ( 
      <div className="searchbar">
      <form onSubmit = {this.handleSubmit}>
      <label>Search</label>
      <input name= 'search' onChange = {this.filterSongs()} value = {this.search}/> 
      <button type = 'submit'>Search!</button>
      </form>
      </div>
     );
  }

 
export default Filter;
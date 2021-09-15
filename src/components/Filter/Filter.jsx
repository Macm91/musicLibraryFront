import React from 'react';


const Filter = (props) => {

    return ( 
      <div className="searchbar">
      {/* <form onSubmit = {props.handleSubmit}> */}
      <label>Search</label>
      <input name= 'search' onChange = {props.filterSongs()} value = {props.search}/> 
      {/* <button type = 'submit'>Search!</button> */}
      {/* </form> */}
      </div>
     );
  }

 
export default Filter;
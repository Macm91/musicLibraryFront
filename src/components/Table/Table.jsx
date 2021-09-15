import React from "react";
import './Table.css';
import EditSong from "../EditSong/EditSong";
import { useState } from "react";
import axios from "axios";





const Table = (props) =>{
    const [searchTerm, setSearchTerm] = useState('')

const editSong = (song) => {
        axios.put('http://127.0.0.1:8000/music/'+song.id+'/')
    }

    return(
        <div className="Table">
            <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}} />
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
                {props.songs.filter((val)=>{
                    if(searchTerm === ""){
                        return true
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase()) || val.album.toLowerCase().includes(searchTerm.toLowerCase()) || val.album.toLowerCase().includes(searchTerm.toLowerCase())){
                        return true
                    }
                    else{
                        return false
                    }
                }).map((val, index)=>{
                    return(
                    <tr key={index} className="songdetails">
                    <th> {val.title}</th>
                    <th> {val.album}</th>
                    <th> {val.artist}</th>
                    <th> {val.genre}</th>
                    <th> {val.release_date}</th>
                    <th> <EditSong editSong={editSong(val)} /> </th>
                    <th><button className="delete" onClick={()=> props.deleteSong(val)} > Delete</button></th>
                    </tr>
                    )
                }
                )
                }
                </tbody>
                </table>
            
           
                  
        </div>
    )}


export default Table;
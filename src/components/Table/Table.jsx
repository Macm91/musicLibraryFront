import React from "react";
import './Table.css';

const Table = (props) => {

    return(
    <div className= 'table'>
        <table>
            <tr className="table">
                <th> Title </th>
                <th> Album </th>
                <th> Artist </th>
                <th> Genre </th>
                <th> Release Date </th>
            </tr>

            {props.song.map((songs, index)=>{
                return(
                <tr key={index} className="songdetails">
                <th> {songs.title}</th>
                <th> {songs.album}</th>
                <th> {songs.artist}</th>
                <th> {songs.genre}</th>
                <th> {songs.release_date}</th>
                </tr>
                )
            }
            )
            }
        </table>
    </div>
    )
}

export default Table;
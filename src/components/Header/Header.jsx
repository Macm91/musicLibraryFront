import React from "react";
import './Header.css';

function Header(props){
    return (
        <div className='row row-space'>
            <div className='col-md-12' style={{padding:0}}>
                <div className='titlebar-nav'>
               <h1> Welcome</h1>
                </div>
            </div>
        </div>
    )
}
export default Header;

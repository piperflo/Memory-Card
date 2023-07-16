import React from 'react'
import '../styles/Header.css'
const Header = (props) =>{
    const {count, maxCount} = props;
    return(
        <div id="header">
            <div id="top-header">
                <h1>Futurama Memory Game</h1>
                <div>
                    <h3>Score: {count}</h3>
                    <h3>Best score: {maxCount}</h3>
                </div>
            </div>
            <div id="bottom-header">
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Header;
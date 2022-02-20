import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date();
const currYear = currDate.getFullYear();

function Footer(){
    return(
        <div>
            <footer>
            <p>copyright © {currYear} </p>
            </footer>
        </div>
    )
}

export default Footer;
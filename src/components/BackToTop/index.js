import React from 'react'
import backToTopIcon from '../../img/Icon/backtotop.png';
export default function BackToTop() {
    window.onscroll = function() { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('myBtn').style.display = "block";
        } else {
            document.getElementById('myBtn').style.display = "none";
        }
    }
    const topFunction=()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button onClick={topFunction} id="myBtn"><img src={backToTopIcon} alt="back to top"/></button>
    )
}

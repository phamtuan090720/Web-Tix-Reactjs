import React from 'react'
import { Link } from 'react-router-dom';
import Icon404 from '../../../img/404/404.svg';
import IconMeteor from '../../../img/404/meteor.svg';
import IconAstronaut from '../../../img/404/astronaut.svg';
import IconSpaceship from '../../../img/404/spaceship.svg';
import mart from '../../../img/404/mars.svg';
export default function index() {
    return (
        <div style={{backgroundImage:` url('https://assets.codepen.io/1538474/star.svg'),linear-gradient(to bottom, #05007A, #4D007D)`}} className='PageNotFound'>
            <div>
                <div style={{backgroundImage:`url(${mart})`}} className="mars" />
                <img src={Icon404} className="logo-404" alt="logo-404" />
                <img src={IconMeteor} className="meteor" alt="meteor" />
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
  </p>
                <div className="back-home" align="center">
                    <Link className="btn-back" to="/home">Back to Home</Link>
                </div>
                <img src={IconAstronaut} className="astronaut" />
                <img src={IconSpaceship} className="spaceship" />
            </div>

        </div>
    )
}

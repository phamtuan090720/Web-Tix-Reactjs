import React from 'react'
import { Link } from 'react-router-dom';
import Icon404 from '../../../img/404/404.svg';
import IconMeteor from '../../../img/404/meteor.svg';
import IconAstronaut from '../../../img/404/astronaut.svg';
import IconSpaceship from '../../../img/404/spaceship.svg';
export default function index() {
    return (
        <div className='PageNotFound'>
            <div>
                <div className="mars" />
                <img src={Icon404} className="logo-404" />
                <img src={IconMeteor} className="meteor" />
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

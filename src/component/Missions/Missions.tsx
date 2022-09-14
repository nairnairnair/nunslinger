import React from 'react';
import { Route, Link } from 'react-router-dom';
import fetchApiData from '../fetch/fetchApiData';
import confessionImage from '../../Assets/Backgrounds/confess.jpeg'
import DialogBox from '../Missions/DialogBox';
import './Missions.css';

const Missions = () => {

    return(
        <div className='mission-background'>
            <section className='missions-container' style={{backgroundImage: `url(${confessionImage}`}}>
                <div className='dialog-box-container'>
                <DialogBox />
                </div>
                
                <div className='button-style'>
                    <button className='next-button'>Next</button>
                    <Link to='/game'>
                        <button className='start-button'>Accept Mission</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Missions
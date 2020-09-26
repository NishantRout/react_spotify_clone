import React from 'react';
import Body from './Body';
import './css/Player.css';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player;

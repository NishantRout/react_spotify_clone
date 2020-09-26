import React from 'react';
import Body from './Body';
import './css/Player.css';
import Sidebar from './Sidebar';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            {/* footer */}
        </div>
    )
}

export default Player;

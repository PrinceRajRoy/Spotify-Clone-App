import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import styled from 'styled-components';
import Footer from './Footer/Footer';

function Player() {
    return (
        <PlayerContainer>
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </PlayerContainer>
    )
}

export default Player;

const PlayerContainer = styled.div`
    
    .player__body {
        display: flex;
    }
`;
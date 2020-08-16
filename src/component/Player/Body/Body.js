import React from 'react'
import Header from './Header/Header';
import styled from 'styled-components';
import Playlist from './Playlist/Playlist';
import { useDataValue } from '../../../contexts/DataContext';

function Body() {
    
    const [{ currentPlaylistBG }] = useDataValue();
    
    return (
        <BodyContainer BG={currentPlaylistBG}>
            <Header />
            <Playlist />
        </BodyContainer>
    )
}

export default Body;

const BodyContainer = styled.div`
    height: 100vh;
    overflow: auto;
    color: #fff;
    padding: 10px 30px 30px;
    flex: 1;
    background: ${({ BG }) => BG ? "linear-gradient(" + BG + ", rgba(0, 0, 0, 1))" : "#121212"};

    &::-webkit-scrollbar {
        display: none;
    }
`;

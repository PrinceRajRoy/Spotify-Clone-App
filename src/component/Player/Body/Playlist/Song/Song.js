import React from 'react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {iosMusicalNote} from 'react-icons-kit/ionicons/iosMusicalNote';
import { useDataValue } from '../../../../../contexts/DataContext';
import milliToMinute from '../../../../../utilities/msToSec';

function Song({ song }) {

    const [{ spotify }, dispatch] = useDataValue();

    const playSong = () => {
        spotify.play({uris: [`spotify:track:${song.id}`]}).then((res) => {
            dispatch({
                type: 'SET_SONG',
                currentSong: song
            });
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        });
    }

    return (
        <SongContainer onClick={() => playSong()}>
            <div className="song__innerContainer">
                <Icon icon={iosMusicalNote} size={20} className="song__playIcon" />
                <img src={song?.album?.images[0].url} className="song__albumIcon" alt="Song Icon"/>
                <div className="song__details">
                    <span className="song__name">
                        {song.name}
                    </span>
                    <span className="song__details">
                        {song?.album?.artists.map(artist => artist.name).join()}  •  {song?.album?.name}
                    </span>
                </div>
                <span className="song__length">
                    {milliToMinute(song?.duration_ms)}
                </span>
            </div>
        </SongContainer>
    )
}

export default Song;

const SongContainer = styled.div`

    display: flex;
    align-items: center;
    height: 4rem;
    padding: 0 10px;
    transition: background 200ms linear;
    
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        cursor: pointer;
    }

    .song__innerContainer {
        display: flex;
        flex: 1;
        color: #b3b3b3;
        letter-spacing: 0.1rem;
    }

    .song__albumIcon {
        height: 40px;
        width: 40px;
        margin-right: 10px;
    }

    .song__playIcon {
        padding-right: 14px;
    }

    .song__name {
        font-size: 16px;
        color: #fff;
    }

    .song__details {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        flex: 1;
    }
`;
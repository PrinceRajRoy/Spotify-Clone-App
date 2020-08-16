import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDataValue } from '../../../../contexts/DataContext';
import Icon from 'react-icons-kit';
import {ic_play_circle_filled} from 'react-icons-kit/md/ic_play_circle_filled';
import {heart} from 'react-icons-kit/fa/heart';
import {ic_more_horiz} from 'react-icons-kit/md/ic_more_horiz';
import Song from './Song/Song';
import ColorThief from 'colorthief';
import { Liked } from '../../../../svg/svg';

function Playlist() {

    const [{ currentPlaylist }, dispatch] = useDataValue();
    const colorThief = new ColorThief();

    useEffect(() => {
        const img = document.getElementById('playlist__icon');
        if(currentPlaylist?.id) {
            img.addEventListener('load', function() {
                const RGB = "rgb(" + colorThief.getColor(img).join() + ")";
                dispatch({
                    type: 'SET_CURRENT_PLAYLISTBG',
                    playlistBG: RGB
                })
            });
        }
    }, [currentPlaylist, dispatch, colorThief]);

    return (
        <PlaylistContainer>
            <div className="playlist__top">
                {currentPlaylist?.id ? (<img id="playlist__icon" src={currentPlaylist?.images[0].url} alt="Type Icon" crossOrigin="anonymous"/>) :
                (<Liked className="playlist__liked"/>)}
                <div className="playlist__info">
                    <h2 className="playlist__title">
                        {currentPlaylist?.type || "PLAYLIST"}
                    </h2>
                    <span className="playlist__name">
                        {currentPlaylist?.name || "Liked Songs"}
                    </span>
                    <span className="playlist__desc">
                        {currentPlaylist?.description || 'asas'}
                    </span>
                </div>
            </div>
            <div className="playlist__body">
                <div className="playlist__icons">
                    <Icon icon={ic_play_circle_filled} size={64} />
                    <Icon icon={heart} size={26} />
                    <Icon icon={ic_more_horiz} size={32} />
                </div>
                <div className="playlist__songs">
                    {currentPlaylist?.tracks?.items.map(el => (
                        <Song song={el.track} key={el.track.id}/>
                    )) || 
                     currentPlaylist?.items.map(el => (
                        <Song song={el.track} key={el.track.id}/>
                    ))
                    }
                </div>
            </div>
        </PlaylistContainer>
    )
}

export default Playlist;

const PlaylistContainer = styled.div`

    .playlist__top {
        display: flex;
        > svg {
            height: 15vw;
            width: 15vw;
            padding: 5vw;
        }
        > img {
            height: 15vw;
            width: 15vw;
            /* padding: 5vw; */
            margin-right: 24px;
            box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.5);
        }
    }

    .playlist__title {
        font-size: 12px;
        text-transform: uppercase;
    }

    .playlist__name {
        font-size: 72px;
        letter-spacing: -0.4rem;
    }

    .playlist__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .playlist__body {
        padding: 30px 0 50px;
        /* margin: 0 -30px; */
    }

    .playlist__icons {
        > * {
            margin-right: 25px;
        }
        > i:not(:last-child) {
            color: #1db954;
        }
    }

    .playlist__songs {
        padding: 30px 10px;
    }
`;
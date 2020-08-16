import React from 'react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {shuffle} from 'react-icons-kit/entypo/shuffle';
import {ic_skip_previous} from 'react-icons-kit/md/ic_skip_previous';
import {ic_skip_next} from 'react-icons-kit/md/ic_skip_next';
import {play2} from 'react-icons-kit/icomoon/play2';
import {pause} from 'react-icons-kit/icomoon/pause';
import {repeat} from 'react-icons-kit/ikons/repeat';
import {ic_queue_music} from 'react-icons-kit/md/ic_queue_music';
import {ic_devices} from 'react-icons-kit/md/ic_devices';
import {volume_1} from 'react-icons-kit/ikons/volume_1';
import { useDataValue } from '../../../contexts/DataContext';

function Footer() {

    const [{ currentSong, spotify, playing, progress }, dispatch] = useDataValue();

    const playPauseSong = () => {
        if(playing) {
            spotify.pause().then((res) => {
                dispatch({
                    type: 'SET_PLAYING',
                    playing: false
                })
            });
        } else if(currentSong) {
            spotify.play().then((res) => {
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true
                })
            });
        }
    }

    window.addEventListener('keydown', (e) => {
        if(e.which === 32) {
            playPauseSong();
        }
    })

    const skipNext = () => {
        spotify.skipToNext().then((res) => {
            setCurrentSong();
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        });
    }
    
    const skipPrevious = () => {
        setCurrentSong();
        spotify.skipToPrevious().then((res) => {
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        });
    }

    const setCurrentSong = () => {
        spotify.getMyCurrentPlaybackState().then((state) => {
            dispatch({
                type: 'SET_SONG',
                currentSong: state?.item,
                playing: state.is_playing,
                progress: state.progress_ms
            });
        })
    }
    
    return (
        <FooterContainer progress={progress} duration={currentSong?.duration_ms}>
            <div className="footer__left">
                <img 
                    className='footer__leftLogo'
                    src={currentSong?.album?.images[2].url}
                    alt='Currently Playing Song' />
                <div className="footer__songInfo">
                    <span className='footer__songInfoName'>{currentSong?.name}</span>
                    <p className='footer__songInfoAlbum'>{currentSong?.album?.artists.map(artist => artist.name).join()}</p>
                </div>
            </div>
            <div className="footer__center">
                <div className="footer__playbackButtons">
                    <Icon icon={shuffle} />
                    <Icon icon={ic_skip_previous} size={24} onClick={skipPrevious}/>
                    {playing ? <Icon icon={pause} size={32} onClick={() => playPauseSong()} /> :
                        <Icon icon={play2} size={32} onClick={() => playPauseSong()} />}
                    <Icon icon={ic_skip_next} size={24} onClick={skipNext}/>
                    <Icon icon={repeat} />
                </div>
                <div className="footer__centerBar">
                    <div className="footer__progress-bar">
                    </div>
                </div>
            </div>
            <div className="footer__right">
                <Icon icon={ic_queue_music} size={20} />
                <Icon icon={ic_devices} size={20} />
                <Icon icon={volume_1} size={20} />
                <div className="footer__rightBar">
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    height: 91px;
    width: 100%;
    background: #282828;
    padding: 20px;
    color: #b3b3b3;
    display: flex;
    justify-content: space-between;

    i:hover {
        transition: transform 200ms ease-in-out;
        transform: scale(1.2);
        color: #fff;
    }

    .footer__left {
        flex: 0.3;
        display: flex;
        align-items: center;
    }

    .footer__leftLogo {
        height: 60px;
        width: 60px;
        object-fit: contain;
        margin-right: 15px;
    }

    .footer__songInfoName {
        color: #fff;
    }

    .footer__songInfoAlbum {
        font-size: 13px;
    }

    .footer__center {
        display: flex;
        flex-direction: column;
        flex: 0.4;
        align-items: center;
    }

    .footer__playbackButtons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        align-items: center;
        width: 100%;
        max-width: 230px;
    }

    .footer__centerBar {
        width: 100%;
        height: 4px;
        background: #535353;
        overflow: hidden;
    }

    .footer__progress-bar {
        background: #b3b3b3;
        height: 4px;
        width: 100%;
        transform: ${({ progress, duration }) => "translateX(-" + (((duration - progress)/duration)*100).toFixed(4) + "%)"};
        ${({ progress, duration }) => console.log("translateX(-" + ((progress/duration)*100).toFixed(4) + "%)")}
    }

    .footer__right {
        flex: 0.3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        > i {
            padding: 0 5px;
        }
    }

    .footer__rightBar {
        width: 80px;
        height: 4px;
        background: #535353;
    }
`;

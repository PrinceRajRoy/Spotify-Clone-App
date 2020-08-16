import React from 'react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { useDataValue } from '../../../../contexts/DataContext';

function SidebarFeatures({ title, icon, id, Symbol, playlist, liked }) {

    const [{ spotify }, dispatch] = useDataValue();

    const handleClick = () => {
        if(playlist) {
            spotify.getPlaylist(id).then(playlist => {
                dispatch({
                    type: 'SET_CURRENT_PLAYLIST',
                    playlist: playlist
                })
            })
        }
        else if(liked) {
            spotify.getMySavedTracks().then((tracks) => {
                dispatch({
                    type: 'SET_CURRENT_PLAYLIST',
                    playlist: tracks
                })
            });
        }
    }
    
    return (
        <SidebarFeaturesContainer symbol={Symbol} playlist={playlist}>
            {Symbol && <Symbol />}
            {icon && <Icon icon={icon} size={24} className='sidebar__icon' /> }
            
            <span className={playlist ? 'sidebar__playlistTitle' : null} onClick={() => handleClick()}>{title}</span>
        </SidebarFeaturesContainer>
    )
}

export default SidebarFeatures;

const SidebarFeaturesContainer = styled.div`

    color: #b3b3b3;
    display: flex;
    align-items: center;
    padding: 0px 24px;
    cursor: pointer;
    font-weight: ${({ playlist }) => playlist ? '400' : '700'};
    height: ${({ playlist }) => playlist ? '30px' : '40px'};
    opacity: ${({ symbol }) => symbol ? '0.7' : 'unset'};
    transition: color 200ms ease-in;

    &:hover {
        color: #fff;
    }

    .sidebar__icon {
        padding-right: 10px;
    }

    .sidebar__playlistTitle {
        width: 184px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

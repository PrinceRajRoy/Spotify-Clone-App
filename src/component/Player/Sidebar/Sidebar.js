import React from 'react'
import styled from 'styled-components';
import SidebarFeatures from './SidebarFeatures/SidebarFeatures';
import {ic_home} from 'react-icons-kit/md/ic_home';
import {search} from 'react-icons-kit/fa/search';
import {books} from 'react-icons-kit/icomoon/books';
import { Plus, Liked } from '../../../svg/svg';
import { useDataValue } from '../../../contexts/DataContext';

function Sidebar() {

    const [{ playlists }] = useDataValue();
    
    return (
        <SidebarContainer>
            <Logo src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo"/>
            
            <SidebarFeatures title='Home' icon={ic_home} />
            <SidebarFeatures title='Search' icon={search} />
            <SidebarFeatures title='Library' icon={books} />
            <br/>

            <h4 className='sidebar__title'>Playlists</h4>
            <SidebarFeatures title='Create Playlist' Symbol={Plus}/>
            <SidebarFeatures title='Liked Songs' Symbol={Liked} liked/>
            <hr />
            
            {playlists?.items?.map(el => (
                <SidebarFeatures title={el.name} key={el.id} id={el.id} playlist/>
            ))}

        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    font-size: 14px;
    height: 100vh;
    min-width: 232px;
    padding-top: 24px;
    background: #040404;

    .sidebar__title {
        color: #b3b3b3;
        text-transform: uppercase;
        font-size: 12px;
        margin: 0px 24px 12px;
    }

    > hr {
        margin: 16px 24px;
        height: 1px;
        background: #282828;
        border: none;
    }
`;

const Logo = styled.img`
    height: 60px;
    margin-right: auto;
    padding-left: 14px;
`;


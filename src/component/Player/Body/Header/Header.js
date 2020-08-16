import React from 'react'
import { useDataValue } from '../../../../contexts/DataContext'
import styled from 'styled-components';
import {search} from 'react-icons-kit/fa/search';
import Icon from 'react-icons-kit';
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';

function Header() {

    const [{ user }] = useDataValue();

    return (
        <HeaderContainer>
            <div className="header__left">
                <Icon icon={search} />
                <input
                    placeholder='Search For Artists, Songs, or Podcasts'
                    type='text'
                />
            </div>
            <div className="header__right">
                <img src={user?.images[0]?.url} alt="User Avatar"/>
                <h4>{user?.display_name}</h4>
                <Icon icon={ic_arrow_drop_down} size={28} />
            </div>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .header__left {
        flex: 0.5;
        background: #fff;
        color: #535353;
        border-radius: 30px;
        display: flex;
        align-items: center;
        padding: 10px;
        min-width: 90px;
        > input {
            border: none;
            outline: none;
            width: 100%;
        }
    }

    .header__right {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 23px;
        height: 32px;
        > h4 {
            margin-left: 10px;
            font-size: 14px;
        }
        > img {
            height: 32px;
            width: 32px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`;

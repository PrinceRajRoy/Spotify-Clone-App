import React from 'react'
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { loginEndpoint } from '../../utilities/spotify';

function Login() {
    return (
        <LoginContainer>
            <img className='login__logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify Logo' />
            <a href={loginEndpoint}>Login with spotify</a>
        </LoginContainer>
    )
}

export default Login;

const customBreakPoint = generateMedia({
    md: '960px'
})

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: rgb(0, 0, 0);

    .login__logo {
        width: 100%;
        ${customBreakPoint.greaterThan('md')`
            width: initial;
        `}
    }

    a {
        text-transform: uppercase;
        padding: 20px;
        border-radius: 99px;
        background-color: #1db954;
        font-weight: 800;
        color: white;
        text-decoration: none;
    }
`;


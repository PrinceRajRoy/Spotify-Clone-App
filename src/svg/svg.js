import React from 'react'
import styled from 'styled-components'

export function Plus() {
    return (
        <PlusContainer viewBox="0 0 36 36"><path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path></PlusContainer>
    )
}

export function Liked() {
    return (
        <LikedContainer viewBox="0 0 1792 1792"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"></path></LikedContainer>
    )
}

const PlusContainer = styled.svg`
    background: #fff;
    width: 32px;
    height: 32px;
    padding: 4px;
    margin-right: 16px;
`;

const LikedContainer = styled.svg`
    background: linear-gradient(135deg, #450af5, #cfefd9);
    fill: #fff;
    width: 32px;
    height: 32px;
    padding: 8px;
    margin-right: 16px;
`;
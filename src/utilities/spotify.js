export const authURL = 'https://accounts.spotify.com/authorize';
const redirectURL = 'http://localhost:3000/';
const clientID = process.env.REACT_APP_clientID;

const scopes = [
    'user-top-read',
    'user-read-recently-played',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-library-read',
    'user-modify-playback-state',
    'streaming'
];

export const getToken = () => window.location.hash
            .substring(1)
            .split('&')
            .reduce((acc, cur) => {
                let pair = cur.split('=');
                acc[pair[0]] = decodeURIComponent(pair[1]);
                return acc;
            }, {});

export const loginEndpoint = `${authURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
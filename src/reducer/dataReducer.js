export const initialState = {
    user: null,
    // token: "BQB3kE925GZCiZg-Rucwiy3M9x0g_Q6A3MWcIgz_LaxkOTmiDtMKFYdyw3o5ZSNdwA6z1ht_-86p-dUYy7kNrk5eMHmAEb2PtaJ-NWF0nmf3smhfVFwKqJrG2CS2d2NbvJ1QXtu_5QoD-G9p6iEBBs1Od99Z0AX6nMdS-Z-2ZfWWGe3nXMLs",
    playing: false,
    currentSong: null,
    playlists: [],
    currentPlaylistId: null,
    currentPlaylistBG: '',
    progress: 0,
    spotify: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_SPOTIFY_APP':
            return {
                ...state,
                spotify: action.spotify
            }
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                currentPlaylist: action.playlist
            }
        case 'SET_CURRENT_PLAYLISTBG':
            return {
                ...state,
                currentPlaylistBG: action.playlistBG
            }
        case 'SET_SONG':
            return {
                ...state,
                currentSong: action.currentSong,
                playing: action.playing,
                progress: action.progress
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        default: 
            return state;
    }
}

export default reducer;
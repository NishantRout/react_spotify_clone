export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after developing
    token: null //"BQDNlsxPLWHj3ZLko_rt85MdjeCUKwaHMFkBMPYX6tk5IaL26AFqtbNmPMyh__Rw9zuEtCddpep3aEPKXJmCryjiJ3PJ_Bmm6V02VcorAf0MhrWhx7tnFIEoiSFIpKyjc-XpuAdegNQjS15Qd0pMekV4WwfEVEKN-iT_3wdf0C9jGYzvw55B"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
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
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;
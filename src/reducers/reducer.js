export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: null,
    token: "BQCafYGhABmyUCmniFFfgqviKZhpfbAlbLT5liXH2Kp-P0jOdI7MobhHu4oU7Q7nnNc-LUaIfcymt_aEa8dk22s4Agd4wELXJeb61_v_Iv6xtUjtYcGTNbAqOwDDGwZzTaM95rJ6NnLsnZVsJCR93g4Pdq8jACeneZqG5FC71sjORCLx2k8q"

    // Remove after developing
    // token: "BQDNlsxPLWHj3ZLko_rt85MdjeCUKwaHMFkBMPYX6tk5IaL26AFqtbNmPMyh__Rw9zuEtCddpep3aEPKXJmCryjiJ3PJ_Bmm6V02VcorAf0MhrWhx7tnFIEoiSFIpKyjc-XpuAdegNQjS15Qd0pMekV4WwfEVEKN-iT_3wdf0C9jGYzvw55B"
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
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;
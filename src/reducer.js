export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    top_artists:null,
    spotify:null,
    discover_weekly:null,
    //Remove after development just done for easy login
    // token:"BQBROXriunD6BYWBhwl1i1wayiQp_tg4hfj47_wGrsXgSff3zS3aZuPi57m_MoVjcOuComynJ83h2V-aqOPMakI7nbtLC-hd9pCdh2iz7QZ40WdgyetlWtSQFvdfWJokOXZCmO4_T9fUaP35lKmaa4eWCpBezigRqTORYrNqYfTExf081b3CBtKKIpceffpff-H5QmoR1t28ncfj",

}
const reducer = (state,action) =>{
    console.log(action);
    //Action -> type, [payload]
switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing:action.playing,
            };
        case 'SET_ITEM':
            return{
                ...state,
                item:action.item,
            };
        case 'SET_TOP_ARTISTS':
            return{
                ...state,
                top_artists:action.top_artists,
            };
        case 'SET_SPOTIFY':
            return{
                ...state,
                spotify:action.spotify,
            };
    default:
        return state;
}
}
export default reducer;
/**
 * Created by LucasHC.
 */
import * as types from '../actions/actions.js';

export const sideBarChange = (state = {showLeftNav: false}, action) => {
    if (action.type === 'CHANGE_SIDEBAR_STATE') {
        let newState = {showLeftNav: !state.showLeftNav};
        return newState;
    }
    return state;
}

export const contents = (state = {loading:false, contents:{}, currentChanel:'BBC New'}, action) => {
    switch (action.type) {
        case 'FETCH_CONTENTS_START': {
            let newState = {
                loading: true,
                contents: {}
            }
            return newState;
        }
        case 'FETCH_CONTENTS_SUCCESS': {
            let newState = {
                loading: false,
                contents: action.contents,
                currentChanel: action.contents.currentChanel
            }
            return newState;
        }
        default: return state
    }
}

// export const currentChanel = (state = 'BBC New', action) => {
//     switch (action.type) {
//         default: return state
//     }
// }

const rootReducer = {sideBarChange, contents}


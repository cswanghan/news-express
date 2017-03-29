/**
 * Created by LucasHC.
 */

import 'whatwg-fetch';


// const START_LOADING = 'START_LOADING';
//  请求通用部分
const sendByGet = ({url}, dispatch) => {
    let finalUrl = url + '&apiKey='
    return fetch(finalUrl)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
}



const CHANGE_SIDEBAR_STATE = 'CHANGE_SIDEBAR_STATE';
export const changeSideBarState = () => {
    return dispatch => dispatch({type: CHANGE_SIDEBAR_STATE});
}


const FETCH_CONTENTS_SUCCESS = 'FETCH_CONTENTS_SUCCESS';
const FETCH_CONTENTS_START = 'FETCH_CONTENTS_START';

export const fetchContents = (source) => {
    console.log(source)
    const url = 'https://newsapi.org/v1/articles?source='+source+'&sortBy=top';
    return (dispatch) => {
        dispatch({type: FETCH_CONTENTS_START});
        // 先判断sessionStorage是否存在相关条目
        if (sessionStorage.getItem(source)) {
            console.log('get from sessionStorage');
            let articles = JSON.parse(sessionStorage.getItem(source));
            dispatch({type: FETCH_CONTENTS_SUCCESS, contents: Object.assign(articles, {currentChanel: source.toUpperCase()})})
        }
        else {
            sendByGet({url}, dispatch)
            .then((json) => {
                if (json.status === 'ok') {
                    sessionStorage.setItem(source, JSON.stringify(json.articles)); 
                    return dispatch({type: FETCH_CONTENTS_SUCCESS, contents: Object.assign(json.articles, {currentChanel: source.toUpperCase()})})
                }
                return Promise.reject(new Error('FETCH_CONTENTS_SUCCESS failure'));
            })
            .catch((error) => {
                return Promise.reject(error)
            })
        }
    }
}

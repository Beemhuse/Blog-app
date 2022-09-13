// import {ADD_ARTICLE} from "../constants/action-types"

const ADD_ARTICLE = "ADD_ARTICLE"

export function addArticle(payload){
    return {
        type: ADD_ARTICLE, 
        payload
    }
};
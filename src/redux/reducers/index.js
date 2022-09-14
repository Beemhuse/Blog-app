// import { ADD_ARTICLE } from "../constants/action-types"
import {createSlice} from "@reduxjs/toolkit"
import {UsersData} from "../fakeData"

export const postSlice = createSlice({
    name: "posts",
    initialState:{value: UsersData},
    reducers: {
        addPost: (state, action) =>{
            state.value.push(action.payload);
        },
        deletePost:(state, action) =>{
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updatePost:(state, action) =>{
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.title = action.payload.title
                    user.postText = action.payload.postText
                }
                return state
            })
        }
    }
})

export const {addPost, deletePost, updatePost} = postSlice.actions
export default postSlice.reducer;

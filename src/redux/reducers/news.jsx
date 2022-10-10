// import { ADD_ARTICLE } from "../constants/action-types"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
 news: [],
 status: 'idle'|'pending' | "success" | "failed",
 error: null

};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
        const url =
          "https://newsapi.org/v2/everything?" +
          "q=Apple&" +
          "from=2022-10-04&" +
          "sortBy=popularity&" +
          "apiKey=1ba5977deeb94fa1b0e93c689ac0de7f";
        const response = await fetch(url);
        const body = await response.json();
return body  
    
  
})

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        viewNews: (state, action) =>{
            // state.news.push(action.payload);
            state.news = [...action.payload]
            return state
        },
        addNews: (state, action) =>{
            state.push(action.payload);
            // state.posts = [...action.payload]
            return state
        },
        deleteNews:(state, action) =>{
            state= state.filter((user) => user.id !== action.payload.id)
            // return state
        },
        // updateNews:(state, action) =>{
        //     state.map((user) => {
        //         if(user.id === action.payload.id){
        //             user.title = action.payload.title
        //             user.postText = action.payload.postText
        //         }
        //         return state
        //     })
        // }
    },
    extraReducers(builder){
        builder
          .addCase(fetchNews.pending, (state, action) => {
            state.status = "loading";
          })

          .addCase(fetchNews.fulfilled, (state, action) => {
            
            state.status = "success"
            return state.news = action.payload
          })

          .addCase(fetchNews.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
          });
    }
})

export const {viewNews, deleteNews, updateNews, addNews} = newsSlice.actions
export const selectAllNews = (state) => state.news.news;
export const getNewsStatus = (state) => state.news.status;
export const getNewsError = (state) => state.news.news;



export default newsSlice.reducer;
// import { ADD_ARTICLE } from "../constants/action-types"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase-config'

const initialState = {
 posts: [],
 status: 'idle',
 error: null

};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try{
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef);
      let res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
return res
  }
  catch (err){
    return err.message
  }

})

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        viewPost: (state, action) =>{
            // state.push(action.payload);
            state = [...action.payload]
            return state
        },
        deletePost:(state, action) =>{
            state= state.filter((user) => user.id !== action.payload.id)
        },
        updatePost:(state, action) =>{
            state.map((user) => {
                if(user.id === action.payload.id){
                    user.title = action.payload.title
                    user.postText = action.payload.postText
                }
                return state
            })
        }
    },
    extraReducers(builder){
        builder
          .addCase(fetchPosts.pending, (state, action) => {
            state.status = "loading";
          })

          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "loading";
          })

          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
          });
    }
})

export const {viewPost, deletePost, updatePost} = postSlice.actions
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>{
  state.posts.find((post) => post.id === postId )
return state
}


export default postSlice.reducer;
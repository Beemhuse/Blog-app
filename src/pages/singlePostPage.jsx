import React from 'react';
import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom"
import {} from '../redux/'
// import {selectPostById, fetchPosts, getPostsStatus, selectAllPosts, getPostsError } from "../redux/reducers/index";
// import {  useDispatch } from "react-redux";




export const SinglePostPage =() =>{
const { postId } = useParams()

// const dispatch= useDispatch()

console.log(postId)


// useEffect(()=>{
//   dispatch()


// },[ dispatch])


const post = useSelector((state) =>{
    const result = state.posts.posts.find((post) => post.id === postId);
    // console.log({result,postId})
    return result
// return state;
})
// const post = useSelector(selectPostById);
console.log(post)

if (!post ){
    return (
        <section>
            <h3 style={{color:'black'}}>Post not found!</h3>
        </section>
    )
}







return(
    <>


    <section>
        <article >
            hfhsioaufhaoihfpaoih
            <h2 style={{color: 'black'}}>{post.author.name}</h2>
            <p>{post.postText}</p>
        </article>
    </section>



    </>
)




}
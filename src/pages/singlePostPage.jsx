import React from 'react';
import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom"
import {selectPostById} from '../redux/'
export const SinglePostPage =() =>{
const { postId } = useParams()
console.log(postId)

const post = useSelector((state) =>
  state.posts
);
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
        <article style={{backgroundColor:'yellow'}}>
            hfhsioaufhaoihfpaoih
            <h2 style={{color: 'black'}}>{post.author}</h2>
            <p>{post.postText}</p>
        </article>
    </section>



    </>
)




}
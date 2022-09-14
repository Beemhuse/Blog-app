import React from 'react';
import {useSelector} from 'react-redux'

export const SinglePostPage =({match}) =>{
const {postId} = match.params

const post = useSelector(state => post.id === postId)

if (!post){
    return (
        <section>
            <h3>Post not found!</h3>
        </section>
    )
}







return(
    <>
    
    </>
)




}
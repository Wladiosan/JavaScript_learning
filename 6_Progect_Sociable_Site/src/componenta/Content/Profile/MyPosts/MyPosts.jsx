import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let messageDate = [
        {id: '1', message: 'Hi, how are you?', counterLike: '15'},
        {id: '2', message: 'It\'s my first post', counterLike: '21'}
    ]

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posted}>
                <Post message={messageDate[0].message} counterLike={messageDate[0].counterLike}/>
                <Post message={messageDate[1].message} counterLike={messageDate[1].counterLike}/>
            </div>
        </div>
    )
}

export default MyPosts;
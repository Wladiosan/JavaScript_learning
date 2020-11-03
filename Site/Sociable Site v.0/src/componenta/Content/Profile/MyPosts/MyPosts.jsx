import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} counterLike={m.counterLike}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}/></div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posted}>{postsElements}</div>
        </div>
    )
}

export default MyPosts;

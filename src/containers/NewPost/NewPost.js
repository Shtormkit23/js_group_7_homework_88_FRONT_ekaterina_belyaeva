import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPost as onPostCreated} from "../../store/actions/postsActions";
import PostForm from "../../components/PostForm/PostForm";
import {Redirect} from "react-router-dom";

const NewPost = props => {
    const dispatch = useDispatch();
    let userName = useSelector(state => state.users.user);

    const createPost = postData => {
        dispatch(onPostCreated(postData)).then(() => {
            props.history.push("/");
        });
    };

    return (
        <>
            {userName ?
                <>
                    <h1>New post</h1>
                    <PostForm onSubmit={createPost}/>
                </>
                : <Redirect to="/login"/>}
        </>
    );
};

export default NewPost;
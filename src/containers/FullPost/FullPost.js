import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments, fetchPost} from "../../store/actions/postsActions";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";
import PostCard from "../../components/PostCard/PostCard";

const FullPost = (props) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.post);
    const comments = useSelector(state => state.posts.comments);
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(fetchPost(id));
        dispatch(fetchComments(id));
    }, [dispatch, id]);

    return (
        <>
            <div>
                {post &&
                <PostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    user={post.user.username}
                    datetime={post.datetime}
                />}
            </div>
            {post &&
            <div>
                {comments && comments.map(comment => {
                    return <CommentCard
                        key={comment._id}
                        id={comment._id}
                        user={comment.user}
                        comment={comment.comment}
                        datetime={comment.datetime}
                    />
                })}
            </div>}
            {post &&
            <CommentForm
                id={post._id}
            />}
        </>
    );
};

export default FullPost;
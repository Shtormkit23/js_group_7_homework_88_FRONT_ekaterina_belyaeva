import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postsActions";
import PostCard from "../../components/PostCard/PostCard";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="row" spacing={2}>
                {posts.map(post => {
                    return <PostCard
                        key={post._id}
                        id={post._id}
                        description={post.description}
                        image={post.image}
                        title={post.title}
                        datetime={post.datetime}
                        user={post.user.username}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Posts;
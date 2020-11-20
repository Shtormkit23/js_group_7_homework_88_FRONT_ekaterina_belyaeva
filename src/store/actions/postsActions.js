import axios from "../../axiosApi";
import {
    CREATE_POST_SUCCESS, FETCH_COMMENTS_SUCCESS,
    FETCH_FAILURE, FETCH_POST_SUCCESS,
    FETCH_POSTS_SUCCESS
} from "../actionTypes";

const fetchPostsSuccess = posts => {
    return {type: FETCH_POSTS_SUCCESS, posts};
};

const fetchPostSuccess = post => {
    return {type: FETCH_POST_SUCCESS, post};
};

const fetchFailure = error => {
    return {type: FETCH_FAILURE, error};
};

const createPostSuccess = () => {
    return {type: CREATE_POST_SUCCESS};
};

const fetchCommentsSuccess = comments => {
    return {type: FETCH_COMMENTS_SUCCESS, comments};
};


export const fetchPosts = () => {
    return async dispatch => {
        try {
            await axios.get("/posts").then(response => {
                dispatch(fetchPostsSuccess(response.data));
            })
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchPost = (id) => {
    return async dispatch => {
        try {
            await axios.get(`/posts/${id}`).then(response => {
                dispatch(fetchPostSuccess(response.data));
            })
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};


export const createPost = postData => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.post("/posts", postData, {headers}).then(response => {
                dispatch(createPostSuccess(response.data));
            })
        }catch (e) {
            dispatch(fetchFailure(e));
        }
    };
};

export const fetchComments = query => {
    return async dispatch => {
        try {
            const response = await axios.get("/comments?post=" + query);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const createComment = (data) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.post("/comments", data, {headers});
        } catch (e) {
            dispatch(fetchFailure(e));
        }
    };
};


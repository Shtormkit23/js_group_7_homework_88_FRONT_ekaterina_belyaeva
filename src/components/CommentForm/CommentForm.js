import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import {createComment, fetchComments} from "../../store/actions/postsActions";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: 1200,
            marginTop: 10
        },
    },
}));

const CommentForm = ({id}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let userName = useSelector(state => state.users.user);

    const [state, setState] = useState({
        comment: "",
        post: ""
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const commentState = {...state};
        commentState.post = id;
        const newComment = {...commentState};
        dispatch(createComment(newComment));
        dispatch(fetchComments(id));
        const newState = {
            comment: "",
            post: id
        };
        setState(newState);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <>
            {userName ?
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitFormHandler}
                >
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="Comment">Comment</InputLabel>
                        <OutlinedInput
                            id="comment"
                            label="comment"
                            value={state.comment}
                            onChange={inputChangeHandler}
                            name="comment"
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <Button type="submit" color="primary">Create</Button>
                    </FormControl>
                </form>
                : null}
        </>
    );
};

CommentForm.propTypes = {
    id: PropTypes.string.isRequired
};

export default CommentForm;
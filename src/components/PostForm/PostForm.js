import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import FileInput from "../Form/FileInput";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const PostForm = ({onSubmit}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
  });

  const submitFormHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });
    onSubmit(formData);
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };
  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setState(prevState => ({...prevState, [name]: file}));
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="title">Title</InputLabel>
        <OutlinedInput
          id="title"
          label="Title"
          value={state.title}
          onChange={inputChangeHandler}
          name="title"
          required
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="description">Description</InputLabel>
        <OutlinedInput
          id="description"
          label="Description"
          multiline
          rows={4}
          value={state.description}
          onChange={inputChangeHandler}
          name="description"
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <FileInput
          label="Image"
          name="image"
          onChange={fileChangeHandler}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <Button type="submit" color="primary">Create</Button>
      </FormControl>
    </form>
  );
};

export default PostForm;
import React from 'react';
import {Switch, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {useSelector} from "react-redux";
import Posts from "./containers/Posts/Posts";
import FullPost from "./containers/FullPost/FullPost";
import NewPost from "./containers/NewPost/NewPost";
import AlignItemsList from "./components/CommentCard/CommentCard";


const App = () => {
    const user = useSelector(state => state.users.user);
    return(
        <>
            <CssBaseline />
            <AppToolbar user={user}/>
            <main>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Posts} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/posts/:id" exact component={FullPost}/>
                        <Route path="/new_post" exact component={NewPost}/>
                        <Route path="/comment" exact component={AlignItemsList}/>

                        <Route render={() => <h1>404 Not Found</h1>}/>
                    </Switch>
                </Container>
            </main>
        </>
    )};

export default App;

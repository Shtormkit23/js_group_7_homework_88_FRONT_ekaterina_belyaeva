import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import chatIcon from "../../image/123.jpg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1200,
        backgroundColor: theme.palette.background.paper,
        marginTop: 5,
        border: "1px solid gray",
        borderRadius: 10,
        overflow: "hidden",
        display: "flex"
    },
    inline: {
        borderRadius: 10
    },
    cardMedia: {
        width: 200,
        minHeight: 100
    },
    content: {
        width:1000
    }
}));

const CommentCard = ({id, user, comment, datetime}) => {
    const classes = useStyles();

    return (
        <Grid id={id} className={classes.root}>
            <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image={chatIcon}/>
            </Hidden>
            <div className={classes.inline}>
                <Card className={classes.content}>
                    <div className={classes.content}>
                        <CardContent className={classes.content}>
                            {user && <Typography variant="subtitle1" color="textSecondary">
                                Author: {user.username}
                            </Typography>}
                            <Typography variant="subtitle1" paragraph>
                                {comment}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {datetime}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </Grid>
    );
};

CommentCard.propTypes = {
    id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    datetime: PropTypes.string,
    user: PropTypes.object.isRequired
};

export default CommentCard;
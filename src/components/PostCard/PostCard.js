import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {apiURL} from "../../constants";
import imageNotAvailable from "../../image/123.jpg"
import "./Card.css";

const useStyles = makeStyles({
    main: {
        width: 1200
    },
    card: {
        display: "flex",
        backgroundColor: "rgba(65, 105, 225,0.2)"
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 260,
        height: 220,
        borderRadius: "40%"
    },
    datetime: {
        fontSize: 12
    }
});

const PostCard = ({id, description, image, title, datetime, user}) => {
    const classes = useStyles();

    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiURL + "/uploads/" + image;
    }

    return (
        <Grid item id={id}>
            <CardActionArea component="a" href={`/posts/${id}`} className={classes.main}>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={cardImage}/>
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                               author: {user}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" className={classes.datetime}>
                                {datetime}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {description}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

PostCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    datetime: PropTypes.string,
    user: PropTypes.string.isRequired
};

export default PostCard;
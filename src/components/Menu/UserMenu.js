import React from "react";
import {Button} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {logoutUser} from "../../store/actions/usersActions";
import {useDispatch} from "react-redux";


const useStyles = makeStyles(theme => ({
    dropDownBtn: {
        color: theme.palette.common.white
    }
}));

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.dropDownBtn}
            >
                Hello, {user.username} !
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem><a href="/new_post" className='button' ><span>Add new post</span></a></MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;
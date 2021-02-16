import React, {Component} from 'react';
import {createStyles, Snackbar} from "@material-ui/core";
import Alert from "./Alert";
import {withStyles} from "@material-ui/core/styles";

const useStyles = createStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
}));


class SuccessSnackBar extends Component {

    render() {
        const { classes, message, open, handleClose } = this.props;
        return (
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default withStyles(useStyles)(SuccessSnackBar);
import React, {Component} from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const useStyles = ((theme) => ({
    margin: {
        margin: theme.spacing(2),
        width: '25ch'
    },
    root: {
        border: '1px solid gray',
        borderRadius: '10px',
        margin: theme.spacing(1)
    },
    padding: {
        padding: theme.spacing(2)
    }
}));

class JobWorkingPlaceInput extends Component {
    state = {
        location: this.props.location
    }

    render() {
        const { classes } = this.props;
        const { location } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.padding} variant="h6" gutterBottom component="div">
                    Localização
                </Typography>
                <TextField className={classes.margin} id="city" label="Cidade" variant="outlined" defaultValue={location.city}/>
                <TextField className={classes.margin} id="state" label="Estado" variant="outlined" defaultValue={location.state}/>
                <TextField className={classes.margin} id="country" label="País" variant="outlined" defaultValue={location.country}/>
            </div>

        );
    }
}

export default withStyles(useStyles)(JobWorkingPlaceInput);
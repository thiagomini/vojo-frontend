import React, {Component} from 'react';
import {TextField, Typography} from "@material-ui/core";
import {createStyles, withStyles} from "@material-ui/core/styles";

const useStyles = ((theme) => createStyles({
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

    render() {
        const { classes, location, setLocation } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.padding} variant="h6" gutterBottom component="div">
                    Localização
                </Typography>
                <TextField
                    className={classes.margin}
                    id="city"
                    label="Cidade"
                    variant="outlined"
                    defaultValue={location.city.value}
                    onChange={(event) => setLocation(event, 'city')}
                />
                <TextField
                    className={classes.margin}
                    id="state"
                    label="Estado"
                    variant="outlined"
                    defaultValue={location.state.value}
                    onChange={(event) => setLocation(event, 'state')}
                />
                <TextField
                    className={classes.margin}
                    id="country"
                    label="País"
                    variant="outlined"
                    defaultValue={location.country.value}
                    onChange={(event) => setLocation(event, 'country')}
                />
            </div>

        );
    }
}

export default withStyles(useStyles)(JobWorkingPlaceInput);
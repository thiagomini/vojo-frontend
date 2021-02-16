import React, {Component} from 'react';
import {Checkbox, createStyles, FormControlLabel, FormGroup, TextField, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const useStyles = createStyles((theme) => ({
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

class CompensationInputField extends Component {

    render() {
        console.log('CompensationInputField Renderizado')
        const { classes, setCompensation, compensation } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.padding} variant="h6" gutterBottom component="div">
                    Remuneração
                </Typography>
                <TextField
                    className={classes.margin}
                    id="amount"
                    label="Quantidade"
                    variant="outlined"
                    defaultValue={compensation.amount.value}
                    onChange={(event) => setCompensation(event.target.value, 'amount')}
                />
                <TextField
                    className={classes.margin}
                    id="currency"
                    label="Moeda"
                    variant="outlined"
                    defaultValue={compensation.currency.value}
                    onChange={(event) => setCompensation(event.target.value, 'currency')}
                />
                <TextField
                    className={classes.margin}
                    id="recurrency"
                    label="Frequência"
                    variant="outlined"
                    defaultValue={compensation.recurrency.value}
                    onChange={(event) => setCompensation(event.target.value, 'recurrency')}
                />
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        className={classes.margin}
                        checked={compensation.isVariable.value}
                        onClick={(event) => setCompensation(!compensation.isVariable.value, 'isVariable')}
                        control={<Checkbox color="primary" />}
                        label="Variável"
                        labelPlacement="end"
                    />
                </FormGroup>
            </div>

        );
    }
}

export default withStyles(useStyles)(CompensationInputField);
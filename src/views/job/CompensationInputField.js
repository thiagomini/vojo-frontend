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

class CompensationInputField extends Component {

    state = {
        compensation: this.props.compensation
    }

    changeIsVariable = (event) => {
        const checked = event.target.checked;
        this.setState((previous) => ({
            compensation: {
                ...previous.compensation, isVariable: checked
            }
        }));
    }

    render() {
        const { classes } = this.props;
        const { compensation } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.padding} variant="h6" gutterBottom component="div">
                    Remuneração
                </Typography>
                <TextField className={classes.margin} id="amount" label="Quantidade" variant="outlined" defaultValue={compensation.amount}/>
                <TextField className={classes.margin} id="currency" label="Moeda" variant="outlined" defaultValue={compensation.currency}/>
                <TextField className={classes.margin} id="recurrency" label="Frequência" variant="outlined" defaultValue={compensation.recurrency}/>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        className={classes.margin}
                        checked={compensation.isVariable}
                        onClick={(event) => this.changeIsVariable(event)}
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
import React, {Component} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CompensationInputField from "./CompensationInputField";
import JobWorkingPlaceInput from "./JobWorkingPlaceInput";
import { defaultInputState } from '../../utils/formDefaultStates'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = ((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    'text-field': {
        width: '50ch'
    }
}));

class EditJobForm extends Component {

    state = {
        jobId: this.props.job._id,
        fields: {
            active: { ...defaultInputState, value: this.props.job.active },
            title: { ...defaultInputState, value: this.props.job.title },
            company: { ...defaultInputState,value: this.props.job.company },
            compensation: { ...defaultInputState, value: this.props.job.compensation },
            location: { ...defaultInputState, value: this.props.job.location },
        },
        updateData: {
            isLoading: false,
            error: null,
            success: false
        }
    }

    handleFieldUpdate = (fieldName, event) => {
        const newState = {value: event.target.value }
        this.setState(previousState => ({
            fields: {
                ...previousState.fields,
                [fieldName]: {
                    showError: false,
                    ...newState
                }
            }
        }))
    }

    handleClickSave = async () => {
        const requestObject = this.createRequestObject();
        await this.updateJob(requestObject);
    }

    createRequestObject = () => {
        let requestObject = {}
        Object.entries(this.state.fields).forEach(([key, data]) => {
            requestObject[key] = data.value
        })
        return requestObject;
    }

    toggleLoading = (value) => {
        this.setState((previousState) => ({
            updateData: { ...previousState.updateData, isLoading: value }
        }))
    }

    updateJob = async (data) => {
        const jobId = this.state.jobId;
        await this.toggleLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs/${jobId}`, {
            method:"PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            await this.setState({
                updateData: {
                    error: null,
                    isLoading: false,
                    success: true
                }
            })
        } else {
            const resData = await response.json()
            console.log(resData)
            await this.setState({
                loginData: {
                    error: resData.error,
                    isLoading: false,
                    success: false
                }
            })
        }

        this.toggleLoading(false);
    }

    render() {
        const { classes } = this.props;
        const { fields } = this.state;
        return (
            <form autoComplete={false}>
                <FormGroup aria-label="position" row>
                        <FormControlLabel
                            className={classes.margin}
                            checked={fields.active.value}
                            control={<Checkbox color="primary" />}
                            onClick={(event) => this.handleFieldUpdate('active', event)}
                            label="Ativo"
                            labelPlacement="end"
                        />
                </FormGroup>
                <TextField
                    className={classes.margin}
                    fullWidth
                    id="title"
                    label="Título"
                    variant="outlined"
                    defaultValue={fields.title.value}
                    onChange={(event) => this.handleFieldUpdate('title', event)}
                    required={true}/>
                <TextField
                    className={classes.margin}
                    fullWidth
                    id="company"
                    label="Empresa"
                    variant="outlined"
                    defaultValue={fields.company.value}
                    style={{width: '50ch'}}
                    onChange={(event) => this.handleFieldUpdate('company', event)}
                />
                <CompensationInputField compensation={fields.compensation.value}/>
                <JobWorkingPlaceInput location={fields.location.value}/>
                {
                    this.state.updateData.isLoading
                        ? <CircularProgress/>
                        : <Button onClick={this.handleClickSave} color="primary">Salvar Alterações</Button>
                }
            </form>
        );
    }
}

export default withStyles(useStyles)(EditJobForm);
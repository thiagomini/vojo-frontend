import React, {Component} from 'react';
import {Button, Checkbox, createStyles, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CompensationInputField from "./CompensationInputField";
import JobWorkingPlaceInput from "./JobWorkingPlaceInput";
import { defaultInputState } from '../../utils/formDefaultStates'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = (theme) => createStyles({
    margin: {
        margin: theme.spacing(1),
    },
    'text-field': {
        width: '50ch'
    }
});

class EditJobForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobId: this.props.job._id,
            fields: {
                active: { ...defaultInputState, value: this.props.job.active },
                title: { ...defaultInputState, value: this.props.job.title },
                company: { ...defaultInputState,value: this.props.job.company },
                compensation: {
                    amount: {...defaultInputState, value: this.props.job.compensation.amount},
                    currency: {...defaultInputState, value: this.props.job.compensation.currency},
                    recurrency: {...defaultInputState, value: this.props.job.compensation.recurrency},
                    isVariable: {...defaultInputState, value: this.props.job.compensation.isVariable},
                },
                location: { ...defaultInputState, value: this.props.job.location },
            },
            updateData: {
                isLoading: false,
                error: null,
                success: false
            }
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
        const requestObject = this.createRequestObject(this.state.fields);
        await this.updateJob(requestObject);
    }

    setCompensation = (value, nestedField) => {
        this.setState((previousState) => {
            const compensation = previousState.fields.compensation;
            compensation[nestedField].value = value

            const newFields = {
                ...previousState.fields,
                compensation
            }

            return {
                ...previousState,
                fields: newFields
            }
        })
    }

    setLocation = (event, nestedField) => {
        const newValue = event.target.value
        this.setState((previousState) => {
            const location = previousState.fields.location;
            location[nestedField].value = newValue

            const newFields = {
                ...previousState.fields,
                location: location
            }

            return {
                ...previousState,
                fields: newFields
            }
        })
    }

    createRequestObject = (fields) => {
        let requestObject = {}
        Object.entries(fields).forEach(([key, data]) => {
            requestObject[key] = data.hasOwnProperty('value') ? data.value : this.createRequestObject(data)
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
        console.log('EditJobForm Renderizado')
        return (
            <form autoComplete="false">
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
                    onChange={(event) => this.handleFieldUpdate('company', event)}
                />
                <CompensationInputField
                    compensation={fields.compensation}
                    setCompensation = {this.setCompensation}
                />
                <JobWorkingPlaceInput
                    location={fields.location}
                    setLocation ={this.setLocation}
                />
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
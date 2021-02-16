import React, {Component} from 'react';
import EditIcon from "@material-ui/icons/Edit";
import {Backdrop, createStyles, Fade, IconButton, Modal} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import EditJobForm from "./EditJobForm";

const useStyles = ((theme) => createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px gray #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
        marginTop: theme.spacing(4)
    },
}));

class EditJobModal extends Component {

    state = {
        open: false
    }

    editRow = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        }, () => this.props.jobsSet())
    }

    render() {
        const { classes, job } = this.props;
        return (
            <div>
                <IconButton aria-label="edit row" size="small" onClick={(event) => this.editRow(event)}>
                    <EditIcon/>
                </IconButton>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Editar Trabalho</h2>
                            <EditJobForm job={job}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default withStyles(useStyles)(EditJobModal);
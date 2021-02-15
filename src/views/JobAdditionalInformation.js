import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Backdrop, Fade, Modal} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const useStyles = ((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

class JobAdditionalInformation extends Component {
    constructor(props) {
        super(props);
    }


    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
                <React.Fragment>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>Informações Adicionais</Button>
                    <Modal
                        open={this.state.open}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        onClose={this.handleClose}
                        closeAfterTransition
                        className={classes.modal}
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={this.state.open} >
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title">Transition modal</h2>
                                <p id="transition-modal-description">react-transition-group animates me.</p>
                            </div>
                        </Fade>
                    </Modal>
                </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(JobAdditionalInformation);
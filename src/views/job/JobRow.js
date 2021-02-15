import React, {Component} from 'react';
import JobRequirementsList from "./JobRequirementsList";
import JobCompensantion from "./JobCompensantion";
import JobWorkingPlace from "./JobWorkingPlace";
import JobAdditionalInformation from "./JobAdditionalInformation";
import {withStyles} from "@material-ui/core/styles";
import {
    Collapse,
    IconButton,
    TableCell,
    TableRow,
} from "@material-ui/core";
import {KeyboardArrowDown, KeyboardArrowUp} from "@material-ui/icons";

const useRowStyles = (styles => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
}));

class JobRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleOpen = () => {
        this.setState((previousState) => ({
            open: !previousState.open
        }))
    }


    render() {
        const { job, classes } = this.props;
        return (
            <React.Fragment>
               <TableRow className={classes.root}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={this.toggleOpen}>
                            {this.state.open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                        </IconButton>
                    </TableCell>
                   <TableCell component="th" scope="row">
                       {job.title}
                   </TableCell>
                   <TableCell>{job.company}</TableCell>
                   <TableCell>
                       <JobRequirementsList
                       requirements={job.requirements}
                       />
                   </TableCell>
                   <TableCell>
                       <JobCompensantion
                           compensation={job.compensation}
                       />
                   </TableCell>
                   <TableCell>
                       <JobWorkingPlace
                           location={job.location}
                       />
                   </TableCell>
               </TableRow>
               <TableRow>
                   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <JobAdditionalInformation job={job}/>
                        </Collapse>
                    </TableCell>
               </TableRow>
            </React.Fragment>
        );
    }
}

export default withStyles(useRowStyles)(JobRow);
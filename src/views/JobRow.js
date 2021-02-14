import React, {Component} from 'react';
import JobRequirementsList from "./JobRequirementsList";
import JobCompensantion from "./JobCompensantion";

class JobRow extends Component {
    render() {
        const job = this.props.job;
        return (
            <tr>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <JobRequirementsList
                    requirements={job.requirements}
                />
                <JobCompensantion
                    compensation = {job.compensation}
                />
            </tr>
        );
    }
}

export default JobRow;
import React, {Component} from 'react';
import JobRequirementsList from "./JobRequirementsList";
import JobCompensantion from "./JobCompensantion";
import JobWorkingPlace from "./JobWorkingPlace";
import JobAdditionalInformation from "./JobAdditionalInformation";

class JobRow extends Component {
    render() {
        const job = this.props.job;
        return (
            <tr>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>
                    <JobRequirementsList
                        requirements={job.requirements}
                    />
                </td>
                <td>
                    <JobCompensantion
                        compensation = {job.compensation}
                    />
                </td>
                <td>
                    <JobWorkingPlace
                        location = {job.location}
                    />
                </td>
                <td>
                    <JobAdditionalInformation/>
                </td>
            </tr>
        );
    }
}

export default JobRow;
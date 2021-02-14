import React, {Component} from 'react';

class JobRequirementsList extends Component {
    render() {
        const requirements = this.props.requirements.map((requirement, index) =>
            <li key={index}>{requirement}</li>
        )
        return (
                <ul>
                    {requirements}
                </ul>
        );
    }
}

export default JobRequirementsList;
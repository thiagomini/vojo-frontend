import React, {Component} from 'react';

class JobCard extends Component {
    state = {
        job: this.props.job
    }
    render() {
        return (
            <div className="Card">
                <span>{this.state.job.title}</span>
                <span>{this.state.job.company}</span>
            </div>
        );
    }
}

export default JobCard;
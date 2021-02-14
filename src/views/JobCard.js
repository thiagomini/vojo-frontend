import React, {Component} from 'react';
import '../style/JobCard.css';
import JobCardHeader from "./JobCardHeader";

class JobCard extends Component {
    state = {
        job: this.props.job
    }
    render() {
        return (
            <div className="Card">
               <JobCardHeader job={this.state.job}/>
            </div>
        );
    }
}

export default JobCard;
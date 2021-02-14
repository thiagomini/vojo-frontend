import React, {Component} from 'react';

class JobCardHeader extends Component {
    state = {
        job: this.props.job
    }

    render() {
        const { title, company } = this.state.job
        return (
            <>
                <h2>{title}</h2>
                <h2>{company}</h2>
            </>
        );
    }
}

export default JobCardHeader;
import React, { Component } from 'react'
import JobsTable from "./JobsTable";
export default class JobsView extends Component {
    state = {
        jobs: [
        ]
    }

    componentDidMount() {
        this.jobsSet();
    }

    async jobsSet() {
        const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs`, {
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Vojo-Authorization': 'Bearer ' + localStorage.getItem('Authorization')
            },
        })

        if (response.ok) {
            const jsonData = await response.json();
            this.setState({
                jobs: jsonData
            })
        }

    }

    render() {
        return <div>
            <h1>Tela de Jobs</h1>
            <JobsTable jobs={this.state.jobs}/>
        </div>
    }
}

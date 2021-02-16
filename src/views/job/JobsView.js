import React, { Component } from 'react'
import JobsTable from "./JobsTable";
import '../../style/JobsView.css'

export default class JobsView extends Component {
    state = {
        jobs: [
        ]
    }

    componentDidMount() {
        this.jobsSet();
    }

    jobsSet = async () => {
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
            <h1 className={"view-header"}>Lista de Trabalhos</h1>
            <JobsTable jobs={this.state.jobs} jobsSet={this.jobsSet}/>
        </div>
    }
}

import React, { Component, useState } from 'react'
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
            <table>
                <tr>
                    <th>Título</th>
                    <th>Empresa</th>
                </tr>
                {this.state.jobs.map(job => {
                    return (
                        <tr>
                            <td>{job.title}</td>V
                            <td>{job.company}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    }
}

import React, {Component} from 'react';
import JobRow from "./JobRow";

class JobsTable extends Component {
    render() {
        const rows = this.props.jobs.map((job) =>
            <JobRow job={job} key={job._id}/>
        )
        return (
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Empresa</th>
                        <th>Requisitos</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default JobsTable;
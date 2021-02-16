import React, {Component} from 'react';
import JobRow from "./JobRow";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

class JobsTable extends Component {
    render() {
        const jobsSet = this.props.jobsSet;

        const rows = this.props.jobs.map((job) =>
            <JobRow jobsSet={jobsSet} job={job} key={job._id}/>
        )

        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell/>
                            <TableCell>Ativo</TableCell>
                            <TableCell>Título</TableCell>
                            <TableCell>Empresa</TableCell>
                            <TableCell>Requisitos</TableCell>
                            <TableCell>Remuneração</TableCell>
                            <TableCell>Localização</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default JobsTable;
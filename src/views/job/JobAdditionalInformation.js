import React, {Component} from 'react';
import {Box, Button, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

class JobAdditionalInformation extends Component {
    render() {
        const { job } = this.props;
        return (
            <Box margin={1} bgcolor="#90caf9" p={1} borderRadius={10} border={1}>
                <Typography variant="h6" gutterBottom component="div">
                    Informações Adicionais
                </Typography>
                <Table size="small" aria-label="informacoes">
                    <TableHead>
                        <TableRow>
                            <TableCell>Vagas</TableCell>
                            <TableCell>Formação</TableCell>
                            <TableCell>Horas de Trabalho</TableCell>
                            <TableCell>Descrição das atividades</TableCell>
                            <TableCell>Informações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>{job.totalSpots}</TableCell>
                        <TableCell>{job.education}</TableCell>
                        <TableCell>{job.workingHours ? job.workingHours : '-'}</TableCell>
                        <TableCell>{job.description}</TableCell>
                        <TableCell>{job.information}</TableCell>
                    </TableBody>
                </Table>
            </Box>
        );
    }
}

export default JobAdditionalInformation;
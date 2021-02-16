import React, {Component} from 'react';
import MuiAlert from '@material-ui/lab/Alert';

class Alert extends Component {
    render() {
        return (
             <MuiAlert elevation={6} variant="filled" {...this.props} />
        );
    }
}

export default Alert;
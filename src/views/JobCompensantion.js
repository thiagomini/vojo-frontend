import React, {Component} from 'react';

class JobCompensantion extends Component {
    render() {
        const { currency, amount, recurrency } = this.props.compensation

        const compensation = amount
                ? <p>{amount} ({currency}) {recurrency}</p>
                : <p> - </p>

        return (
            <td>
                {compensation}
            </td>
        );
    }
}

export default JobCompensantion;
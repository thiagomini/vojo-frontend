import React, {Component} from 'react';

class JobCompensantion extends Component {
    render() {
        const { currency, amount, recurrency, isVariable } = this.props.compensation

        const compensation = amount
                ? <p>{amount} ({currency}) {recurrency} {isVariable ? '(Variável)' : ''}</p>
                : <p> - </p>

        return (
            <>
                {compensation}
            </>
        );
    }
}

export default JobCompensantion;
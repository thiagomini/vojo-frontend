import React, {Component} from 'react';

class JobWorkingPlace extends Component {

    /**
     * @description Transforma o objeto location em uma string
     * @return {string}
     */
    locationToString = () => {
        const city = this.props.location?.city
        const state = this.props.location?.state
        const country = this.props.location?.country

        const stateString = city && state ? `, ${state}` : state
        const countryString = country ? `- ${country}` : country

        return `${city}${stateString} ${countryString}`
    }

    render() {
        return (
            <>
               {this.locationToString()}
            </>
        );
    }
}

export default JobWorkingPlace;
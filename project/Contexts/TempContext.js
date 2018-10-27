module.exports = `import React, { Component } from 'react';

export const TempContext = React.createContext({
    number: 0,
    add: () => { },
    subtract: () => { }
});

export class TempContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            add: (number) => { this.add(number) },
            subtract: (number) => { this.subtract(number) }
        }
    };

    add = (number) => {
        this.setState({ number: this.state.number + number })
    }

    subtract = (number) => {
        this.setState({ number: this.state.number - number })
    }

    render() {
        return (
            <TempContext.Provider value={this.state}>
                {this.props.children}
            </TempContext.Provider>
        )
    }
}
`
module.exports = `import React from "react";
import Navbar from '../Layout/Navbar'
import { TempContext } from '../../Contexts/TempContext'

export default class Page1 extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>Page 1 template</h3>
                    <TempContext.Consumer>
                        {(tempContext) => (
                            <React.Fragment>
                                <p>Value: {tempContext.number}</p>
                                <button className="btn btn-primary mr-1" onClick={() => tempContext.add(1)}>Add</button>
                                <button className="btn btn-primary" onClick={() => tempContext.subtract(1)}>Subtract</button>
                            </React.Fragment>
                        )}
                    </TempContext.Consumer>
                </div>
            </div>
        );
    }
}
`
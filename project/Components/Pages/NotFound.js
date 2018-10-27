module.exports = `import React from "react";

import Navbar from '../Layout/Navbar'

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3>404</h3>
            </div>
        );
    }
}
`
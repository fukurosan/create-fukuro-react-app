module.exports = `import React from "react";
import Highcharts from "highcharts";
import Navbar from '../Layout/Navbar'

export default class Page2 extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillUnmount() {
        this.myChart.destroy();
    }

    componentDidMount() {
        let graphData = [
            {
                name: 'One',
                data: [1, 5, 2]
            },
            {
                name: 'Two',
                data: [5, 7, 3]
            }
        ];
        this.myChart = Highcharts.chart("thisChart", {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Temporary Graph'
            },
            xAxis: {
                categories: ['Cat 1', 'Cat 2', 'Cat 3']
            },
            yAxis: {
                title: {
                    text: 'Comparison'
                }
            },
            series: graphData
        }
        );
    }

    render() {
        return (
            <div>
                <Navbar />
                    <div className="container">
                    <h3>Page 2 template</h3>
                    <br />
                    <div id="thisChart"></div>
                </div>
            </div>
        )
    }
}
`



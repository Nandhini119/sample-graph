import React, { Component } from 'react';
import {Bar,Line,Pie,Doughnut} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { 
          chartData : {
              labels : ['Boston','Worcester','Springfield','Lowell',
              'Cambridge','New Bedford'],
              datasets : [
                    {
                      label : 'population',
                      data : [
                        917594,181045,153060,106519,105162,95072
                      ],
                      backgroundColor : [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(255,192,192,0.6)',
                        'rgba(255,102,255,0.6)',
                        'rgba(255,159,64,0.6)',
                        'rgba(255,99,132,0.6)'
                      ]
                    }
                    ]
      }
  }
}
static defaultProps = {
	displayTitle : true,
	displayLegend : true,
	legendPosition : 'right'
}
  render() {
    return (
      <div className="Chart">
        CHART COMPONENT
        <Bar
        data = {this.state.chartData}
        options = {{title : {
        	display : this.props.displayTitle,
        	text : 'ABC'
        },
        legend : {
        	display : this.props.displayLegend,
        	position : this.props.legendPosition
        }}}/>
        <Pie
        data = {this.state.chartData}
        options = {{title : {
        	display : this.props.displayTitle,
        	text : 'ABC'
        },
        legend : {
        	display : this.props.displayLegend,
        	position : this.props.legendPosition
        }}}/>
        <Doughnut
        data = {this.state.chartData}
        options = {{title : {
        	display : this.props.displayTitle,
        	text : 'ABC'
        },
        legend : {
        	display : this.props.displayLegend,
        	position : this.props.legendPosition
        }}}/>
      </div>
    );
  }
}

export default Chart;

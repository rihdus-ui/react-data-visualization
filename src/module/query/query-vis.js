/**
 * Created by rihdus on 17/6/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';
import '../../../node_modules/c3/c3.css';

class QueryVis extends React.Component {

   static propTypes = {
      data: PropTypes.array
   };

   static defaultProps = {
      data: []
   };

   constructor(props) {
      super(props);

      this.chartContainer = null;
      this._chart = null;
   }

   componentDidMount() {
      this._chart = c3.generate({
         bindto: this.chartContainer,
         data: {
            columns: this.props.data
         }
      });
   }

   componentDidUpdate() {
      console.log(this.props.data);
      this._chart.load({
         columns: this.props.data
      })
   }

   render() {
      this.placeholer = this.props.data.length === 0 ? (
         <div className="placeholder">
            <p className="t-center cl-light-gray capitalize">No query visualisation available</p>
         </div>
      ) : null;

      this.chart = this.props.data.length > 0 ? (
         <div className="chartContainer flex1">
         </div>
      ) : null;

      return (
         <div className="QueryVis f-col flex1">
            {this.placeholer}
            <div ref={(ref) => {this.chartContainer = ref}}>{this.chart}</div>
         </div>
      )
   }
}


QueryVis.propTypes = {
   data: PropTypes.array
};

QueryVis.defaultPorps = {
   data: []
};

export default QueryVis;
/**
 * Created by rihdus on 17/6/17.
 */

import React from 'react';

class QueryVis extends React.Component {

   render() {
      this.placeholer = (
         <div className="placeholder">
            <p className="t-center cl-light-gray capitalize">No query visualisation available</p>
         </div>
      );

      return (
         <div className="QueryVis f-col flex1">
            {this.placeholer}
         </div>
      )
   }
}


export default QueryVis;
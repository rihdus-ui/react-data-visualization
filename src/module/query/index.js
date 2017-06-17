/**
 * Created by rihdus on 17/6/17.
 */

import React, { Component } from 'react';
import QueryBar from './query-bar';
import QueryData from './query-data';
import QueryVis from './query-vis';

import './index.css';

export default class QueryView extends Component {

   render() {
      return (
         <div className="flexbox f-row flex1">
            <div className="" style={layoutStyles.ctrlPane}>
               <QueryBar/>
            </div>
            <div className="flexbox f-col flex1">
               <div className="flex1">
                  <QueryData/>
               </div>
               <div className="hr"/>
               <div className="flex1">
                  <QueryVis/>
               </div>
            </div>
         </div>
      )
   }
}

const layoutStyles = {
   container: {},
   ctrlPane: {
      width: '300px'
   },
   queryData: {}
};
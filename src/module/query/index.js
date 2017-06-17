/**
 * Created by rihdus on 17/6/17.
 */

import React, { Component } from 'react';
import QueryBar from './query-bar';
import QueryData from './query-data';
import QueryVis from './query-vis';

import store from './store';

import './index.css';

export default class QueryView extends Component {

   constructor(props) {
      super(props);

      this.state = {
         data: []
      }
   }

   componentDidMount() {
      store.read()
         .then((resp) => {
            this.setState({
               data: resp.data
            });
         })
   }

   render() {
      return (
         <div className="flexbox f-row flex1">
            <div className="" style={layoutStyles.ctrlPane}>
               <QueryBar/>
            </div>
            <div className="flexbox f-col flex1">
               <div className="flex1">
                  <QueryData data={this.state.data}/>
               </div>
               <div className="hr"/>
               <div className="flex1">
                  <QueryVis data={this.state.data}/>
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
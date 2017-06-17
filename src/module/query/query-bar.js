/**
 * Created by rihdus on 17/6/17.
 */

import React from 'react';
import './index.css';

export default (props) => {

   return (
      <div className="QueryBar f-col mt2">
         <div className="f-row">
            <div className="QueryBar-CtrlRow flex1">
               <span className="fwbold">Type Selection</span>
            </div>
            <div className="QueryBar-CtrlRow btn btn-clear f-row flex1">
               <span className="cl-light-gray">Sample 001</span>
               <span className="flex1"/>
               <i className="fa fa-caret-down pl1 pr1"/>
            </div>
         </div>


         <div className="QueryBar-CtrlRow btn btn-clear f-row">
            <span className="cl-light-gray">Select to Add Query Parameter</span>
            <span className="flex1"/>
            <i className="fa fa-caret-down pl1 pr1"/>
         </div>

         <div className="f-row mb2 t-center">
            <div className="flex1 btn btn-dark">All Inputs</div>
            <div className="flex1 btn btn-dark">All Outputs</div>
            <div className="flex1 btn btn-dark">
               <i className="fa fa-trash-o mr1"/>
               <span>Clear</span>
            </div>
         </div>

         <p className="t-center cl-light-gray">No Selected query parameter</p>
      </div>
   )
}
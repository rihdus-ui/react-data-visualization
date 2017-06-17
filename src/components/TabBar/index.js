/**
 * Created by rihdus on 17/6/17.
 */

import React from 'react';
import './TabBar.css';

const TabItem = (props) => {
   let tabItemClass = [];

   props.active && tabItemClass.push('tabItem--active');

   return (
      <div className={`tabItem ${tabItemClass.join(' ')}`}>
         {props.children}
      </div>
   )
};

const TabBar = (props) => {

   let tabStyle = {},
      tabClass = [];

   switch (props.orientation) {
      case 'row':
      default:
         tabStyle.marginLeft = props.tabAsideThickness || null;
         break;
      case 'col':
         tabStyle.left = props.thickness || null;
         tabStyle.height = props.thickness || null;
         break;
   }

   props.theme && tabClass.push(`tabBar--${props.theme}`);

   return (
      <div className={`tabBar tb--${props.orientation} ${tabClass.join(' ')}`} style={tabStyle}>
         <div className="tablist">
            {props.children}
         </div>
      </div>
   )
};

const TabContent = (props) => {

   let tabContentStyle = {
      marginLeft: props.tabAsideThickness ? props.tabAsideThickness : 0
   };
   return (
      <div className="tabContent flex1 flexbox f-col" style={tabContentStyle}>
         {props.children}
      </div>
   )
};

export { TabBar, TabItem, TabContent }
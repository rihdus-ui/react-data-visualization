import React, { Component } from 'react';
import { TabBar, TabItem, TabContent } from './components/TabBar';
import QueryView from './module/query';
import './App.css';
import 'font-awesome/css/font-awesome.css'


class App extends Component {

   constructor(props) {
      super(props);

      this.layoutProps = {
         asideTabThickness: '30px'
      };
   }

   render() {
      return (
         <div className="App flexbox f-col">

            <h1>Data Visualization Playground</h1>
            <h3>
               <span>D3</span>
            </h3>

            <div className="tabsContainer">
               <TabBar orientation="row" theme="angled"
                       tabAsideThickness={this.layoutProps.asideTabThickness}>
                  <TabItem>
                     <i className="tab-icon fa fa-compass"></i>
                     <span>Explore</span>
                  </TabItem>

                  <TabItem active={true}>
                     <i className="tab-icon fa fa-search"></i>
                     <span>Query</span>
                  </TabItem>

                  <TabItem>
                     <i className="tab-icon fa fa-bar-chart"></i>
                     <span>Compare</span>
                  </TabItem>

                  <TabItem>
                     <i className="tab-icon fa fa-cloud-upload"></i>
                     <span>Upload</span>
                  </TabItem>
               </TabBar>

               <TabBar orientation="col" theme="flat"
                       thickness={this.layoutProps.asideTabThickness}>
                  <TabItem>
                     <span>Level 1-1</span>
                  </TabItem>

                  <TabItem>
                     <span>Level 1-2</span>
                  </TabItem>
               </TabBar>
            </div>

            <div className="flexbox flex1 f-col">
               <TabContent tabAsideThickness={this.layoutProps.asideTabThickness}>
                  <QueryView/>
               </TabContent>
            </div>

         </div>
      );
   }
}

export default App;

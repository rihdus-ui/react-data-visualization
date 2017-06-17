/**
 * Created by rihdus on 17/6/17.
 */

import axios from 'axios';
import _ from 'lodash';

const config = {
   url: "https://gist.githubusercontent.com/li-xinyang/040cfc2f69ee76e3508124fc11eeda33/raw/5ffa94cc3b5d0162b46c19c738c8479f1e321fb2/SampleData.csv"
};

export default {
   config: config,
   data: [],
   init: () => {},
   read: () => {
      return axios.get(config.url)
         .then((resp) => {
            let c3Data = this.data = resp.data;
            try {
               c3Data = prepC3Data(this.data);
            } catch (e) {
               c3Data = [];
               throw("failed to process data..")
            }

            return {
               data: c3Data
            };
         })
   }
}

function prepC3Data(raw, ) {
   var csvItems = raw.split('\n');
   return _.reduce(csvItems, (result, item, index) => {
      let row = item.split(', ');

      /* Strip `'` character from the key names */
      row[0] = row[0].substr(1, row[0].length-2);
      result.push(row);
      return result;
   }, [])
}
import React from 'react';
import ItemsRows from "./ItemsRow";
import {HIDE_LOGIN, SET_USER_DATA} from "../../../actions/types";
import connect from "react-redux/es/connect/connect";
import {toggleColor} from "../../../actions/action";
import clone from "clone";

class ProductsGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      let info = {
          total: 100,
          items: this.props.itemsFiltered.items,
          offset: 24,
          itemsOnPage: 12
      };

       let itemsRows = {};
       let i,j, tempArr, chunk = 4;
       let numberOfRows = 0;
       for (i=0,j=info.items.length; i<j; i+=chunk) {
           tempArr = info.items.slice(i,i+chunk);
           itemsRows.i = tempArr;
           numberOfRows++;
           // do whatever
       }




       var rows = [];
       for (let j = 0; j < numberOfRows; j++) {
           // note: we add a key prop here to allow react to uniquely identify each
           // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
           rows.push(<ItemsRows items={this.props.itemsFiltered.items} offset={j*4}></ItemsRows>);
       }
       const html =
           <div>
            <div className="container">
               {rows}
             </div>
           </div>;

      return (
          html
      );
   }
}

const mapStateToProps = ({appSettings}) => {
    const {itemsFiltered, itemsFilter} = appSettings;
    return {itemsFiltered, itemsFilter};
};

export default connect(mapStateToProps, {
    toggleColor: toggleColor
})(ProductsGrid);

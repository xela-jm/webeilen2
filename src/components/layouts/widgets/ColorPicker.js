import React from 'react';

import connect from "react-redux/es/connect/connect";
import {paginate, toggleColor} from "../../../actions/action";
import clone from "clone";

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
    }

    handleColorInputChange = (event) =>  {
        let itemsFilter = clone(this.props.itemsFilter);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        itemsFilter.color[name] = value
        this.props.paginate(itemsFilter);
    }

    render() {
        return (
            <div className="swatch clearfix" data-option-index={1}>
                <div className="header">Color</div>
                <div data-value="Blue" className="swatch-element color blue-swatch available">
                    <div className="tooltip">Blue</div>
                    <input quickbeam="color" id="swatch-1-blue" type="checkbox" checked={this.props.itemsFilter.color.blue_opt} onChange={this.handleColorInputChange} name="blue_opt" defaultValue="Blue"/>
                    <label htmlFor="swatch-1-blue" style={{borderColor: 'blue'}}>
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                        <span style={{backgroundColor: 'blue'}} />
                    </label>
                </div>
                <div data-value="Red" className="swatch-element color red-swatch available">
                    <div className="tooltip">Red</div>
                    <input quickbeam="color" id="swatch-1-red" type="checkbox" checked={this.props.itemsFilter.color.red_opt} onChange={this.handleColorInputChange} name="red_opt" defaultValue="Red" />
                    <label htmlFor="swatch-1-red" style={{borderColor: 'red'}}>
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                        <span style={{backgroundColor: 'red'}} />
                    </label>
                </div>
                <div data-value="Yellow" className="swatch-element color yellow-swatch available">
                    <div className="tooltip">Yellow</div>
                    <input quickbeam="color" id="swatch-1-yellow" checked={this.props.itemsFilter.color.yellow_opt} onChange={this.handleColorInputChange} type="checkbox" name="yellow_opt" defaultValue="Yellow" />
                    <label htmlFor="swatch-1-yellow" style={{borderColor: 'yellow'}}>
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                        <span style={{backgroundColor: 'yellow'}} />
                    </label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({appSettings}) => {
    const {itemsFiltered, itemsFilter} = appSettings;
    return {itemsFiltered, itemsFilter};
};

export default connect(mapStateToProps, {
    toggleColor: toggleColor,
    paginate: paginate
})(ColorPicker);
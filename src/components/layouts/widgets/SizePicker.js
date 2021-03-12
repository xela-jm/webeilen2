import React from 'react';

import connect from "react-redux/es/connect/connect";
import {paginate, toggleColor, toggleSize} from "../../../actions/action";
import clone from "clone";


class SizePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSizeInputChange = (event) =>  {
        let itemsFilter = clone(this.props.itemsFilter);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        itemsFilter.size[name] = value
        this.props.paginate(itemsFilter);
    }

    render() {
        return (
            <div className="swatch clearfix" data-option-index={0}>
                <div className="header">Size</div>
                <div data-value="M" className="swatch-element plain m available">
                    <input id="swatch-0-m" type="checkbox" name="M" checked={this.props.itemsFilter.size.M} onChange={this.handleSizeInputChange} defaultValue="M" />
                    <label htmlFor="swatch-0-m">
                        M
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                    </label>
                </div>
                <div data-value="L" className="swatch-element plain l available">
                    <input id="swatch-0-l" type="checkbox" name="L" checked={this.props.itemsFilter.size.L} onChange={this.handleSizeInputChange} defaultValue="M" defaultValue="L" />
                    <label htmlFor="swatch-0-l">
                        L
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                    </label>
                </div>
                <div data-value="XL" className="swatch-element plain xl available">
                    <input id="swatch-0-xl" type="checkbox" name="XL" defaultValue="XL" checked={this.props.itemsFilter.size.XL} onChange={this.handleSizeInputChange}/>
                    <label htmlFor="swatch-0-xl">
                        XL
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                    </label>
                </div>
                <div data-value="XXL" className="swatch-element plain xxl available">
                    <input id="swatch-0-xxl" type="checkbox" name="XXL" checked={this.props.itemsFilter.size.XXL} onChange={this.handleSizeInputChange} defaultValue="XXL" />
                    <label htmlFor="swatch-0-xxl">
                        XXL
                        <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
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
    toggleSize: toggleSize,
    paginate: paginate
})(SizePicker);
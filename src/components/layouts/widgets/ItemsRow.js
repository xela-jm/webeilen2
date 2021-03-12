import React from 'react';

export default class ItemsRows extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        let offset = this.props.offset;
        let items = this.props.items;

        let rows = [];
        for (let i = 0; i < 4 && offset < items.length; i++, offset++) {
            rows.push(
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#">
                            <img className="pic-1" src={items[offset].link}/>
                        </a>
                        <ul className="social">
                            <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                            <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                            <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Women's Blouse</a></h3>
                        <div className="price">$16.00
                            <span>$20.00</span>
                        </div>
                        <a className="add-to-cart" href>+ Add To Cart</a>
                    </div>
                </div>
            </div>)
        }

        return (
            <div className="row"> {rows}
            </div>
        );
    }
}

import React, {Component} from "react";
import ProductsGrid from "../../components/layouts/widgets/productGrid";
import ColorPicker from "../../components/layouts/widgets/ColorPicker";
import SizePicker from "../../components/layouts/widgets/SizePicker";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import connect from "react-redux/es/connect/connect";
import {paginate, toggleSize} from "../../actions/action";
import clone from "clone";

const theme = createMuiTheme();

class HomePage extends Component {

    state = {
        offset: 10
    }

    handleClick = (offset) => {
        debugger;
        console.log("offset=" + offset)
        let filter = clone(this.props.itemsFilter);
        filter.offset = offset;
        this.props.paginate(filter);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="swatches">
                                <SizePicker/>
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div style={{textAlign: 'center', marginBottom: '12px'}} alignItems="center"
                                 justify="center">
                                <MuiThemeProvider theme={theme}>
                                    <CssBaseline />
                                    <Pagination
                                        className={this.props.itemsFiltered.total <= 12 ? 'invisible' : ''}
                                        limit={12}
                                        offset={this.props.itemsFiltered.offset}
                                        total={this.props.itemsFiltered.total}
                                        onClick={(e, offset) => this.handleClick(offset)}
                                    />
                                </MuiThemeProvider>
                            </div>
                            <ProductsGrid/>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({appSettings}) => {
    const {itemsFiltered, itemsFilter} = appSettings;
    return {itemsFiltered, itemsFilter};
};

export default connect(mapStateToProps, {
    paginate: paginate
})(HomePage);
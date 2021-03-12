import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    MDBBadge,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact';
import Cart from "./SignUp";
import connect from "react-redux/es/connect/connect";
import {
    fetchData,
    hideAlertAction,
    logOut,
    showAlertAction,
    showLogin,
    toggleAlertAction
} from "../../../actions/action";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false,
        register: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    showModal = () => {
        this.props.showAlertAction("e", "d");
    };

    showLogin = () => {
        this.props.showLogin();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <header>
                    <MDBNavbar expand="md">
                        <MDBNavbarBrand>
                            <strong className="black-text">T-SHORT</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse}/>
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!">Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">Features</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">Pricing</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">Dropdown</div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon fab icon="twitter"/>
                                        <MDBBadge color="danger" className="ml-2">4</MDBBadge>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem hidden={this.props.userDetails != null}>
                                    <MDBNavLink onClick={this.showModal} to="">Sign Up</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem hidden={this.props.userDetails != null}>
                                    <MDBNavLink onClick={this.showLogin} to="#!">Sign In</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem hidden={this.props.userDetails == null}>
                                    <MDBNavLink onClick={this.props.logOut} to="#!">Log out</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle hidden={this.props.userDetails == null} nav caret>
                                            <MDBIcon icon="user"/>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Cart/>
                </header>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({appSettings}) => {
    const {userDetails} = appSettings;
    return {userDetails};
};

export default connect(mapStateToProps, {
    showAlertAction: showAlertAction,
    showLogin: showLogin,
    logOut: logOut,
})(Header);
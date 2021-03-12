import React, {Component} from "react";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {MDBBtn, MDBContainer, MDBModal} from "mdbreact";
import connect from "react-redux/es/connect/connect";
import {
    fetchData,
    hideAlertAction,
    hideLogin, login,
    showAlertAction,
    showLogin,
    toggleAlertAction, toggleLogin
} from "../../../actions/action";


class SignUp extends Component {


    constructor(props) {
        super(props);

        //this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    state = {
        user: {
            name: "",
            password: "",
            email: ""
        }
    };

   /* handleChange(event) {
        this.state.name = event.target.value;
    }
*/


    handleNameChange(event) {
        this.state.user.name = event.target.value;
        this.setState(this.state);
    }

    handlePasswordChange(event) {
        this.state.user.password = event.target.value;
        this.setState(this.state);
    }

    handleEmailChange(event) {
        this.state.user.email = event.target.value;
        this.setState(this.state);
    }

    toggle = () => {
        this.props.toggleAlertAction("d", "d");
    };

    signUpSubmit = () => {
        this.props.onFetchData(this.state.user)
    };

    loginSubmit = () => {
        this.props.login(this.state.user)
    };

    render() {
        return (
            <div className="iron-cart-wrap">
                <IconButton
                    color="inherit"
                    aria-haspopup="true"
                    variant="contained"
                    className="icon-btn mr-10"
                    aria-label="Cart"
                    onClick={this.handleClick}
                >
                </IconButton>


                <MDBContainer>
                    {/* MODAL */}
                    <MDBModal isOpen={this.props.showAlert} toggle={this.toggle} size="lg" full-height position="top">
                        <div className="card">
                            <header className="card-header test1">
                                <h5 className="modal-title">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                        onClick={this.handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder="" value={this.state.user.name} onChange={this.handleNameChange}/>
                                        </div>

                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" "/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input value={this.state.user.email} onChange={this.handleEmailChange} type="email" className="form-control" placeholder=""/>
                                        <small className="form-text text-muted">We'll never share your email with anyone
                                            else.
                                        </small>
                                    </div>


                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input value={this.state.user.password} onChange={this.handlePasswordChange} className="form-control" type="password"/>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onClick={this.signUpSubmit}
                                            type="button"
                                            value="Register"
                                            className="btn btn-primary btn-block"
                                        />
                                    </div>

                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you
                                        accept our <br/> Terms of use and Privacy Policy.
                                    </small>
                                </form>
                            </article>

                            <div className="border-top card-body text-center">Have an account? <a href="">Log In</a>
                            </div>
                        </div>

                    </MDBModal>

                    <MDBModal isOpen={this.props.showLoginAlert} toggle={this.props.toggleLogin1} size="lg" full-height position="top">
                        <div className="card">
                            <header className="card-header test1">
                                <h5 className="modal-title">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                        onClick={this.hideLogin}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder="" value={this.state.user.name} onChange={this.handleNameChange}/>
                                        </div>

                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" "/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input value={this.state.user.email} onChange={this.handleEmailChange} type="email" className="form-control" placeholder=""/>
                                        <small className="form-text text-muted">We'll never share your email with anyone
                                            else.
                                        </small>
                                    </div>


                                    <div className="form-group">
                                        <label>Ppassword</label>
                                        <input value={this.state.user.password} onChange={this.handlePasswordChange} className="form-control" type="password"/>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onClick={this.loginSubmit}
                                            type="button"
                                            value="Register"
                                            className="btn btn-primary btn-block"
                                        />
                                    </div>

                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you
                                        accept our <br/> Terms of use and Privacy Policy.
                                    </small>
                                </form>
                            </article>

                            <div className="border-top card-body text-center">Have an account? <a href="">Log In</a>
                            </div>
                        </div>

                    </MDBModal>
                </MDBContainer>
            </div>
        );
    }
}


const mapStateToProps = ({appSettings}) => {
    const {showAlert, userDetails, showLoginAlert} = appSettings;
    return {showAlert, userDetails, showLoginAlert};
};

export default connect(mapStateToProps, {
    hideAlertAction: hideAlertAction,
    showAlertAction: showAlertAction,
    toggleAlertAction: toggleAlertAction,
    hideLogin: hideLogin,
    showLogin: showLogin,
    toggleLogin1: toggleLogin,
    onFetchData: fetchData,
    login: login
})(SignUp);
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <a href="" className="float-right btn btn-outline-primary mt-1">Log in</a>
                            <h4 className="card-title mt-2">Sign up</h4>
                        </header>
                        <article className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name </label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>

                                    <div className="col form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" placeholder=" "/>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder=""/>
                                        <small className="form-text text-muted">We'll never share your email with anyone
                                            else.
                                        </small>
                                </div>

                                <div className="form-group">
                                    <label className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="option1"/>
                                            <span className="form-check-label">Male</span>
                                    </label>
                                    <label className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="option2"/>
                                            <span className="form-check-label"> Female</span>
                                    </label>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>City</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label>Country</label>
                                        <select id="inputState" className="form-control">
                                            <option> Choose...</option>
                                            <option>Uzbekistan</option>
                                            <option>Russia</option>
                                            <option selected="">United States</option>
                                            <option>India</option>
                                            <option>Afganistan</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Create password</label>
                                    <input className="form-control" type="password"/>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Register</button>
                                </div>

                                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you
                                    accept our <br/> Terms of use and Privacy Policy.</small>
                            </form>
                        </article>

                        <div className="border-top card-body text-center">Have an account? <a href="">Log In</a></div>
                    </div>

                </div>


            </div>

        )
    }
}
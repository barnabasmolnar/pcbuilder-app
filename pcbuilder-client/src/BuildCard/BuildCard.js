import React, { Component } from 'react';
import './buildcard-styles.css';
import SingleItem from './SingleItem';
import axios from 'axios';

import { connect } from "react-redux";

class BuildCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "HUF",
            configName: "",
            userName: "",
            errorObj: {}
        };
        
        this.changeConfigName = this.changeConfigName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="card m-auto">
                <div className="card-header bg-primary text-white">
                    <h2>Build that sexy config</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row first-row">
                            <div className="col-6">
                                Change currency:
                            </div>

                            <div className="col-6 d-flex justify-content-end">
                                <div className="btn-group" data-toggle="buttons">
                                    <label
                                        className="btn btn-sm btn-secondary active"
                                        onClick={() => this.changeCurrency("HUF")}
                                    >
                                        <input type="radio" name="options" id="option1" checked="" /> HUF
                                    </label>
                                    <label 
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => this.changeCurrency("EUR")}
                                    >
                                        <input type="radio" name="options" id="option2" /> EUR
                                    </label>
                                    <label 
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => this.changeCurrency("USD")}
                                    >
                                        <input type="radio" name="options" id="option3" /> USD
                                    </label>
                                    <label 
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => this.changeCurrency("GBP")}
                                    >
                                        <input type="radio" name="options" id="option3" /> GBP
                                    </label>
                                </div>
                            </div>
                        </div>

                        { 
                            this.props.items.map((obj) => <SingleItem {...obj} currency={this.state.currency} key={obj.componentName} />)
                        }

                        <div className="row save-config">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="inputDefault">
                                        <i className="fa fa-desktop save-config-icon" aria-hidden="true"></i>
                                        Give that sexy beast a name:
                                    </label>
                                    <input 
                                        type="text"
                                        className={this.state.errorObj.configName ? "form-control is-invalid" : "form-control"}
                                        placeholder="Console exterminator"
                                        onChange={this.changeConfigName}
                                        value={this.state.configName}
                                    />
                                    {<div className="invalid-feedback">Required</div>}
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="inputDefault">
                                        <i className="fa fa-user save-config-icon" aria-hidden="true"></i>
                                        And your name too please:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Gaben"
                                        onChange={this.changeUserName}
                                        value={this.state.userName}
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="button"
                            className="btn btn-success btn-lg btn-block"
                            onClick={this.handleSubmit}
                        >
                            Save that beast
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    changeConfigName(event) {
        this.setState({
            configName: event.target.value
        });
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        });
    }

    changeCurrency(currency) {
        this.setState({
            currency: currency
        });
    }

    handleSubmit() {
        const build = {
            userName: this.state.userName,
            configName: this.state.configName,
            currencyLabel: this.state.currency,
            componentsArr: this.props.items.map( item => ({...item, price: Number(item.price)}) )
        }
        axios.post("http://localhost:3001/api/builds", build)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log("Error yo: ", err.response.data);
                this.setState({errorObj: err.response.data.errors})
            })
    }
}

const mapStateToProps = ({ build }) => ({ items: build.items });
export default connect(mapStateToProps)(BuildCard);
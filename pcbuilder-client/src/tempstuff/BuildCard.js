import React, { Component } from 'react';
import './buildcard-styles.css';
import SelectWidget from './SelectWidget';

export default class BuildCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    componentName: "CPU",
                    componentImg: "imgURL",
                    componentIsIncluded: true
                },
                {
                    componentName: "GPU",
                    componentImg: "imgURL",
                    componentIsIncluded: true
                },
                {
                    componentName: "Motherboard",
                    componentImg: "imgURL",
                    componentIsIncluded: true
                }
            ]
        };
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
                                    <label className="btn btn-sm btn-secondary active">
                                        <input type="radio" name="options" id="option1" checked="" /> HUF
                                    </label>
                                    <label className="btn btn-sm btn-secondary">
                                        <input type="radio" name="options" id="option2" /> EUR
                                    </label>
                                    <label className="btn btn-sm btn-secondary">
                                        <input type="radio" name="options" id="option3" /> USD
                                    </label>
                                    <label className="btn btn-sm btn-secondary">
                                        <input type="radio" name="options" id="option3" /> GBP
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <SelectWidget componentName={this.state.components[0].componentName}/>
                            {/* <div className="col-2 component-img">
                                <img src="img/cpu.svg" alt="CPU" />
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="cpuSelect">Select CPU:</label>
                                    <select className="form-control" id="cpuSelect">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div> */}

                            <div className="col-4">
                                <div className="form-group">
                                    <label className="control-label price-label">Price</label>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="exampleInputAmount">Amount</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
                                            <div className="input-group-addon">Ft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2 component-img">
                                <img src="img/gpu.svg" alt="GPU" />
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Select GPU:</label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        
                            <div className="col-4">
                                <div className="form-group">
                                    <label className="control-label price-label">Price</label>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
                                            <div className="input-group-addon">Ft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2 component-img">
                                <img src="img/mobo.svg" alt="Motherboard" />
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Select Motherboard:</label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        
                            <div className="col-4">
                                <div className="form-group">
                                    <label className="control-label price-label">Price</label>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
                                            <div className="input-group-addon">Ft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row save-config">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="inputDefault">
                                        <i className="fa fa-desktop save-config-icon" aria-hidden="true"></i>
                                        Give that sexy beast a name:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Console exterminator" id="inputDefault" />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="inputDefault">
                                        <i className="fa fa-user save-config-icon" aria-hidden="true"></i>
                                        And your name too please:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Gaben" id="inputDefault" />
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-success btn-lg btn-block">Save that beast</button>                
                    </div>
                </div>
            </div>
        )
    }
}
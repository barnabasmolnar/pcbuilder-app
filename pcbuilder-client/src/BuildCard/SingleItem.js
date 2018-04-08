import React from 'react';
import './buildcard-styles.css';

import CpuImg from '../ComponentImgs/CpuImg';
import GpuImg from '../ComponentImgs/GpuImg';
import MotherboardImg from '../ComponentImgs/MotherboardImg';
import RamImg from '../ComponentImgs/RamImg';
import SsdImg from '../ComponentImgs/SsdImg';
import HddImg from '../ComponentImgs/SsdImg';
import PsuImg from '../ComponentImgs/PsuImg';
import CaseImg from '../ComponentImgs/CaseImg';

// import Select from 'react-select';
import { Async } from 'react-select';
import 'react-select/dist/react-select.css';

import { changeProduct, changePrice } from '../actions/index';

import { connect } from "react-redux";

const renderImg = (componentName) => {
    switch(componentName) {
        case "CPU":
            return (<CpuImg />)
        case "GPU":
            return (<GpuImg />)
        case "Motherboard":
            return (<MotherboardImg />)
        case "RAM":
            return (<RamImg />)
        case "SSD":
            return (<SsdImg />)
        case "HDD":
            return (<HddImg />)
        case "PSU":
            return (<PsuImg />)
        case "Case":
            return (<CaseImg />)
    }
}

const SingleItem = (props) => {
    const handleProductChange = (selectedOption) => {
        props.changeProduct(props.componentName, selectedOption ? selectedOption.tipus : "");
        props.changePrice(props.componentName, selectedOption ? selectedOption.ar : "");
    }
    const handlePriceChange = (event) => {
        props.changePrice(props.componentName, event.target.value);
    }

    const getOptions = () => {
        return fetch(`http://localhost:3001/${props.componentName.toLowerCase()}.json`)
            .then((response) => response.json())
            .then((json) => ({ options: json }))
    }
    
    return (
        <div className="row">
            <div className="col-2 component-img">
                {renderImg(props.componentName)}
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label>Select {props.componentName}</label>

                    {/* <Select
                        value={props.itemName}
                        onChange={handleProductChange}
                        options={[
                            { value: 'One', label: 'One' },
                            { value: 'Two', label: 'Two' },
                        ]}
                    /> */}

                    <Async
                        loadOptions={getOptions}
                        valueKey={"tipus"}
                        labelKey={"tipus"}
                        onChange={handleProductChange}
                        value={props.itemName}
                    />

                    {/* <select className="form-control">
                        <option>{props.itemName}</option>
                    </select> */}
                </div>
            </div>

            <div className="col-4">
                <div className="form-group">
                    <label className="control-label price-label">Price</label>
                    <div className="form-group">
                        <label className="sr-only">Amount (in dollars)</label>
                        <div className="input-group">
                            <input type="number" className="form-control" placeholder="Amount" onChange={handlePriceChange} value={props.price} />
                            <div className="input-group-addon">{props.currency}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({ price: state.build.items.find(item => item.componentName === props.componentName).price });
// const itemObj = state.build.items.find(item => item.componentName === props.componentName);
// return { price: itemObj ? itemObj.price : "" }

const mapDispatchToProps = (dispatch) => ({
    changeProduct: (component, newProduct) => dispatch(changeProduct(component, newProduct)),
    changePrice: (component, newPrice) => dispatch(changePrice(component, newPrice))
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
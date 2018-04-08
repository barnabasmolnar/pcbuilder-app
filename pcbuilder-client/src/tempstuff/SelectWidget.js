import React from 'react';

const SelectWidget = (props) => (
    <div>
        <div className="col-2 component-img">
            <img src={props.componentImg} alt={props.componentName} />
        </div>

        <div className="col-6">
            <div className="form-group">
                <label htmlFor="cpuSelect">Select {props.componentName}</label>
                <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
        </div>
    </div>
)

export default SelectWidget;
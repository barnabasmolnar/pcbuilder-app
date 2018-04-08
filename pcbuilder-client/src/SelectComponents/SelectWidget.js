import React from 'react';

const SelectWidget = (props) => (
    <div 
        className="component-type" style={{background: props.componentIsIncluded ? '#23a127' : '#168cba' }}
        onClick= {() => props.changeIncluded(props.componentName)}
    >
        {props.componentImg}
        {props.componentName}
        {props.componentIsIncluded ? <i className="fa fa-minus-circle"></i> : <i className="fa fa-plus-circle"></i>}
        <i className="fa fa-check" style={{display: props.componentIsIncluded ? 'block' : 'none' }}></i>
    </div>
)

export default SelectWidget;
import { combineReducers } from "redux";

const initialState = {items: []};

const build = (state=initialState, action) => {
    switch (action.type) {
        case "NEW_BUILD":
            return {items: action.components.map( (componentName) => ({componentName, itemName: "", price: ""}) )};
        case "CHANGE_PRODUCT":
            return {
                items: state.items
                .map((item) => item.componentName === action.component 
                    ? Object.assign({}, item, {itemName: action.newProduct})
                    : item 
                )
            };
        case "CHANGE_PRICE":
            return {
                items: state.items
                .map((item) => item.componentName === action.component
                    ? Object.assign({}, item, {price: action.newPrice})
                    :item
                )
            };
        default:
            return state;
    }
}

const reducers = combineReducers({build});

export default reducers;
export function newBuild(components) {
    return {type: "NEW_BUILD", components};
}

export function changeProduct(component, newProduct) {
    return {type: "CHANGE_PRODUCT", component, newProduct};
}

export function changePrice(component, newPrice) {
    return {type: "CHANGE_PRICE", component, newPrice};
}
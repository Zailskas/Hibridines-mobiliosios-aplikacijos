export function addCar(make, model, id) {
    return { type: 'ADD_CAR', make: make, model: model, id: id }
}

export function showAll() {
    return {type: 'SHOW_ALL'}
}

export function deleteCar(id) {
    return {type: 'DELETE_CAR', id: id}
}
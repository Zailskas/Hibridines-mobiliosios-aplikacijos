const initialState = {
    cars: [],
}

export const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CAR':
            const newCar = {
                ID: action.payload.id,
                Make: action.payload.make,
                Model: action.payload.model
            }
            return {
                cars: state.cars.concat(newCar),
            };
        case 'SHOW_ALL': 
            const carsList = [];
            for (let i = 0; i < action.payload.length; i++) {
                carsList.push(action.payload.item(i));
                console.log(action.payload.item(i));
            }
            return {
                cars: [...state.cars, ...carsList]
            };
        case 'DELETE_CAR':
            console.log(action.payload);
            const index = state.cars.findIndex((car) => car.ID === action.payload.ID);
            return {
                cars: [...state.cars.slice(0, index), ...state.cars.slice(index+1)]
            };
        case 'RESET_CAR_LIST':
            return {cars: []};
        default: 
            return state;
    }
}
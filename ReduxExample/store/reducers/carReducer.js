const initialState = {
    cars: [],
}

export const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CAR':
            console.log(action.id)
            return {
                cars: [
                    ...state.cars, 
                    {
                        make: action.make, 
                        model: action.model, 
                        id: action.id
                    }
                ]
            }
        case 'SHOW_ALL': 
            return {
                cars: [...state.cars]
            }
        case 'DELETE_CAR':
            const index = state.cars.findIndex((car) => car.id === action.id);
            return {
                cars: [...state.cars.slice(0, index), ...state.cars.slice(index+1)]
            }
        default: 
            return state;
    }
}
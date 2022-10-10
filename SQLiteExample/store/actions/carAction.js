import {insertCar, fetchCars, deleteCar} from '../../src/helper/db';
/*export function addCar(make, model, id) {
    return { type: 'ADD_CAR', make: make, model: model, id: id }
}*/

/*export function deleteCar(id) {
    return {type: 'DELETE_CAR', id: id}
}*/

export const addCar = (make, model) => {
    return async (dispatch) => {
      try {
        const dbResult = await insertCar(make, model);
        console.log(dbResult);
        dispatch({
          type: 'ADD_CAR',
          payload: {id: dbResult.insertId, make: make, model: model},
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };

export const showAll = () => {
  return async (dispatch) => {
    dispatch({type: 'RESET_CAR_LIST', payload: null})
    try {
      const result = await fetchCars();
      console.log(result);
      dispatch({type: 'SHOW_ALL', payload: result.rows})
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const removeCar = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteCar(id);
      console.log(result);
      console.log(id);
      dispatch({type: 'DELETE_CAR', payload: {ID: id}})
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
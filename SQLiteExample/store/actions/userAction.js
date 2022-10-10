import {checkUser, createUser, userLogin} from '../../src/helper/db';

export const addUser = (ID, username, email, password, callback) => {
    return async (dispatch) => {
      try {
        const dbResult = await checkUser(ID, username, email, password);
        console.log(dbResult);
        if(dbResult === 'alert'){
          dispatch({type: 'ALERT_TEXT', payload: 'User exist'});
        } else if (dbResult === 'newUser'){
          const dbResult_ = await createUser(ID, username, email, password);
          console.log(dbResult_);
          dispatch({
            type: 'CREATE_USER',
            payload: {ID: ID, Username: username, Email: email, Password: password},
          });
          dispatch({type: 'ALERT_TEXT', payload: 'Registration success'});
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
      callback();
    };
  };

  export const loginUser = (username, password, callback) => {
    return async (dispatch) => {
      try {
        const dbResult = await userLogin(username, password);
        console.log(dbResult.rows.length);
        if (dbResult.rows.length > 0) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: true,
          });
        } else {
          console.log('Blogi duomenys');
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: false,
          });
        }
        callback();
      } catch (err) {
        console.log('Klaida');
        throw err;
      }
    };
  };
const initialState = {
    user: [],
    alert: null,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            const newUser = {
                ID: action.payload.ID,
                Username: action.payload.Username,
                Email: action.payload.Email,
                Password: action.payload.Password,
            }
            console.log(newUser);
            return {
                ...state,
                user: newUser
            }
        case 'ALERT_TEXT': 
            console.log(action.payload)
            return {
                ...state,
                alert: action.payload
            }
        default: 
            return state;
    }
}

export const userLogin = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        console.log(action.payload);
        const newState = {
          isLoggedIn: action.payload,
        };
        console.log(newState);
        return newState;
      default:
        return state;
    }
  };
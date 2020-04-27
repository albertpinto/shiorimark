const userDefaultState = {
  email: "",
  password: "",
  name: "",
  title: "",
  company: "",
  avatar: "",
  details: "",
  id: "",
  token: "",
};

const LOGIN ='LOGIN'
const LOGOUT ='LOGOUT'

const loginReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    case LOGOUT:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export default loginReducer;

import { act } from "react-dom/test-utils";

export const initialState = {
  user: null,
  id: []
}
export const actionTypes = {
  SET_USER: 'SET_USER',
  LIKE_POST: 'LIKE_POST'
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.LIKE_POST:
      return {
        ...state,
        id: action.id,
      }

    default:
      return state;
  }
}
export default reducer
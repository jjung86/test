import * as types from '../actions/ActionTypes';


const initialState = {
  id: 0,
};

export default function counter(state = initialState, action) {
  console.log('Reducer...', action.newItem);
  switch (action.type) {
    case types.ADDPOST:
      return {
        ...state,
        number: state.id + 1,
      };
    case types.DELETEPOST:
      return {
        ...state,
        number: state.id - 1,
        title: state.title,
        category: state.category,
        content: state.content,
      };
    default:
      return state;
  }
}

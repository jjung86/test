import * as types from './ActionTypes';

// export const addPost = (newItem) => {
//   console.log(newItem);
//   return (
//   {
//     type: types.ADDPOST,
//     newItem,
//   }
//   );
// };
export const addPost = (newItem) => {
  const action = {
    type: types.ADDPOST,
    newItem,
  };
  console.log('add post action', action);
  return action;
};

export const deletePost = (newItem) => {
  const action = {
    type: types.DELETEPOST,
    newItem,
  };
  console.log('del post action', action);
  return action;
};

// export const deletePost = (newItem) => {
//   console.log('del post action',action);
//   return (
//   {
//     type: types.DELETEPOST,
//     title,
//     category,
//     content,
//   }
//   );
// };

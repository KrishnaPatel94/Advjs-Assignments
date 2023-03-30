export const addToDo = (data) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleTodo = (id) => {
  return {
    type: "DELTODO",
    id: id,
  };
};
export const remove = () => {
  return {
    type: "REMOVE",
  };
};

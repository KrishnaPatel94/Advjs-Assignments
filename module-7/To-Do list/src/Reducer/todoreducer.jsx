const initialdata = {
  list: [],
};

const todoReducer = (state = initialdata, action) => {
  switch (action.type) {
    case "ADDTODO":
      const id = action.payload.id;
      const data = action.payload.data;
      console.log(data);
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELTODO":
      const newList = state.list.filter((elem) => elem.id != action.id);
      console.log(newList);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;

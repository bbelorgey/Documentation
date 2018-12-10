const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state,action.item];
    case 'REMOVE_ITEM':
      const newState = [...state]
      newState.splice(action.index, 1)
      return newState
    default:
      return state;
  }
}
export default todoReducer;
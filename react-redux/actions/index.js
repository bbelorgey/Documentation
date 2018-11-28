export const addAction = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
};
export const removeAction = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
};
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items}) => (
  <ul>
    {
      items.map((item, key) => (
        <TodoItem item={item} key={key} />
      ))
    }
  </ul>
)

export default TodoList;